import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss']
})
export class ChartsPageComponent implements OnInit, OnDestroy {

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
