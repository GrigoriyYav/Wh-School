import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { ArticleImgTopLeftComponent } from './articles/article-img-top-left/article-img-top-left.component';
import { ArticleImgTopLeftSingleHeaderComponent } from './articles/article-img-top-left-single-header/article-img-top-left-single-header.component';
import { ArticleImgTopMiddleComponent } from './articles/article-img-top-middle/article-img-top-middle.component';
import { ArticleImgBottomRightComponent } from './articles/article-img-bottom-right/article-img-bottom-right.component';
import { ArticleImgBottomRightSingleHeaderComponent } from './articles/article-img-bottom-right-single-header/article-img-bottom-right-single-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    ArticleImgTopLeftComponent,
    ArticleImgTopLeftSingleHeaderComponent,
    ArticleImgTopMiddleComponent,
    ArticleImgBottomRightComponent,
    ArticleImgBottomRightSingleHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
