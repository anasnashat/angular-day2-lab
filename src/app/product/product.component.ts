import {Component, output} from '@angular/core';
import { ProductInterface} from './product.interface';
import {ProductCardComponent} from '../product-card/product-card.component';
import {ProductsService} from '../products.service';

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
  products!:ProductInterface[]

  constructor(products : ProductsService) {
    this.products = products.products;
  }

}
