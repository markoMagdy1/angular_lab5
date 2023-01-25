import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { Routes,Router, RouterModule,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/components/services/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  userId:number;
  constructor(
    public router:Router,
    private userervicer:UserService,
    public activeRoute:ActivatedRoute
    ){
     this.userId= this.activeRoute.snapshot.params["id"];
    }

  
    loginForm = new FormGroup({

      name:new FormControl("",[Validators.required ,Validators.minLength(3)]),
      email:new FormControl("",[Validators.required ,Validators.email]),
      password:new FormControl("",[Validators.required ,Validators.minLength(8)]),
    
    });
    get getName(){
      return this.loginForm.controls["name"];
    }
    get getEmail(){
      return this.loginForm.controls["email"];
    }
    get getPassword(){
      return this.loginForm.controls["password"];
    }

  
    
    login():void{
      console.log(this.getName);
      console.log(this.getEmail);
      console.log(this.getPassword);
      console.log(this.loginForm.value);
      
      if(this.loginForm.status=="VALID"){
        this.userervicer.addUser(this.loginForm.value).subscribe((res)=>{
          console.log(res);
          
        });
        this.router.navigate(["users"]);

      }
      
    }

    editUser(){
      this.userervicer.editUser(this.userId,this.loginForm.value).subscribe((res)=>{})
      this.router.navigate(["users"]);
    }

}
