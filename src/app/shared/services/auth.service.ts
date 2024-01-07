import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AccountWithToken, Account } from '../models/account';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthForm, RegisterForm } from '../models/auth';

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

  getId():number|undefined{
    return this._userConnected?.id;
  }

  login(authForm : AuthForm ) : Observable<Account|undefined>{
    let url = this._urlBase+"/api/Auth/Login";
    this._httpClient.post<AccountWithToken>(url,authForm).subscribe({
      next : (value) => {
        this._$userConnected.next(value.account);
        this._userConnected = value.account;
        this._$errorMessage.next(undefined);
        localStorage.setItem("MindToken",value.token.replace("Bearer ",""));
      },
      error : (error) => {
        this._$errorMessage.next(error.error);
      }
    })

    return this.$userConnected;
  }

  register(registerForm : RegisterForm) : Observable<any>{
    let url = this._urlBase+"/api/Auth/Register";
    this._httpClient.post<AccountWithToken>(url,registerForm).subscribe({
      next : (value) => {
        localStorage.setItem("MindToken",value.token.replace("Bearer ",""));
        this.reconnection();
      },
      error : (error) => {
        let finalMessage = "error";
        // Erreur correspondant au Exception levé
        if(error.error) finalMessage = error.error;
        // Erreur lié aux contrainte des valeurs
        if(error.error.errors){
          let errorObject = error.error.errors;
          if(errorObject.Password) {
            finalMessage = "";
            errorObject.Password.forEach((value: any) => {
              finalMessage += String(value) + "\n";
            })
          }
          else if(errorObject.Login) finalMessage =errorObject.Login;
        }
        this._$errorMessage.next(finalMessage);
      }
    })

    return this.$userConnected;
  }

  reconnection() : Observable<Account|undefined>{
    let url = this._urlBase+"/api/Auth/Reconnection";
    this._httpClient.get<AccountWithToken>(url).subscribe({
      next : (value) => {
        this._$userConnected.next(value.account);
        this._userConnected = value.account;
        this._$errorMessage.next(undefined);
        localStorage.setItem("MindToken",value.token);
      },
      error : (error) => {
        this._$errorMessage.next(error.error);
        //localStorage.removeItem("MindToken");
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
