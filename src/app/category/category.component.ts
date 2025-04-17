import { Component } from '@angular/core';
import {CategoryInterface} from './category.interface';
import {ProductInterface} from '../product/product.interface';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  title = "Categories";
  categories!: ProductInterface[];

  constructor(Categories: ProductsService) {
    this.categories = Categories.categories;
    console.log(this.categories);
  }

}
