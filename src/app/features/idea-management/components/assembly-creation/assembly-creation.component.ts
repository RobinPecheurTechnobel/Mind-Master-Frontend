import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-assembly-creation',
  templateUrl: './assembly-creation.component.html',
  styleUrls: ['./assembly-creation.component.scss'],
  inputs : ['groupId']
})
export class AssemblyCreationComponent {
  groupId : number = -1;
  //TODO Here
  //vérifier user connecté
  
}
