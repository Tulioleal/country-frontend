"use client"

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js/auto';
import styles from './PopulationChart.module.css';


const PopulationChart = ({
  populationByYear
}: {
  populationByYear: {
    year: number;
    value: number;
  }[]
}) => {
  const labels = populationByYear.map((population) => population.year.toString());
  const data = {
    labels: labels,
    datasets: [
      {
        label: '',
        display: false,
        data: populationByYear.map((population) => population.value),
        borderColor: "#387dcc",
        backgroundColor: "#387dcc",
      }
    ]
  };


  const options:ChartOptions<"line"> = {

  };

  return (
    <div className={styles.container}>
      <h2>Population by year</h2>
      <Line data={data} options={options} width={1600} height={800}/>
    </div>
  );
}

export default PopulationChart;