import { Component, OnInit } from "@angular/core";
import { IcartInfo } from "../shared/model/cartInfo";
import { CartService } from "../shared/services/cart.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  public productInfo: any;
  public quantity: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.productInfo = localStorage.getItem("productData");
    console.log(JSON.parse(this.productInfo));
  }
}
