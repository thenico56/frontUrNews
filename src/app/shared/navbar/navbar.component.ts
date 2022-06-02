import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  menu: MenuItem[] = [
    { texto: 'News', ruta: './home/news' },
    { texto: 'My News', ruta: './home/my-news' },
    { texto: 'Friends News', ruta: './home/friends-news' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
