import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { ProductListComponent } from "./product.list/product.list.component";
import { AuthGuard } from "./authguard/auth";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";

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
    path: "allproducts/:page",
    component: ProductListComponent
  },
  {
    path: "category/:id/:page",
    component: ProductListComponent
  },
  {
    path: "category/:id/subcategory/:id/:page",
    component: ProductListComponent
  },
  {
    path: "productdetails/:id",
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
