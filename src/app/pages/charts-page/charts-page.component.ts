import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IChartData } from './interfaces/IChartData.interface';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss'],
  providers: [HttpService]
})
export class ChartsPageComponent implements OnInit, OnDestroy {

  chartData?: IChartData;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.httpService.getChartsData().subscribe((data: any) => this.chartData=data);

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
