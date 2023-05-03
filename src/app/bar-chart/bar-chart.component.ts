import { Component } from '@angular/core';
import { ChartOptions, Color } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  barChartData;
  barChartOptions: ChartOptions;

  constructor() {
    this.barChartData = {
      datasets: [{
        data: [20, 10, 2, 1],
      }],
      labels: ['a', 'b', 'ciao', 'bella']
    };
    this.barChartOptions = {

      backgroundColor: (ctx) => {
        let color: Color[] = ["#F3A712", "#a8c686", "#774c60", "#FF6B6B", "#669BBC"];
        let index = ctx.dataIndex % color.length;
        return color[index];
      },

      plugins: {
        legend: {
          display: false
        }
      }
    };
  }
}
