import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ThinkerInGroup } from 'src/app/shared/models/account';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-group-child',
  templateUrl: './group-child.component.html',
  styleUrls: ['./group-child.component.scss'],
  inputs:["idRoute"]
})
export class GroupChildComponent implements OnChanges{
  idRoute : number = -1;
  thinkers : ThinkerInGroup[] = [];

  /**
   *
   */
  constructor(private _groupService : GroupService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idRoute'] && changes['idRoute'].currentValue != -1)
    {
      this._groupService.GetThinkersForThisOne(this.idRoute).subscribe({
        next : (value) => {
          this.thinkers = value;
        }
      })
    }
  }
}
