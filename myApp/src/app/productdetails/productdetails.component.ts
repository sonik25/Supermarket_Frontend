import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductServices } from "../shared/services/product.services";

@Component({
  selector: "app-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.css"]
})
export class ProductdetailsComponent implements OnInit {
  public productId: any;
  public productDetails: any;
  public quantity: number = 1;

  public quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(
    private productService: ProductServices,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.AR.params.subscribe(data => {
      this.productId = data["id"];
      this.productService.ProductDetails(this.productId).subscribe(data => {
        this.productDetails = data;
        console.log(data);
      });
    });
  }

  ChangingValue(item: any) {
    this.quantity = item.target.value;
    console.log(this.quantity);
  }

  AddCartProduct(item: any) {
    let d = {
      i: item,
      q: this.quantity
    };
    localStorage.setItem("productData", JSON.stringify(d));
    this.router.navigateByUrl("/cart");
  }
}
