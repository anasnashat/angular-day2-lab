import { Component } from '@angular/core';
import {CategoryInterface} from './category.interface';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  categories: CategoryInterface[] = [
    {
      name: 'cat1',
      image: "images/img.png",
      numberOfProducts: 100,
    },
    {
      name: 'cat2',
      image: "images/img.png",
      numberOfProducts: 200,
    }
  ]
}
