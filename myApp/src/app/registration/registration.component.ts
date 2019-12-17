import { Component, OnInit } from "@angular/core";
import { Validator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IuserRegister } from "../shared/model/userRegister";
import { RegistrationRegx } from "../shared/regex/registrationRegx";
import { UserAccountService } from "../shared/services/user.account.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  public Register: FormGroup;
  public submitted: boolean = false;
  public termscheck: boolean = false;
  public subscribecheck: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserAccountService,
    private router: Router
  ) {}
  Subscribe(item) {
    console.log(item);
    this.subscribecheck = item.target.checked;
  }
  Termscheck(item) {
    console.log(item);
    this.termscheck = item.target.checked;
  }
  ngOnInit() {
    this.Register = this.fb.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
          RegistrationRegx.FirstName
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
          RegistrationRegx.LastName
        ]
      ],
      address: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500)
        ]
      ],
      mobile: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      newsLetterCheck: [this.termscheck],
      termsAcceptCheck: [this.subscribecheck],
      UserLogin: this.fb.group({
        userEmail: ["", [Validators.required, RegistrationRegx.userEmail]],
        userPassword: ["", [Validators.required, RegistrationRegx.userPassword]]
      })
    });
  }

  Save(data: IuserRegister) {
    this.submitted = true;
    if (!this.Register.valid) {
      return;
    }
    console.log(data);
    this.userService.userRegister(data).subscribe(
      item => {
        console.log(item);
        alert("Registration successfull !!!");
        this.router.navigateByUrl("/login");
      },
      error => {
        alert(error.error.message);
        console.log(error.error.message);
      }
    );
  }
}
