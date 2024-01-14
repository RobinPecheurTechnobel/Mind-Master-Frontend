import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from 'src/app/shared/models/account';

@Injectable({
  providedIn: 'root'
})
export class ThinkerService {

  constructor(private _httpClient : HttpClient,
    @Inject('urlAPI') private _urlBase : string) { 
  }

  GetThinkerById(thinkerId : number) : Observable<Account>{
    let url = this._urlBase + `/api/Thinker/${thinkerId}`;
    return this._httpClient.get<Account>(url);
  }
  
  searchThinker(searchValue : string): Observable<Account[]>{
    let url = this._urlBase + `/api/Thinker/search/${searchValue}`;
    return this._httpClient.get<Account[]>(url);
  }
  
  UpdateUser(thinkerId: number, value: Account) :Observable <any>{
    console.log(value);
    let url = this._urlBase + `/api/Thinker/${thinkerId}`;
    let patches = [
      {op: "add", path: "/Pseudo", value: value.pseudo},
      {op: "add", path: "/Email", value: value.email}
    ];
    return this._httpClient.patch<any>(url,patches,{headers:{"Content-Type":"application/json-patch+json"}});
  }
}
