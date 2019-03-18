import { Component, OnInit } from "@angular/core";
import { GetChartsData } from "../../services/getChartsData.service";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-area-chart",
  templateUrl: "./area-chart.component.html",
  styleUrls: ["./area-chart.component.scss"]
})
export class AreaChartComponent {
  chartData: any = {};
  chart: any;
  constructor(private getChartsData: GetChartsData) {}

  ngOnInit() {
    this.getChartsData.getAreaChart().subscribe(res => {
      this.chartData = res;
      this.chart = new Chart({
        chart: {
          type: "area"
        },
        title: {
          text: this.chartData.config.title
        },
        xAxis: {
          categories: this.chartData.data.xAxis
        },
        //   xAxis:<any> {
        //       allowDecimals: false,
        //       labels: {
        //           formatter: function () {
        //               return this.value; // clean, unformatted number for year
        //           }
        //       }
        //   },
        yAxis: {
          title: {
            text: this.chartData.data.yAxis.name
          },
          labels: {
            formatter: function() {
              return this.value / 1000 + "k";
            }
          }
        },
        plotOptions: {
          area: {
            pointStart: 1940,
            marker: {
              enabled: false,
              symbol: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
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
