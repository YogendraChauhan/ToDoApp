import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartsModule, ThemeService } from 'ng2-charts';



@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [ThemeService],
  exports: [ChartComponent]
})
export class SmartChartsModule { }
