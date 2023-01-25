import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/components/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res)=>{
      this.users=res
      
    })
  }

  removeUser(id:number){
    this.userService.deletUser(id).subscribe((res)=>{
      this.users=this.users.filter((e:any) => e.id != id);
    });
  }

}
