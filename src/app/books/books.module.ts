import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleImgTopLeftComponent } from './articles/article-img-top-left/article-img-top-left.component';
import { ArticleImgTopLeftSingleHeaderComponent } from './articles/article-img-top-left-single-header/article-img-top-left-single-header.component';
import { ArticleImgTopMiddleComponent } from './articles/article-img-top-middle/article-img-top-middle.component';
import { ArticleImgBottomRightComponent } from './articles/article-img-bottom-right/article-img-bottom-right.component';
import { ArticleImgBottomRightSingleHeaderComponent } from './articles/article-img-bottom-right-single-header/article-img-bottom-right-single-header.component';



@NgModule({
  declarations: [
    ArticleImgTopLeftComponent,
    ArticleImgTopLeftSingleHeaderComponent,
    ArticleImgTopMiddleComponent,
    ArticleImgBottomRightComponent,
    ArticleImgBottomRightSingleHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleImgTopLeftComponent,
    ArticleImgTopLeftSingleHeaderComponent,
    ArticleImgTopMiddleComponent,
    ArticleImgBottomRightComponent,
    ArticleImgBottomRightSingleHeaderComponent
  ]
})
export class BooksModule { }
