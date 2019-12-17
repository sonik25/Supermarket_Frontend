import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserAccountService } from "../shared/services/user.account.services";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.css"]
})
export class ForgotpasswordComponent implements OnInit {
  public ResetPassword: FormGroup;
  public submitted: boolean = false;
  public ValidateError: string;
  public token: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserAccountService,
    private router: Router,
    private AR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ResetPassword = this.fb.group({
      UserLogin: this.fb.group({
        userPassword: ["", [Validators.required]]
      })
    });
  }

  Save(data: any) {
    console.log(data);
    this.AR.params.subscribe(item => {
      let id = item["id"];
      console.log(id);
      this.userService.userForgot(data, id).subscribe(data => {
        console.log(data);
      });
    });
  }
}
