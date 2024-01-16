import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assembly-creation',
  templateUrl: './assembly-creation.component.html',
  styleUrls: ['./assembly-creation.component.scss'],
  inputs : ['groupId']
})
export class AssemblyCreationComponent {
  groupId : number = -1;

  isOpen : boolean = false;

  title : string = "";

  constructor(private _IdeaService : IdeaService,
    private _Router : Router) {
    
  }

  create() {
    console.log(this.title);
    if(this.title != undefined && this.title.replaceAll(" ","") != "" )
      this._IdeaService.createAssembly(this.title, this.groupId).subscribe({
        next : response => {
          if(response) {
            console.log(response);
            this._Router.navigateByUrl(`/assembly/${response.id}`)
          }
          
        }
      })
  }
  
}
