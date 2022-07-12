import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

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
