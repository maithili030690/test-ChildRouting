import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
users!:Array<Iusers>
selectedUserId!:string;
  constructor(
    private _usersService :UsersService,
    private _router :Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.users = this._usersService.fetchAllUsers()

    this.selectedUserId = this.users[0].userId
    this._router.navigate([this.users[0].userId],{
      relativeTo:this._route
    })
    
  }

  onUserSelect(user:Iusers){
    console.log(user)
    this.selectedUserId = user.userId
  }
}
