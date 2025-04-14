import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, ProductComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testApp';
}
