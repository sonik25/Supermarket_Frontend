import { Component, OnInit } from '@angular/core';
import {Validator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IuserRegister} from '../shared/model/userRegister';
import {RegistrationRegx} from '../shared/regex/registrationRegx';
import {Router} from '@angular/router';

import { from } from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public Register:FormGroup;
  public submitted:boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {  
    this.Register = this.fb.group({
      'FirstName':['',[Validators.required,Validators.minLength(3),Validators.maxLength(250),RegistrationRegx.FirstName]],
      'LastName':['',[Validators.required,Validators.minLength(3),Validators.maxLength(250),RegistrationRegx.LastName]],
      'newsLetterCheck':[],
      'termsAcceptCheck':[],
      'UserLogin':this.fb.group({
        'userEmail':['',[Validators.required,RegistrationRegx.userEmail]],
        'userPassword':['',[Validators.required,RegistrationRegx.userPassword]]
      })

    })
  };

  Save(data:IuserRegister){
    this.submitted = true;
    if(this.Register.valid){return;0}
    console.log(data);
    
 }

}
