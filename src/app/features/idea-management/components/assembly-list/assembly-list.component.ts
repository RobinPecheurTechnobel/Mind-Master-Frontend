import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Assembly } from 'src/app/shared/models/idea';
import { IdeaService } from '../../services/idea.service';

@Component({
  selector: 'app-assembly-list',
  templateUrl: './assembly-list.component.html',
  styleUrls: ['./assembly-list.component.scss'],
  inputs:["idGroup"]
})
export class AssemblyListComponent implements OnChanges {
  idGroup : number = -1;
  assemblies : Assembly[] = [];

  /**
   *
   */
  constructor(private _ideaService : IdeaService) {
  
}
ngOnChanges(changes: SimpleChanges): void {
  if(changes['idGroup'] && changes['idGroup'].currentValue != -1)
  {
    this._ideaService.GetAssembliesForThisGroup(this.idGroup).subscribe({
      next : (value) => {
        this.assemblies = value;
      }
    })
  }
}
}
