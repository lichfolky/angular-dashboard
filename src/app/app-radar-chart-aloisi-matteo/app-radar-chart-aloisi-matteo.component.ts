import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-app-radar-chart-aloisi-matteo',
  templateUrl: './app-radar-chart-aloisi-matteo.component.html',
  styleUrls: ['./app-radar-chart-aloisi-matteo.component.css']
})
export class AppRadarChartAloisiMatteoComponent implements OnChanges {

  @Input() labelList!: string[];
  @Input() dataList!: number[];

// Radar
public radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
};

public radarChartData: ChartData<'radar'> = {
  labels: this.labelList,
  datasets: [
    { data: this.dataList, label: 'Giratina' }
  ]
};

ngOnChanges(): void {
  this.radarChartData.labels = this.labelList
  this.radarChartData.datasets[0].data = this.dataList
}

}
