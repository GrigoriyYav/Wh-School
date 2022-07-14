import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getChartsData(){
    return this.http.get('https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json')
  }
}
