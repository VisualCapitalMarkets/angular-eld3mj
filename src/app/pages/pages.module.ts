import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FocusComponent } from './focus/focus.component';
import { EditorialComponent } from './editorial/editorial.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { TextMediaLeftComponent } from './text-media-left/text-media-left.component';
import { TextMediaRightComponent } from './text-media-right/text-media-right.component';
import { TopicComponent } from './topic/topic.component';


@NgModule({
  declarations: [HomeComponent, FocusComponent, EditorialComponent, NewsComponent, ArticleComponent, TextMediaLeftComponent, TextMediaRightComponent, TopicComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
