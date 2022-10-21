import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Greeting',
      icon: 'uil-comment-dots'
    },
    {
      name: 'Calculator',
      icon: 'uil-calculator-alt'
    },
    {
      name: 'Bank transactions',
      icon: 'uil-invoice'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
