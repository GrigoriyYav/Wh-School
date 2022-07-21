import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userTokens } from '../auth/interfaces/tokens';
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

  getUserTokens():Observable<userTokens> {
    // No access
    //return this.http.get<userTokens>('https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights.json')

    //With access
    return this.http.get<userTokens>('https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights-full.json')
  }

  getWether(lat: any, lon: any):Observable<any> {
    //return this.http.get<any>(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=a7e393f0a0981631b74787f5b1ea2c52`)
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a7e393f0a0981631b74787f5b1ea2c52`)
  }
}
