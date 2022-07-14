import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IChart, IChartData } from './interfaces/IChartData.interface';
import { registerables } from 'node_modules/chart.js'
import Chart from "chart.js/auto";
import { map } from 'rxjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';
//ChartDataLabels

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss'],
  providers: [HttpService]
})
export class ChartsPageComponent implements OnInit, OnDestroy {

  chartData: IChart[] = [];
  labels: string[] = [];

  constructor(private httpService: HttpService) { 
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }


  ngOnInit(): void {

    this.httpService.getChartsData().pipe(map ((value: any)=> value.data )).subscribe({
      next: (value: any) => this.chartData = value,
      error: (err) => console.log(err),
      complete: () => this.showCharts()
   });


    if(document.getElementsByClassName('paginationBar').length > 0){
        Array.from(document.getElementsByClassName('paginationBar') as HTMLCollectionOf<HTMLElement>)[0].style.display = 'none';
    }
    
  }

  ngOnDestroy(): void {
    
    if(document.getElementsByClassName('paginationBar').length > 0){
      Array.from(document.getElementsByClassName('paginationBar') as HTMLCollectionOf<HTMLElement>)[0].style.display = 'flex';
    }
  }


  showCharts(){
    console.log(this.chartData)

    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
          datasets: [{
            label: 'этап 1',
            data: this.chartData,
            borderColor: 'yellow',
            parsing: {
              yAxisKey: 'qty_shk_cat1'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat1
              }
            }
          },
          {
            label: 'этап 2',
            data: this.chartData,
            borderColor: 'green',
            parsing: {
              yAxisKey: 'qty_shk_cat2'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat2
              }
            }
          },
          {
            label: 'этап 3',
            data: this.chartData,
            borderColor: 'purple',
            parsing: {
              yAxisKey: 'qty_shk_cat3'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat3
              }
            }
          },
          {
            label: 'этап 4',
            data: this.chartData,
            borderColor: 'blue',
            parsing: {
              yAxisKey: 'qty_shk_cat4'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat4
              }
            }
          },
          {
            label: 'всего',
            data: this.chartData,
            borderColor: 'red',
            parsing: {
              yAxisKey: 'qty_shk'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk
              }
            }
          },
          
        ]
      },
      options: {
          parsing: {
              xAxisKey: 'dt_date',
              yAxisKey: 'qty_shk_cat1'
          },
          plugins: {
            datalabels: {
              align: 'top',
              color: 'black'
            }
          },
          elements: {
            line: {
                tension: 0.4 // disables bezier curves
          }
      },
      },

    });

    let shk1 = 0, shk2 = 0, shk3 = 0, shk4 = 0

    this.chartData.forEach(element => {
      shk1 += element.qty_shk_cat1;
      shk2 += element.qty_shk_cat2;
      shk3 += element.qty_shk_cat3;
      shk4 += element.qty_shk_cat4;
    });

    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['этап 1', 'этап 2', 'этап 3', 'этап 4'],
        datasets: [{
            label: '# of Votes',
            data: [shk1,shk2,shk3,shk4],
            backgroundColor: [
                'yellow',
                'green',
                'blue',
                'purple',
            ],
            borderColor: [
              'white',
            ],
            borderWidth: 2,
            hoverOffset: 4,
        }]
      },
      options: {
        plugins: {
          datalabels: {
            color: 'black',
            formatter: function (value) {
              return null
            }
          }
        },
        scales: {
            y: {
              display: false,
              grid: {
                display: false,
              },
                beginAtZero: true
            },
        
        }
      }
    });

  }

}
