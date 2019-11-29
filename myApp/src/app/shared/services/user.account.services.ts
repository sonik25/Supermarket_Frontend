import {Injectable} from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {IuserRegister} from '../model/userRegister';
import {IuserLogin} from '../model/userLogin';
import {Observable, BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn:'root'})

export class UserAccountService{
    public loggedIn:BehaviorSubject<IuserLogin>;
    public currentUser:Observable<IuserLogin>;
    private RegisterEndPoint:string='http://localhost:4700/api/supermarket/userRegister';
    private LoginEndpoint:string='http://localhost:4700/api/supermarket/login';
    public header:HttpHeaders;

    constructor(private http:HttpClient){
        this.header = new HttpHeaders({'content-type':'application/json'})
    }

    userRegister(data:IuserRegister):Observable<IuserRegister>{
        //alert(JSON.stringify(data));
        return this.http.post<IuserRegister>(this.RegisterEndPoint, JSON.stringify(data), {headers:this.header})
    }

    userLogin(data:IuserLogin):Observable<IuserLogin>{
        return this.http.post<IuserLogin>(this.LoginEndpoint,JSON.stringify(data),{headers:this.header}
        )
        .pipe(map(item=>{
            if(item && item.t){
                localStorage.setItem('currentUser', JSON.stringify(item))
                return item;
            }
            return item
        }))
    }

}