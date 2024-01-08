import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { group } from 'src/app/shared/models/group';
import { GroupService } from 'src/app/features/group-management/services/group.service';

@Component({
  selector: 'app-group-parent',
  templateUrl: './group-parent.component.html',
  styleUrls: ['./group-parent.component.scss']
})
export class GroupParentComponent implements OnInit{
  private _routeSubscription : Subscription = new Subscription();
  private _idRoute : number = -1;
  group : group | undefined;

  constructor(private _activateRoute : ActivatedRoute,
    private _groupService : GroupService) {
  }

  ngOnInit(): void {
    this._routeSubscription = this._activateRoute.paramMap.subscribe({
      next : (value) =>{
        this._idRoute = Number(value.get("id") ?? -1);
        this.sendId();

        if(this._idRoute != -1)
        {

        }
          this._groupService.GetOne(this._idRoute).subscribe({
            next : (value) => {
              this.group = value;
            }
          })
      }
    })
  }
  ngOnDestroy():void{
    this._routeSubscription.unsubscribe();
  }
  sendId() {
    return this._idRoute;
  }
}
