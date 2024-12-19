import { Injectable } from '@angular/core';
import { Iusers } from '../models/users';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr:Array<Iusers>=[
    {
      userName:"Jhon Doe",
      userId:"123",
      userRole:"Candidate"
    },
    {
      userName:"June Doe",
      userId:"124",
      userRole:"Admin"
    },
    {
      userName:"July Doe",
      userId:"125",
      userRole:"Candidate"
    }
  ]
  
  constructor(
    private _router:Router,
    private _snackbarService:SnackbarService
  ) { }

  fetchAllUsers():Array<Iusers>{
    //Api call to fetch all data
    return this.usersArr
  }
  fetchUser(id:string):Iusers{
    //api call
    return this.usersArr.find(user=>user.userId === id)!
  }

  postUser(user:Iusers){
    //Api call
    this.usersArr.push(user)
    //navigate to dashboard
    this._router.navigate(['users'])
    this._snackbarService.opensnackbar(`New User  ${user.userName} Added successfully`)
  }
  updateduserObj (updatedUser:Iusers){
    //api call
    let getIndex = this.usersArr.findIndex(user=>user.userId===updatedUser.userId)
    this.usersArr[getIndex]=updatedUser
    this._router.navigate(['/users',updatedUser.userId],{
      queryParams:{userRole:updatedUser.userRole}
    })
  }

  removeUser(id:string){
    //api call 
    let getIndex = this.usersArr.findIndex(user=>user.userId === id)
    this.usersArr.splice(getIndex,1)
    this._router.navigate(['users'])
    this._snackbarService.opensnackbar(`The user is removed succussfully`)
  }
}
