import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleImgBottomRightSingleHeaderComponent } from './articles/article-img-bottom-right-single-header/article-img-bottom-right-single-header.component';
import { ArticleImgBottomRightComponent } from './articles/article-img-bottom-right/article-img-bottom-right.component';
import { ArticleImgTopLeftSingleHeaderComponent } from './articles/article-img-top-left-single-header/article-img-top-left-single-header.component';
import { ArticleImgTopLeftComponent } from './articles/article-img-top-left/article-img-top-left.component';
import { ArticleImgTopMiddleComponent } from './articles/article-img-top-middle/article-img-top-middle.component';

const routes: Routes = [
  { path: '', redirectTo: '/book/1', pathMatch: 'full' },
  { path: '1', component: ArticleImgTopLeftComponent },
  { path: '2', component: ArticleImgTopLeftSingleHeaderComponent },
  { path: '3', component: ArticleImgTopMiddleComponent},
  { path: '4', component: ArticleImgBottomRightComponent },
  { path: '5', component: ArticleImgBottomRightSingleHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }