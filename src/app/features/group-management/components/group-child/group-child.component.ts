import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ThinkerInGroup } from 'src/app/shared/models/account';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GroupService } from 'src/app/features/group-management/services/group.service';

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
  constructor(private _groupService : GroupService,
      private _authService : AuthService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idRoute'] && changes['idRoute'].currentValue != -1)
    {
      this.GetThinkers();
    }
  }
  GetThinkers(){
    this._groupService.GetThinkersForThisOne(this.idRoute).subscribe({
      next : (value) => {
        this.thinkers = value;
      }
    });
  }
  isOwner(): boolean{

    let isUserConnectedOneOfThese = this._authService.isUserConnectedOneOfThese(this.thinkers.filter(t => t.isOwner).map(t => t.thinker.id));
    return isUserConnectedOneOfThese;
  }
  changeRight(groupeId : number, thinkerId : number, isOwner : boolean):void{
    this._groupService.ChangeRightInThisGroup(groupeId,thinkerId,isOwner).subscribe({
      next : (value) =>{
        this.GetThinkers();
      },
      error : (error) => {
      }
    });
  }
  removeThinker(groupId:number, thinkerId: number)
  {
    this._groupService.RemoveThinker(groupId,thinkerId).subscribe({
      next : (value) =>{
        this.GetThinkers();
      },
      error : (error) => {
      }
    });
  }
}
