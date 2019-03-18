import { NgModule } from "@angular/core";

import { ChartsComponent } from "../charts/charts.component";
import { LineChart1Component } from "../charts/line-chart1/line-chart1.component";
import { LineChart2Component } from "../charts/line-chart2/line-chart2.component";
import { AreaChartComponent } from "../charts/area-chart/area-chart.component";
import { ColumnChartsComponent } from "../charts/column-chart/charts.component";
import { GetChartsData } from "../services/getChartsData.service";

import { ChartModule } from "angular-highcharts";
import { ChartsRoutingModule } from "./charts.routing.module";

@NgModule({
  declarations: [
    ChartsComponent,
    LineChart1Component,
    LineChart2Component,
    AreaChartComponent,
    ColumnChartsComponent
  ],
  imports: [ChartModule, ChartsRoutingModule],
  providers: [GetChartsData],
  exports: [ChartsComponent,LineChart1Component,
    LineChart2Component,
    AreaChartComponent,
    ColumnChartsComponent]
})
export class ChartsModule {}
