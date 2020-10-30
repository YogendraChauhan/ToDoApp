import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() title: string;
  @Input() type: ChartType = 'line';
  @Input() data: ChartDataSets[];
  @Input() labels: Label[];

  public options: any = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            steps : 20,
            stepValue : 20,
            min: 0
          }
      }]
    }
  };

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
