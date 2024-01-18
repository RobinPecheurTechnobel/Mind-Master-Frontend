import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeaService } from '../../services/idea.service';
import { Assembly, ConceptInAssembly, IdeaInConcept } from 'src/app/shared/models/idea';
import { AuthService } from 'src/app/shared/services/auth.service';

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
    private _IdeaService : IdeaService,
    private _AuthService : AuthService){
    this.idAssembly = +_ActivatedRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this._IdeaService.GetOneAssembly(this.idAssembly).subscribe({
      next : (value) => {
        this.assembly = value;
      }
    })
  }

  isConnected():boolean
  {
    return this._AuthService.getId() !=undefined
  }
  //TODO hover information
  GetTitle(conceptId: number) {
    return this.assembly?.concepts.find(c => c.id == conceptId);
  }
  GetNoTitle(){}
  GetConceptSort():ConceptInAssembly[]{
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
}
