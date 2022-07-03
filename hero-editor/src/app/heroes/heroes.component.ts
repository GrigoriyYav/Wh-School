import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: IHero;

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: IHero): void {
    this.selectedHero = Object.assign({}, hero);
  }

}
