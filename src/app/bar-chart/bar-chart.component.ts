import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChartOptions, Color } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @Input() data: number[][] = [];
  @Input() labels: string[] = [];

  barChartData;
  barChartOptions: ChartOptions;

  constructor() {
    this.barChartData = {
      datasets: new Array(),
      labels: this.labels
    };
    this.barChartOptions = {};
    /*
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
    };*/
  }
  // aggiorna dati chart quando l'input cambia
  ngOnChanges(changes: SimpleChanges) {
    let newData: number[][] = changes['data']?.currentValue;
    let newLabels: string[] = changes['labels']?.currentValue;

    for (let i = 0; i < newData.length; i++) {
      let serie = newData[i];
      let dataObj = { data: serie };
      this.barChartData.datasets.push(dataObj);

    }
    this.barChartData.labels.push(...newLabels);
  }
}
