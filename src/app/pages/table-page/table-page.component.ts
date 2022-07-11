import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

interface PeriodicElementInfo {
  position: number;
  name: string;
  weight: number;
  displayedInCell: string;
}

const extendedData: PeriodicElementInfo[]  = [
  {position: 24, name: 'ElementName', weight: 881.9950604495106, displayedInCell: 'Is not gas'},
  {position: 18, name: 'ElementName', weight: 797.1882834817152, displayedInCell: 'Is not gas'},
  {position: 81, name: 'ElementName', weight: 83.27795127138148, displayedInCell: 'Is not gas'},
  {position: 12, name: 'ElementName', weight: 484.7582920570088, displayedInCell: 'Is not gas'},
  {position: 37, name: 'ElementName', weight: 97.37565904722523, displayedInCell: 'Is not gas'},
  {position: 42, name: 'ElementName', weight: 807.5197617071963, displayedInCell: 'Is not gas'},
  {position: 87, name: 'ElementName', weight: 82.77845613163004, displayedInCell: 'Is not gas'},
  {position: 10, name: 'ElementName', weight: 203.494457177799, displayedInCell: 'Is not gas'},
  {position: 73, name: 'ElementName', weight: 228.65816441155462, displayedInCell: 'Is not gas'},
  {position: 6, name: 'ElementName', weight: 767.8192773812831, displayedInCell: 'Is not gas'},
]


const data: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablePageComponent implements  OnInit, OnDestroy, AfterViewInit {
  dataSource = new MatTableDataSource(data);
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;

  displayedColumns: string[] = ['position', 'name', 'weight', 'displayedInCell'];
  extendedDataSource = new MatTableDataSource(extendedData);

  @ViewChild('sorter1') sorter1 = new MatSort();
  @ViewChild('sorter2') sorter2 = new MatSort();
  //@ViewChild(MatSort, {static: false}) sorter1!: MatSort;
  //@ViewChild(MatSort, {static: false}) sorter2!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sorter1;
    this.extendedDataSource.sort = this.sorter2;
  }

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

  addData() {
    let randomData = new Array (0)
      for (let n = 0; n <= data.length; n++) {
        for (let i = 0; i < data.length; i++) {
            randomData[i] = {
              position: Math.random()* (0 - 1000),
              name: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
              weight: Math.random() * (0 - 1000),
              symbol: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
            }
        }
    }

    this.dataSource = new MatTableDataSource(randomData)
  }
}