import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit{

  errorMessage : string | undefined;

  registerForm : FormGroup;

  private _sub : Subscription = new Subscription();

  /**
   *
   */
  constructor(private _authService : AuthService,
    private _fb : FormBuilder,
    private _router : Router) {
      this.registerForm = _fb.group({
        login : [null,[Validators.required],[]],
        password : [null,[Validators.required],[]],
        passwordConfirmation : [null,[Validators.required],[]]
      })
     }


  register() : void {
    if(this.registerForm.valid){
      this._authService.register(this.registerForm.value).subscribe({
        next:(value)=>{
          if(value != undefined){
            this._router.navigateByUrl("");
          }
        },
      });
    }
  }

  ngOnInit(): void {
    this._sub = this._authService.$errorMessage.subscribe({
      next:(value)=> {this.errorMessage = value;}
    })
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
