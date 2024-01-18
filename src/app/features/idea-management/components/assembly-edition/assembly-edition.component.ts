import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from '../../services/idea.service';
import { Assembly, ConceptInAssembly, IdeaInConcept } from 'src/app/shared/models/idea';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assembly-edition',
  templateUrl: './assembly-edition.component.html',
  styleUrls: ['./assembly-edition.component.scss']
})
export class AssemblyEditionComponent {

  isVisibilityActivate : boolean = false;

  assemblyId : number;
  assembly : Assembly|undefined =undefined;

  assemblyForm : FormGroup;

  constructor(
    private _ActivatedRoute : ActivatedRoute,
    private _IdeaService : IdeaService,
    private _fb : FormBuilder){
  this.assemblyId = +_ActivatedRoute.snapshot.params["id"];
  
  this.assemblyForm = _fb.group({});
  }
  
  ngOnInit(): void {
    this._IdeaService.GetOneAssembly(this.assemblyId).subscribe({
      next : (value) => {
        this.assembly = value;
        this.createFormArry();
      }
    })
  }
  // sort object from backend
  GetConceptAssembliesSort():ConceptInAssembly[]{
    return this.assembly!.concepts.sort((a,b)=>
    a.order - b.order
    );
  }
  GetIdeaSort(ideas: IdeaInConcept[]):IdeaInConcept[]
  {
    return ideas.sort((a,b)=>
      a.order - b.order
    );
  }
  // manage form "components"
  createFormArry():void
  {
    this.assemblyForm = this._fb.group({
      title : [this.assembly!.title,[],[]],
      conceptAssemblies : this._fb.array([])
    });

    let control = <FormArray>this.assemblyForm.get('conceptAssemblies');
    for(let conceptInAssembly of this.GetConceptAssembliesSort())
    {
      let groupForm = this.AddConceptForm(conceptInAssembly);
      if(conceptInAssembly.concept.ideas != null)
        for(let idea of this.GetIdeaSort(conceptInAssembly.concept.ideas))
        {
          let array = <FormArray>(<FormGroup>groupForm.get("concept")).get("ideas");
          array.push(this.AddIdeaForm(idea));
        }
      control.push(groupForm);
    }
  }
  AddConceptForm(conceptAssembly : ConceptInAssembly|undefined): FormGroup 
  {
    return new FormGroup({
      id: new FormControl(conceptAssembly?.id??-1),
      order : new FormControl(conceptAssembly?.order??-1),
      concept : new FormGroup({
        id : new FormControl(conceptAssembly?.concept.id),
        title : new FormControl(conceptAssembly?.concept.title),
        ideas: new FormArray([])
      })
    });
  }
  AddIdeaForm(idea : IdeaInConcept|undefined): FormGroup 
  {
    return new FormGroup({
      id: new FormControl(idea?.id??-1),
      order : new FormControl(idea?.order??-1),
      content: new FormControl(idea?.idea.content),
      format: new FormControl(idea?.idea.format),
    });
  }
  GetConcepts() : FormControl[]
  {
    //console.log((this.assemblyForm.controls["concepts"] as FormArray).controls);
    return (this.assemblyForm.controls["conceptAssemblies"] as FormArray).controls as FormControl[]
  } 
  GetIdeas(form : any) : FormControl[]{
    return ((form.controls["concept"] as FormGroup).controls["ideas"] as FormArray).controls as FormControl[]
  }
  GetConceptGroup(index : number) : FormControl
  {
    //console.log((this.GetConcepts()[index]).value["order"]);
    return this.GetConcepts()[index]
  }
  ChangeDetectedInIdea(conceptAssemblyindex : number, ideaConceptIndex : number){
    let formArray = (this.assemblyForm.controls["conceptAssemblies"] as FormArray);
    let value = ((((formArray.controls[conceptAssemblyindex] as FormGroup)
                .get("concept") as FormGroup)
                  .controls["ideas"] as FormArray)
                    .controls[ideaConceptIndex] as FormGroup)
                      .controls["content"];
    console.log(value.value);
    let conceptId = (formArray.controls[conceptAssemblyindex] as FormGroup)
                      .get("concept")?.get("id")?.value;
    let control : FormGroup[] = [];
    for(let concept of formArray.controls){
      if(concept.get("concept")?.get("id")?.value == conceptId) {
        // isolation of all concept concerned
        (((concept.get("concept") as FormGroup)
          .controls["ideas"] as FormArray)
          .controls[ideaConceptIndex] as FormGroup)
          .controls["content"].setValue(value.value);
      }
    }
  }
}
