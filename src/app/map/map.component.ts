import { Component, OnInit } from '@angular/core';
import { GetGeojsonData} from '../services/getGeoson.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  style:any;
  geoData:any;
  features:any;
  public myMarker:any;
  constructor(private geoJson: GetGeojsonData) { }

  ngOnInit() {
    this.geoJson.getGeoJson().subscribe((res:any)=>{

    this.features=res.features;
  this.style = {
    sources: {
      world: {
        type: "geojson",
        data: res
      }
    },
    version: 8,
    layers: [{
      "id": "countries",
      "type": "fill",
      "source": "world",
      "layout": {},
      "paint": {
        'fill-color': '#6F788A'
      }
    }]
  }
 
})
}
}