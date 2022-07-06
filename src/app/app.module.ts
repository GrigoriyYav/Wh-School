import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PaginationComponent } from './core/pagination/pagination.component';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
