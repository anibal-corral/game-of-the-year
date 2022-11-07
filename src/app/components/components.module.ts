import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
    
  ],
  exports:[
    NavbarComponent,
    HorizontalBarChartComponent
]
})
export class ComponentsModule { }
