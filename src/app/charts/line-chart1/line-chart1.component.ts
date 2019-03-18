import { Component, OnInit } from '@angular/core';
import { GetChartsData } from "../../services/getChartsData.service";
import { Chart } from 'angular-highcharts';
 
@Component({
  selector: 'app-line-chart1',
  templateUrl: './line-chart1.component.html',
  styleUrls: ['./line-chart1.component.scss']
})
export class LineChart1Component  implements OnInit{
  chartData: any = {};
  chart: any;
  constructor(private getChartsData: GetChartsData) {}
  ngOnInit(){
    this.getChartsData.getLineChartone().subscribe(res => {
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