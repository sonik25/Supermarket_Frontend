import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserAccountService } from "../shared/services/user.account.services";
import { RegistrationRegx } from "../shared/regex/registrationRegx";
import { Router } from "@angular/router";
import { IuserLogin } from "../shared/model/userLogin";

@Component({
  selector: "app-forgotpwdmailer",
  templateUrl: "./forgotpwdmailer.component.html",
  styleUrls: ["./forgotpwdmailer.component.css"]
})
export class ForgotpwdmailerComponent implements OnInit {
  public ForgotPasswordMail: FormGroup;
  public submitted: boolean = false;
  public ValidateError: string;

  constructor(
    private fb: FormBuilder,
    private userSrevice: UserAccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ForgotPasswordMail = this.fb.group({
      UserLogin: this.fb.group({
        userEmail: ["", [Validators.required, RegistrationRegx.userEmail]]
      })
    });
  }

  Check(data: any) {
    this.submitted = true;
    console.log(data);
    if (!this.ForgotPasswordMail.valid) {
      return;
    }
    this.userSrevice.userForgotMail(data).subscribe(item => {
      console.log(item);
    });
  }
}
