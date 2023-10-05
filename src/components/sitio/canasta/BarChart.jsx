import React from "react";
import {DataCanasta} from './DataCanasta.jsx';
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






const options = {
  
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function(value, index, ticks) {
            return '$ ' + value;
        }
    }
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },

    tooltip:{
      displayColors: false,
      callbacks: {
        label(tooltipItems: any) {
          return `$ ${tooltipItems.formattedValue}`
        }

    }

    }
}
}

function BarChart() {

  const  canastas =  DataCanasta.map(cifra => cifra.canasta);
  const  labels = DataCanasta.map(fechaId => fechaId.periodo);

  const data =  {
      datasets: [
        {
          label: '',
          data: canastas,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "#008900",
        },
      ],
      labels,
    };

  return (
    <div >
      <Bar data={data} options={options} />
    </div>

  );
}

export default BarChart;
