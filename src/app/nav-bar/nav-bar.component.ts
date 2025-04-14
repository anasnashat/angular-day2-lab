import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  title = "First App";
  links:{name:string}[]=[
    {name:'Home'},
    {name:'About'},
    {name:'Contact'},
  ];
  imageUrl:string = 'images/img.png';


}
