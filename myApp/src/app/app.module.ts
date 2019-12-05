import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { HttpClientModule } from '@angular/common/http';

import { MyaccountComponent } from './myaccount/myaccount.component';
import { LoginComponent } from './login/login.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListComponent } from './product.list/product.list.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    TopheaderComponent,
    MyaccountComponent,
    LoginComponent,
    HeaderComponent,
    NavigationComponent,
    ProductListComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
