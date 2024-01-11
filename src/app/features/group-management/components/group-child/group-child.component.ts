import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ThinkerInGroup } from 'src/app/shared/models/account';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GroupService } from 'src/app/features/group-management/services/group.service';
import { needConfirmation } from 'src/app/shared/decorators/confirm-dialog.decorator';
import { ConfirmDialogData } from 'src/app/shared//models/confirm-dialog-data'; 

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
    if(!isOwner) this.RemoveRight(groupeId,thinkerId,isOwner);
    else{ this.GiveRight(groupeId,thinkerId,isOwner);}
  }
  @needConfirmation({
    title : "Confirmation de suppression",
    message : `Voulez-vous vraiment retirer des droits à cette personne ?`,
    btnCancelText: "Non",
    btnOkText: "Oui"
  })
  RemoveRight(groupeId : number, thinkerId : number, isOwner : boolean){
    this._groupService.ChangeRightInThisGroup(groupeId,thinkerId,isOwner).subscribe({
      next : (value) =>{
        this.GetThinkers();
      },
      error : (error) => {
      }
    });
  }
  @needConfirmation({
    title : "Confirmation de suppression",
    message : `Voulez-vous vraiment donner des droits à cette personne ?`,
    btnCancelText: "Non",
    btnOkText: "Oui"
  })
  GiveRight(groupeId : number, thinkerId : number, isOwner : boolean){
    this._groupService.ChangeRightInThisGroup(groupeId,thinkerId,isOwner).subscribe({
      next : (value) =>{
        this.GetThinkers();
      },
      error : (error) => {
      }
    });
  }

  @needConfirmation({
    title : "Confirmation de suppression",
    message : "Voulez-vous vraiment retirer cet utilisateur de ce groupe ?",
    btnCancelText: "Non",
    btnOkText: "Oui"
  })
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
