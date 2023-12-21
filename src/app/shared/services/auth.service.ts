import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AccountWithToken, Account } from '../models/account';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthForm } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient,
    @Inject('urlAPI') private _urlBase : string) { 
    this._httpClient = httpClient;
  }

  private _userConnected : Account | undefined;
  private _$userConnected : BehaviorSubject<Account|undefined> = new BehaviorSubject(this.getUser());
  $userConnected : Observable<Account|undefined> = this._$userConnected.asObservable();
  private getUser () : Account|undefined {
    return this._userConnected;
  }

  private _$errorMessage : BehaviorSubject<string|undefined> = new BehaviorSubject<string|undefined>(undefined);
  $errorMessage : Observable<string|undefined> = this._$errorMessage.asObservable();

  login(authForm : AuthForm ) : Observable<Account|undefined>{
    let url = this._urlBase+"/api/Auth/Login";
    this._httpClient.post<AccountWithToken>(url,authForm).subscribe({
      next : (value) => {
        this._$userConnected.next(value.account);
        this._userConnected = value.account;
        this._$errorMessage.next(undefined);
        localStorage.setItem("MindToken",value.token);
      },
      error : (error) => {
        this._$errorMessage.next(error.error);
      }
    })

    return this.$userConnected;
  }

  logout():void{
    this._userConnected = undefined;
    this._$userConnected.next(undefined);
    this._$errorMessage.next(undefined);
    localStorage.removeItem("MindToken");
  }
}
