import { Component, OnInit } from "@angular/core";
import { ProductServices } from "../shared/services/product.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  public categoryData;

  constructor(
    private productServices: ProductServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.productServices.CategoryList().subscribe(data => {
      this.categoryData = data;
      console.log(data);
    });
  }
}
