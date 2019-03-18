import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetGeojsonData {
    constructor(private httpClient:HttpClient){}
    getGeoJson(){
        return this.httpClient.get("https://api.myjson.com/bins/gerv4");
    }
    
}