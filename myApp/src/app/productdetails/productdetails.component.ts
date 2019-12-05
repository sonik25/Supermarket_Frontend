import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductServices } from "../shared/services/product.services";

@Component({
  selector: "app-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.css"]
})
export class ProductdetailsComponent implements OnInit {
  public productId: any;
  public productDetails: any;

  constructor(
    private productService: ProductServices,
    private AR: ActivatedRoute
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
}
