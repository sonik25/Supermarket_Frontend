import {Injectable} from '@angular/core';
import {IproductInfo} from '../model/productInfo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as opt from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class ProductServices{
    public productList:string ='http://localhost:4700/api/supermarket/allProduct';
    constructor(private http:HttpClient){}

    ProductList():Observable<IproductInfo[]>{
        return this.http.get<IproductInfo[]>(this.productList);
    }

}