import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['Fruit', 'Protein', "Vegetables", "Diary", "Grains", "Others"],
        datasets: [
          {
            data: [30, 23, 18, 15, 9, 5],
            backgroundColor: ['blue', 'rgb(156, 42, 35)', 'green', 'purple', "rgb(255, 191, 0)", "rgb(173, 216, 230)"]
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'recommended diet',
            font: { size: 30 }
          }
        }
      }
    });
  }

}
