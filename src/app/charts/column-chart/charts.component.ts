import { Component, OnInit } from "@angular/core";
import { GetChartsData } from "../../services/getChartsData.service";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-column-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"]
})
export class ColumnChartsComponent implements OnInit {
  chartData: any = {};
  chart: any;
  constructor(private getChartsData: GetChartsData) {}
  ngOnInit() {
    this.getChartsData.getColumnChartone().subscribe(res => {
      this.chartData = res;
      this.chart = new Chart({
        chart: {
          type: "column"
        },
        title: {
          text: this.chartData.config.title
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
    });
  }
}
