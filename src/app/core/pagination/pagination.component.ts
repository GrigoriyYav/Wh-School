import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes as routesBooks } from 'src/app/books/books-routing.module';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageList: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pageList = Array(routesBooks.length - 1).fill(0).map((el, i) => (i + 1).toString());
  }
}
