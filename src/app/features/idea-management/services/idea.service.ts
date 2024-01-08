import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assembly } from 'src/app/shared/models/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private _httpClient : HttpClient;

  constructor(httpClient : HttpClient,
    @Inject('urlAPI') private _urlBase : string) { 
    this._httpClient = httpClient;
  }

  GetAssembliesForThisGroup(idGroup: number) : Observable<Assembly[]> {
    let url = this._urlBase + "/api/Assembly/Group/" + idGroup;
    return this._httpClient.get<Assembly[]>(url);
  }
}
