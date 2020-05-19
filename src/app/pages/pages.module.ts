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
import { InterviewComponent } from './interview/interview.component';
import { SlidingTopComponent } from './sliding-top/sliding-top.component';
import { SlidingRightComponent } from './sliding-right/sliding-right.component';
import { KiosqueComponent } from './kiosque/kiosque.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ChiffresComponent } from './chiffres/chiffres.component';


@NgModule({
  declarations: [HomeComponent, FocusComponent, EditorialComponent, NewsComponent, ArticleComponent, TextMediaLeftComponent, TextMediaRightComponent, TopicComponent, InterviewComponent, SlidingTopComponent, SlidingRightComponent, KiosqueComponent, SplashScreenComponent, ChiffresComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
