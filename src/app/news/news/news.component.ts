import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: [
  ]
})
export class NewsComponent implements OnInit {

  //news: News[] = []

  constructor( private service: NewsService ) { }

  ngOnInit(): void {

    //hacer la llamada api getallnews
  }

}
