import {Injectable} from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import {UserAccountService} from '../shared/services/user.account.services';

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
    constructor(private userService:UserAccountService, private router:Router){}
    canActivate(){
        let token = localStorage.getItem('currentUser');
        if(!token){
            alert('Please login first!!');
            this.router.navigateByUrl('/myaccount')
            return false;
        }
        else{
            return true;
        }
    }
}
