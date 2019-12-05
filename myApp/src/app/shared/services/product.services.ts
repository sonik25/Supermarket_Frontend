import { Injectable } from "@angular/core";
import { IproductInfo } from "../model/productInfo";
import { IcategoryInfo } from "../model/categoryInfo";
import { IsubcategoryInfo } from "../model/subcategory";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import * as opt from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ProductServices {
  public productList: string =
    "http://localhost:4700/api/supermarket/allProduct/page/:pageIndex";
  public categoryList: string =
    "http://localhost:4700/api/supermarket/allCategory";
  public subcategoryList: string =
    "http://localhost:4700/api/supermarket/allSubCategory";
  public cateProdList: string =
    "http://localhost:4700/api/supermarket/category/:id/page/:pageIndex";
  public subCateProdList: string =
    "http://localhost:4700/api/supermarket/category/:id/subcategory/:subid/page/:pageIndex";

  constructor(private http: HttpClient) {}

  CategoryList(): Observable<IcategoryInfo[]> {
    return this.http.get<IcategoryInfo[]>(this.categoryList);
  }

  SubCategoryList(): Observable<IsubcategoryInfo[]> {
    return this.http.get<IsubcategoryInfo[]>(this.subcategoryList);
  }

  ProductList(): Observable<IproductInfo[]> {
    return this.http.get<IproductInfo[]>(this.productList);
  }

  CategoryProductList(): Observable<IproductInfo[]> {
    return this.http.get<IproductInfo[]>(this.cateProdList);
  }
  SubCategoryProductList(): Observable<IproductInfo[]> {
    return this.http.get<IproductInfo[]>(this.subCateProdList);
  }

  ProductDetails(id: number): Observable<IproductInfo[]> {
    return this.http.get<IproductInfo[]>(this.productList).pipe(
      opt.map((data: any) => {
        return data.find((item: any) => item._id == id);
      })
    );
  }
}
