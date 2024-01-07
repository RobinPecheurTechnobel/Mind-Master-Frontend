import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from './shared/models/account';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Mind-Master-Frontend';

  private _userConnected : Account | undefined;
  private _subscription : Subscription = new Subscription();

  constructor(private _authService : AuthService){}

  isConnected() : boolean {
    return this._userConnected != undefined;
  }
  ngOnInit(): void {
    this._subscription = this._authService.$userConnected.subscribe({
      next : (value)=>{
        this._userConnected = value;
      }
    });
  }
  ngOnDestroy() :void{
    this._authService.logout();
    this._subscription.unsubscribe();
  }
}
