import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../../services/group.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.scss']
})
export class GroupCreationComponent {

  groupForm : FormGroup;

  constructor(private _fb : FormBuilder,
    private _GroupService : GroupService,
    private _AuthService : AuthService,
    private _router : Router) {
    this.groupForm = this._fb.group({
      "name" : [ null , [Validators.required] , [] ],
      "description" : [ null , [] , [] ]
    })
  }

  create():void{
    if(this.groupForm.valid)
      this._GroupService.create(this.groupForm.value).subscribe({
        next : (response) => {
          this._AuthService.reconnection().subscribe({
            next : () => {
              this._router.navigateByUrl(`/group/${response.id}`);
            }
          });
        }
      })
  }
}
