import {Component, Input, input, output} from '@angular/core';
import {ProductInterface} from '../product/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  title= "ProductCard";
  // @Input() product: ProductInterface={} as ProductInterface;
  product= input<ProductInterface>();
  // constructor() {
  //   console.log(this.product?.name);
  // }

}
