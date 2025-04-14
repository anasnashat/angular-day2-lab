import { Component } from '@angular/core';
import {product} from './product.interface';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  title= "Product";
  products:product[]=[
    {name:'Product1', imageUrl:'images/img.png', price:100, stock:200},
    {name:'Product2', imageUrl:'images/img.png', price:200, stock:0},
    {name:'Product3', imageUrl:'images/img.png', price:300, stock:30},
    {name:'Product4', imageUrl:'images/img.png', price:400, stock:50},
  ];

}
