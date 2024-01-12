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
}
