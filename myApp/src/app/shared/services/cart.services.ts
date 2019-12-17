import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IcartInfo } from "../model/cartInfo";
import { Observable } from "rxjs";
@Injectable({ providedIn: "root" })
export class CartService {
  public addtocartEndpoint: string =
    "http://localhost:4700/api/supermarket/addtocart";
  constructor(private http: HttpClient) {}

  addToCart(data: IcartInfo): Observable<IcartInfo> {
    return this.http.post<IcartInfo>(
      this.addtocartEndpoint,
      JSON.stringify(data)
    );
  }
}
