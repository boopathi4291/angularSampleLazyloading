import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetChartsData {
    constructor(private httpClient:HttpClient){}
    getColumnChartone(){
        return this.httpClient.get("https://api.myjson.com/bins/1aw0k4");
    }
    getLineChartone(){
        return this.httpClient.get("https://api.myjson.com/bins/fxdbk");
    }
    getLineCharttwo(){
        return this.httpClient.get("https://api.myjson.com/bins/1avws0");
    }
    getAreaChart(){
        return this.httpClient.get("https://api.myjson.com/bins/1dx7yo");
    }
}