import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { FooterModule } from './shared/footer/footer.module';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { FocusComponent } from './pages/focus/focus.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { NewsComponent } from './pages/news/news.component';
import { ArticleComponent } from './pages/article/article.component';
import { TextMediaLeftComponent } from './pages/text-media-left/text-media-left.component';
import { TextMediaRightComponent } from './pages/text-media-right/text-media-right.component';
import { TopicComponent } from './pages/topic/topic.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { SlidingTopComponent } from './pages/sliding-top/sliding-top.component';
import { SlidingRightComponent } from './pages/sliding-right/sliding-right.component';
import { ChiffresComponent } from './pages/chiffres/chiffres.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { AdvertisingComponent } from './pages/advertising/advertising.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { KiosqueComponent } from './pages/kiosque/kiosque.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    KiosqueComponent,
    HomeComponent,
    FocusComponent,
    EditorialComponent,
    NewsComponent,
    ArticleComponent,
    TextMediaLeftComponent,
    TextMediaRightComponent,
    TopicComponent,
    InterviewComponent,
    SlidingTopComponent,
    SlidingRightComponent,
    ChiffresComponent,
    PortfolioComponent,
    ImpressumComponent,
    AdvertisingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    FooterModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
