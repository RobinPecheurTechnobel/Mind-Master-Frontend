import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../features/group-management/services/group.service';
import { group } from '../../models/group';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  private _authSubscription : Subscription = new Subscription();
  private _groupSubscription : Subscription = new Subscription();

  groups : group[] = []
  isGroupVisible = false;

  constructor(private _groupService : GroupService,
    private _authService : AuthService) {}

  GroupVisibilityClick(): void{
    this.isGroupVisible = !this.isGroupVisible;
  }
  
  ngOnInit(): void {
    this._authSubscription = this._authService.$userConnected.subscribe({
      next : (authResponse) => {
        if(authResponse != undefined){
          this._groupSubscription = this._groupService.GetGroups(Number(authResponse.id)).subscribe({
            next : (value) => {
              this.groups = value;
            }
          })
        }
      }
    })
  }
  ngOnDestroy():void{
    this._authSubscription.unsubscribe();
    this._groupSubscription.unsubscribe();
    this.groups = [];
  }

}
