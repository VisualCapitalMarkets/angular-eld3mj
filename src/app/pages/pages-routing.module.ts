import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FocusComponent } from './focus/focus.component';
import { EditorialComponent } from './editorial/editorial.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { TextMediaLeftComponent } from './text-media-left/text-media-left.component';
import { TextMediaRightComponent } from './text-media-right/text-media-right.component';
import { TopicComponent } from './topic/topic.component';
import { InterviewComponent } from './interview/interview.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'focus',
    component: FocusComponent
  },
  {
    path: 'editorial',
    component: EditorialComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'text-media-left',
    component: TextMediaLeftComponent
  },
  {
    path: 'text-media-right',
    component: TextMediaRightComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  },
  {
    path: 'interview',
    component: InterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
