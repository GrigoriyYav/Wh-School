import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
