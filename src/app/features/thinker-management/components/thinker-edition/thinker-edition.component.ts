import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThinkerService } from '../../services/thinker.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Account } from 'src/app/shared/models/account';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thinker-edition',
  templateUrl: './thinker-edition.component.html',
  styleUrls: ['./thinker-edition.component.scss']
})
export class ThinkerEditionComponent implements OnInit{
  private _subscription : Subscription = new Subscription();

  thinker : Account|undefined = undefined;
  profilForm : FormGroup

  constructor(private _ThinkerService : ThinkerService,
    private _AuthService : AuthService,
    private _fb : FormBuilder,
    private _router : Router) {
    this.profilForm = _fb.group({
      pseudo : [this.thinker?.pseudo,[Validators.required],[]],
      email : [this.thinker?.email,[Validators.email],[]]
    })
    
  }

  edit():void {
    if(this.thinker?.id != null && this.profilForm.valid){
      this._ThinkerService.UpdateUser(this.thinker?.id,this.profilForm.value).subscribe({
        next:(value)=>{
          this._AuthService.reconnection().subscribe({
            next : () => this._router.navigateByUrl("/profil")
          });
        },
      });
    }
  }
  
  ngOnInit(): void {
    this._subscription = this._AuthService.$userConnected.subscribe({
      next : value => {
        this.thinker = value;
        this.profilForm = this._fb.group({
          pseudo : [this.thinker?.pseudo,[Validators.required],[]],
          email : [this.thinker?.email,[Validators.email],[]]
        })
      }
    })
  }
  ngOnDestroy() : void {
    this._subscription.unsubscribe();
  }
}
