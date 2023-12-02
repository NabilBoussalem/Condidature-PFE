import { Component, OnInit } from '@angular/core';
import Chart from "chart.js/auto";


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("barChart", {
      type: 'bar', 
      data: {
        labels: ['2015', '2016', "2017"],
        datasets: [
          {
            label: "Drama",
            data: ['2559', '3325', '3118'],
            backgroundColor: 'blue'
          },
          {
            label: "Action/Adventure",
            data: ['1854', '2214', '2314'],
            backgroundColor: 'limegreen'
          },
          {
            label: "Comedy",
            data: ['951', '1066', '1105'],
            backgroundColor: 'rgb(156, 42, 35)'
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Drama/(Action/Adventure)/comedy film creation',
            font: { size: 25}
          }
        }
      }
    });
  }

}
