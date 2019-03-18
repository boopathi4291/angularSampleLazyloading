import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {MapComponent} from './map/map.component';
import {TablesComponent} from'./tables/tables.component';

const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'map', component:MapComponent},
  {path:'chart', loadChildren:'./charts/charts.module#ChartsModule'},
  {path:'table', component:TablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
