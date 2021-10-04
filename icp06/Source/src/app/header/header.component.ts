import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //  styleUrls: ['./header.component.css']
  styles: [
    '.background {background: #889fe3; color: black;font-size:20px}',
    'li a { color: #e5e2e2;font-size:17px}',
    'ul.nav a:hover { color: #e50d0d ;font-size:17px }'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
