import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/', 'home']
      },
      {
        name: 'Greeting',
        icon: 'uil-comment-dots',
        router: ['/', 'greeting']
      },
      {
        name: 'Calculator',
        icon: 'uil-calculator-alt',
        router: ['/', 'calculator']
      },
      {
        name: 'Bank transactions',
        icon: 'uil-invoice',
        router: ['/', 'transactions']
      }
    ]
  }

}
