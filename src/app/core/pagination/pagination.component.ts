import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(route: string): void{
    this.router.navigate([route]);
  }
}
