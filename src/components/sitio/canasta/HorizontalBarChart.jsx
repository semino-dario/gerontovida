import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function HorizontalBarChart ({jubilacionMinima, ultimaCanasta}){



  const opciones = {
    scales: {
      y: {
        min: 0,
        ticks: {
          callback: function(value, index, ticks) {
              return '$ ' + value;
          }
      }
      },
    },
    plugins: {
      legend:{
        display: false
    },
    tooltip: {
      displayColors: false,

      callbacks: {
        label(tooltipItems: any) {
          return `$ ${tooltipItems.formattedValue}`
        }

    }
    }
   
  }
}



  const labels =['Jubilación Mínima','Canasta Básica'];
  const data = {
  type: 'horizontalBar',
  labels: labels,
  datasets: [{
    axis: 'y',
    label: '',
    data: [jubilacionMinima, ultimaCanasta],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',

    ],
        borderWidth: 1
  }],


};

  return (
    <div >
      <Bar data={data} options={opciones} />
    </div>

  );

}


export default HorizontalBarChart;
