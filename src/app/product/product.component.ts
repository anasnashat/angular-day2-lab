import {Component, output} from '@angular/core';
import { ProductInterface} from './product.interface';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'app-product',
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  title= "Product";
  products:ProductInterface[]=[
    {name:'Product1', imageUrl:'images/img.png', price:100, stock:200},
    {name:'Product2', imageUrl:'images/img.png', price:200, stock:0},
    {name:'Product3', imageUrl:'images/img.png', price:300, stock:30},
    {name:'Product4', imageUrl:'images/img.png', price:400, stock:50},
  ];

}
