import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userId!:string;
userInfo!:Iusers
  constructor(
    private _routes:ActivatedRoute,
    private _usersService:UsersService,
    private _router:Router
  ) { }

  ngOnInit(): void {

    this._routes.params
        .subscribe((params:Params)=>{
          console.log(params)
          this.userId =params['userId']
          this.userInfo =this._usersService.fetchUser(this.userId)
        })


    //we will get userId
    // console.log(this._routes)
    // console.log(this._routes.snapshot.params['userId'])
    // this.userId =this._routes.snapshot.params['userId']
    // this.userInfo=this._usersService.fetchUser(this.userId)
  }

  onRemoveUser(){
    this._usersService.removeUser(this.userId)
  }
  gotoEditUser(){
    this._router.navigate(['edit'],{
      relativeTo:this._routes,
      queryParamsHandling:'preserve'
    })
  }
}
