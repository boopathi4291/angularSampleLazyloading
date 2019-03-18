import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatMenuModule,MatTableModule,MatPaginatorModule,} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { ChartModule } from 'angular-highcharts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TablesComponent } from './tables/tables.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TableComponent } from './tables/table/table.component';

import {GetChartsData} from './services/getChartsData.service';
import { GetGeojsonData} from './services/getGeoson.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    
    TablesComponent,
    HeaderComponent,
    WelcomeComponent,
    TableComponent,
    // LineChart1Component,
    // LineChart2Component,
    // AreaChartComponent,
    // ColumnChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule, 
    MatFormFieldModule,
     MatInputModule,
     MatMenuModule,
     MatTableModule,
     FormsModule,
     NgxMapboxGLModule,
     MatPaginatorModule,
     ChartModule,
     FlexLayoutModule,
     HttpClientModule
  ],
  providers: [GetChartsData,GetGeojsonData],
  bootstrap: [AppComponent]
})
export class AppModule { }
