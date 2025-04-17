import {Component, input} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {ProductInterface} from '../product/product.interface';
import {ProductsService} from '../products.service';
import {ProductCardComponent} from '../product-card/product-card.component';
import {CategoryComponent} from '../category/category.component';
import {viewport} from '@popperjs/core';

@Component({
  selector: 'app-products',
  imports: [
    ProductComponent,
    ProductCardComponent,
    CategoryComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  title = "Products";
  products !: ProductInterface[];
  categories !: ProductInterface[];

  // product = input<ProductInterface>();

  constructor(products : ProductsService) {
    this.products = products.products;
    this.categories = products.categories;
    console.log(this.products);
  }


  protected readonly viewport = viewport;
}
