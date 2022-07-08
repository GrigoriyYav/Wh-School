import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  
  constructor() { }

  ngOnInit(): void {
    if(document.getElementsByClassName('paginationBar').length > 0){
      Array.from(document.getElementsByClassName('paginationBar') as HTMLCollectionOf<HTMLElement>)[0].style.display = 'none';
    }    
  }

  ngOnDestroy(): void {
    if(document.getElementsByClassName('paginationBar').length > 0){
      Array.from(document.getElementsByClassName('paginationBar') as HTMLCollectionOf<HTMLElement>)[0].style.display = 'flex';
    }
  }
}
