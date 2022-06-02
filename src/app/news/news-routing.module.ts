import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendNewsComponent } from './friend-news/friend-news.component';
import { MyNewsComponent } from './my-news/my-news.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'my-news', component: MyNewsComponent },
  { path: 'friends-news', component: FriendNewsComponent },
  { path: '**', redirectTo: 'news' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
