import { Component, OnInit, ElementRef } from '@angular/core';
import {ProductServices} from '../shared/services/product.services';
import {IproductInfo} from '../shared/model/productInfo';
import {fromEvent} from 'rxjs';


@Component({
  selector: 'app-product.list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.css']
})
export class ProductListComponent implements OnInit {
  public prodData:IproductInfo[];
  public list:boolean = true;


  constructor(private el:ElementRef, private productServices:ProductServices) { }

  ngOnInit() {
    this.productServices.ProductList()
    .subscribe(data =>{
      this.prodData = data;
      console.log(data);
    });
  }
  
}
