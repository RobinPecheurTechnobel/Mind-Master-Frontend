import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from '../../services/idea.service';
import { Assembly, ConceptInAssembly, IdeaInConcept } from 'src/app/shared/models/idea';

@Component({
  selector: 'app-assembly-detailled',
  templateUrl: './assembly-detailled.component.html',
  styleUrls: ['./assembly-detailled.component.scss']
})
export class AssemblyDetailledComponent implements OnInit{

  isVisibilityActivate : boolean = false;

  idAssembly : number;
  assembly : Assembly| undefined = undefined;

  constructor(private _ActivatedRoute : ActivatedRoute,
    private _IdeaService : IdeaService){
    this.idAssembly = +_ActivatedRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this._IdeaService.GetOneAssembly(this.idAssembly).subscribe({
      next : (value) => {
        this.assembly = value;
      }
    })
  }

  //TODO hover information
  GetTitle(conceptId: number) {
    return this.assembly?.concepts.find(c => c.id == conceptId);
  }
  GetNoTitle(){}
  GetConceptSort():ConceptInAssembly[]{
    return this.assembly!.concepts.sort((a,b)=>
    b.order - a.order
    );
  }
  GetIdeaSort(ideas: IdeaInConcept[]):IdeaInConcept[]
  {
    return ideas.sort((a,b)=>
      b.order - a.order
    );
  }
}
