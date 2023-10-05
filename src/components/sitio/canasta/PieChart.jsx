import React from "react";
import styled from 'styled-components';
import { Doughnut } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);





function PieChart( {ultimaCanastaTorta, categorias, total} ) {

const tooltipLabel = (tooltipItem) =>{
  return '';
}

const porcentaje = (context) => {
  let percent = Math.round(context[0].parsed * 100 / total)
  return(
    percent + '%'
  );

}

  const opciones = {
      plugins: {
        legend:{
          display: true,
          onClick: false
        },
        tooltip: {
          callbacks:{
            title:function (context){
              return context[0].label

            },
            label: tooltipLabel,
            afterTitle:porcentaje
          }
        }

        }
  };


const chart = {

          datasets: [{
            label: '',
            data: ultimaCanastaTorta,
            backgroundColor: [
              '#FF4D7D',
              '#FF9D00',
              '#FFD030',
              '#00C4C3',
              '#009EF2',
              '#A745FF',
              '#C9CBCF',
              '#E10000'
            ],
            hoverOffset: 4
          }
        ],
        labels: categorias,
      }




  return (
      <CajaTorta >
      <Doughnut data={chart} options={opciones} />
      </CajaTorta >
    );
}



const CajaTorta = styled.div`


`

export default PieChart;
