import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart-luca',
  templateUrl: './pie-chart-luca.component.html',
  styleUrls: ['./pie-chart-luca.component.css']
})
export class PieChartLucaComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.labels,
    datasets: [{
      data: this.data
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];


  ngOnChanges(changes: SimpleChanges) {
    let newData: number[] = changes['data']?.currentValue;
    let newLabels: string[] = changes['labels']?.currentValue;
    this.pieChartData.datasets[0].data.push(...newData);
    this.pieChartData.labels?.push(...newLabels);
  }
}

