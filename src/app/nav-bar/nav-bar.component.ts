import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  title = "First App";
  links:{name:string, url:string}[]=[
    {name:'Home', url:'home'},
    {name:'About', url:'about'},
    {name:'Contact', url:'contact'},
    {name:'Products', url:'products'},
  ];
  imageUrl:string = 'images/img.png';


}
