import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userId!:string;
  userInfo!:Iusers;
  userForm!:FormGroup;
  isInEditMode:boolean =false;
  updateBtnFlag:boolean =false;
  constructor(
    private _routes:ActivatedRoute,
    private _usersService:UsersService,
    private _uuidService:UuidService
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName : new FormControl(null),
      userRole:new FormControl('Candidate')
    })

    //we will get userId
    console.log(this._routes)
    console.log(this._routes.snapshot.params['userId'])
    this.userId =this._routes.snapshot.params['userId']

    if(this.userId){
      this.isInEditMode =true;
      this.userInfo=this._usersService.fetchUser(this.userId)
      this.userForm.patchValue(this.userInfo)
    }
    this._routes.queryParams
      .subscribe((params:Params)=>{
        console.log(params)
        if(params['userRole'].toLowerCase().includes('candidate')){
          this.userForm.disable()
          this.updateBtnFlag =true
        }else{
          this.userForm.enable()
          this.updateBtnFlag =false
        }
      })

  }
  onUserAdd(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      let userObj:Iusers ={...this.userForm.value,
        userId:this._uuidService.generateUuid()
      }
      this.userForm.reset()
      console.log(userObj);
      this._usersService.postUser(userObj)
    }
  }
  onUserUpdate(){
    let updatedObj :Iusers ={...this.userForm.value,
      userId:this.userId
    }
    console.log(updatedObj)
    this.userForm.reset()
    this._usersService.updateduserObj(updatedObj)
  }
}
