import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { group } from '../../../shared/models/group';
import { Observable } from 'rxjs';
import { ThinkerInGroup } from '../../../shared/models/account';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient,
    @Inject('urlAPI') private _urlBase : string) { 
    this._httpClient = httpClient;
  }

  GetGroups(thinkerId : number):Observable<group[]>{
    let url = this._urlBase + "/api/Thinker/Group/" + thinkerId;
    return this._httpClient.get<group[]>(url);
  }
  GetOne(groupId  : number):Observable<group>{
    let url = this._urlBase + "/api/Group/" + groupId ;
    return this._httpClient.get<group>(url);
  }
  GetThinkersForThisOne(groupId : number):Observable<ThinkerInGroup[]>{
    let url = this._urlBase + "/api/Group/Thinker/" + groupId ;
    return this._httpClient.get<ThinkerInGroup[]>(url);
  }
}
