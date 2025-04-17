import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './product/product.component';

export const routes: Routes = [
  {path:"home", component: ProductComponent},
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"products", component: ProductsComponent},

  {path:"**", redirectTo:"home", pathMatch:"full"},
];
