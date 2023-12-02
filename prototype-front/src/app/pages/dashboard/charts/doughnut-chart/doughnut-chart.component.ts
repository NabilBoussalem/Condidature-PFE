import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("doughnutChar", {
      type: 'doughnut',
      data: {
        labels: ['Cadre', 'Employé', "Ouvrier"],
        datasets: [
          {
            data: [37, 42, 21],
            backgroundColor: ["blue", "limegreen", "purple"],
          },
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Répartition des cadre professionnel',
            font: { size: 25 }
          }
        }
      }
    });
  }

}
