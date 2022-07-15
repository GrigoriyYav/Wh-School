import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChartData } from '../pages/charts-page/interfaces/IChartData.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getChartsData() :Observable<IChartData>{
    //return this.http.get('./assets/charts-data.json')
    return this.http.get<IChartData>('https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json')
  }
}
