import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  errorMessage : string | undefined;

  loginForm : FormGroup;

  private _sub : Subscription = new Subscription();

  /**
   *
   */
  constructor(private _authService : AuthService,
    private _fb : FormBuilder,
    private _router : Router) {
      this.loginForm = _fb.group({
        login : [null,[Validators.required],[]],
        password : [null,[Validators.required],[]]
      })
     }


  login() : void {
    if(this.loginForm.valid){
      this._authService.login(this.loginForm.value).subscribe({
        next:(value)=>{
          if(value != undefined){
            this._router.navigateByUrl("/group/1");
          }
        },
      });
    }
  }

  ngOnInit(): void {
    this._sub = this._authService.$errorMessage.subscribe({
      next:(value)=> {
        if (value != undefined && typeof(value) != typeof(String)) this.errorMessage = "Une erreur de communication avec le serveur s'est produite. Veuillez réessayer plus tard ou contacter un admin."
        else this.errorMessage = value;
      }
    })
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
