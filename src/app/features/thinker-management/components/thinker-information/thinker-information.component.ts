import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shared/models/account';
import { ThinkerService } from '../../services/thinker.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-thinker-information',
  templateUrl: './thinker-information.component.html',
  styleUrls: ['./thinker-information.component.scss']
})
export class ThinkerInformationComponent implements OnInit{
  private _subscription : Subscription = new Subscription();
  thinker : Account | undefined = undefined;

  constructor(private _ThinkerService : ThinkerService,
    private _AuthService : AuthService) {}

  ngOnInit(): void {
    this._subscription = this._ThinkerService.GetThinkerById(Number(this._AuthService.getId())).subscribe({
      next : (value) => {
        if(value != undefined)
        {
          this.thinker = value;
        }
      }
    })
  }
  ngOnDestroy() : void {
    this._subscription.unsubscribe();
  }
}
