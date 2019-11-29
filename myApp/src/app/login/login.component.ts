import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IuserLogin} from '../shared/model/userLogin';
import {RegistrationRegx} from '../shared/regex/registrationRegx';
import {UserAccountService} from '../shared/services/user.account.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Login:FormGroup;
  public submitted:boolean = false;
  public ValidateError:string;
  public UserId;


  constructor(private fb:FormBuilder,private userService:UserAccountService,private router:Router) { }

  ngOnInit() {
    this.Login = this.fb.group({
      UserLogin:this.fb.group({
        userEmail:['',[Validators.required,RegistrationRegx.userEmail]],
        userPassword:['',[Validators.required]]
      })
    })
  };

  Save(data:IuserLogin){
    this.submitted=true;
    if(!this.Login.valid){return}
    //console.log(data);
    this.userService.userLogin(data)
         .subscribe(item=>{
           if(item.t){
             this.UserId = item.t;
             alert(item.message);
              console.log(item);
              this.router.navigateByUrl('/home');
           }
           

           
      }, err => {
        this.ValidateError = err.error.message;
      })
  }

}
