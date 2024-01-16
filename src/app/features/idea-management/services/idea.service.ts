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

  GetAssembliesForThisGroup(groupId: number) : Observable<Assembly[]> {
    let url = this._urlBase + "/api/Assembly/Group/" + groupId;
    return this._httpClient.get<Assembly[]>(url);
  }
  GetOneAssembly(idAssembly: number) : Observable<Assembly>{
    let url = this._urlBase + "/api/Assembly/" + idAssembly;
    return this._httpClient.get<Assembly>(url);
  }
  
  searchAssemblies(groupId :number,searchValue: string) : Observable<Assembly[]>{
    searchValue = searchValue.replaceAll(" ","");
    
    let url = this._urlBase + `/api/Assembly/Group/${groupId}?withThis=${searchValue}`;
    return this._httpClient.get<Assembly[]>(url);
  }
  
  createAssembly(title: string, groupId : number = 1) : Observable<Assembly> {
    let url = this._urlBase + `/api/Assembly/${groupId}`;
    let assembly : Assembly = {
      title: title,
      id: 0,
      concepts: []
    }
    return this._httpClient.post<Assembly>(url,assembly)
  }
}
