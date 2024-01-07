import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { group } from '../models/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient,
    @Inject('urlAPI') private _urlBase : string) { 
    this._httpClient = httpClient;
  }

  GetGroups(id : number):Observable<group[]>
  {
    let url = this._urlBase + "/api/Thinker/Group/" + id;
    return this._httpClient.get<group[]>(url);
  }
}
