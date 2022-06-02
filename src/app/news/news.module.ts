import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { MyNewsComponent } from './my-news/my-news.component';
import { FriendNewsComponent } from './friend-news/friend-news.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewsComponent,
    MyNewsComponent,
    FriendNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule
  ]
})
export class NewsModule { }
