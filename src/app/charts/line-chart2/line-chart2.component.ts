import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GetChartsData } from "../../services/getChartsData.service";

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.scss']
})
export class LineChart2Component implements OnInit {
  chartData: any = {};
  chart: any;
  constructor(private getChartsData: GetChartsData) { }

  ngOnInit(){
    this.getChartsData.getLineCharttwo().subscribe(res => {
      this.chartData = res;
  this.chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    xAxis: {
      categories: this.chartData.data.xAxis
    },
    yAxis: {
      min: 0,
      title: {
        text: this.chartData.data.yAxis.name
      }
    },
    series: <any>[
          {
            name: this.chartData.config.axis.xaxis.label,
            data: this.chartData.data.yAxis.data
          }
        ]
  });
})
 
}
 
}
