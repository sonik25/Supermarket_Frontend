import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { ProductListComponent } from "./product.list/product.list.component";
import { AuthGuard } from "./authguard/auth";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { CartComponent } from "./cart/cart.component";
import { ForgotpwdmailerComponent } from "./forgotpwdmailer/forgotpwdmailer.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "myaccount",
    component: MyaccountComponent
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "forgotpassword/:id",
    component: ForgotpasswordComponent
  },
  {
    path: "forgotpasswordmailer",
    component: ForgotpwdmailerComponent
  },
  {
    path: "allproducts",
    component: ProductListComponent
  },
  {
    path: "category/:id",
    component: ProductListComponent
  },
  {
    path: "category/:catid/subcategory/:subid",
    component: ProductListComponent
  },
  {
    path: "productdetails/:id",
    component: ProductdetailsComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
