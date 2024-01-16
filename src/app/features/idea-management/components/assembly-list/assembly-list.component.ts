import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Assembly } from 'src/app/shared/models/idea';
import { IdeaService } from '../../services/idea.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-assembly-list',
  templateUrl: './assembly-list.component.html',
  styleUrls: ['./assembly-list.component.scss'],
  inputs:["groupId"]
})
export class AssemblyListComponent implements OnInit ,OnChanges {
  groupId : number = -1;
  assemblies : Assembly[] = [];

  items$!: Observable<Assembly[]>;
  searchInformation : string = "";
  private _searchText$ : Subject<string> = new Subject<string>();
  /**
   *
   */
  constructor(private _IdeaService : IdeaService,
    private _authService : AuthService) {
  
  }
  ngOnInit(): void {
    this.items$ = this._searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        (searchValue) =>  this._IdeaService.searchAssemblies(this.groupId, searchValue)
      )
    );
    this.items$.subscribe({
      next : (response) => this.assemblies = response
    })
  }
  isConnected() : boolean{
    return this._authService.getId() != undefined
  }

  search():void{
    this._searchText$.next(this.searchInformation)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['groupId'] && changes['groupId'].currentValue != -1)
    {
      this._IdeaService.GetAssembliesForThisGroup(this.groupId).subscribe({
        next : (value) => {
          this.assemblies = value;
        }
      });
    }
  }
  
}
