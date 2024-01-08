import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Account } from '../../models/account';
import { group } from '../../models/group';
import { GroupService } from '../../../features/group-management/services/group.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  private _userConnected : Account | undefined;
  private _subscription :Subscription = new Subscription();
  private _groupSubscription : Subscription = new Subscription();

  groups : group[] = [];

  constructor(private _authService : AuthService,
    private _groupService : GroupService){}

  getName() : string|undefined {
    return this._userConnected?.login;
  }
  isConnected() : boolean {
    return this._userConnected != undefined;
  }
  logout():void{
    this._authService.logout();
  }

  ngOnInit(): void {
    this._subscription = this._authService.$userConnected.subscribe({
      next : (authResponse)=>{
        this._userConnected = authResponse;
        
        if(authResponse != undefined){
          
          this._groupSubscription = this._groupService.GetGroups(authResponse.id).subscribe({
            next : (value) => {
              this.groups = value;
            }
          })
        }
      }
    });
  }
  ngOnDestroy() :void{
    this._authService.logout();
    this._subscription.unsubscribe();
    this._groupSubscription.unsubscribe();
  }

}
