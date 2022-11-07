import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { single } from './data';
@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit, OnDestroy {
  result: any[]=[
    {
      "name": "Game 1",
      "value": 10
    },
    {
      "name": "Game 2",
      "value": 20
    },
    {
      "name": "Game 3",
      "value": 5
    },
    {
      "name": "Game 4",
      "value": 8
    }
  ];
  view = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = 'nightLights'

interval;
  constructor() { }
  ngOnDestroy(): void {
clearInterval(this.interval)
  }

  ngOnInit(): void {

    // this.result.forEach(game => {
    //   game.value = Math.round(Math.random()*100);

    // });

    this.interval= setInterval(()=>{
      // console.log('thick');
      const newResults = [...this.result];

      newResults.forEach(game => {
        game.value = Math.round(Math.random()*100);
  
      });
      this.result=[...newResults];;
    },1500)

  }



  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
