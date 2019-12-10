import { Component, OnInit, ElementRef } from "@angular/core";
import { ProductServices } from "../shared/services/product.services";
import { IproductInfo } from "../shared/model/productInfo";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product.list",
  templateUrl: "./product.list.component.html",
  styleUrls: ["./product.list.component.css"]
})
export class ProductListComponent implements OnInit {
  public prodData: IproductInfo[];

  public list: boolean = true;
  // public pageIndex: number = 1;
  // public pageSize: number;

  // arrayOne(n: number): any[] {
  //   return Array(n);
  // }

  constructor(
    private el: ElementRef,
    private productServices: ProductServices,
    private AR: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productServices.ProductList().subscribe(data => {
      this.prodData = data;
      console.log(data);
    });
    // let d = localStorage.getItem("product");
    // console.log("sdfdfdfdsfd", d);
    this.AR.params.subscribe(item => {
      let id = item["id"];
      console.log(id);
      this.productServices.CategoryProductList(id).subscribe((item: any) => {
        console.log(item.dataSize);
      });
    });
  }
}
