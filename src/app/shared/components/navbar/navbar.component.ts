import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Account } from '../../models/account';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  private _userConnected : Account | undefined;
  private _subscription :Subscription = new Subscription();

  constructor(private _authService : AuthService){}

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
      next : (value)=>{
        this._userConnected = value;
      }
    })
  }
  ngOnDestroy() :void{
    this._authService.logout();
    this._subscription.unsubscribe();
  }

}
