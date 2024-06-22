import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Completed', 'In Progress', 'Overdue', 'Not Started'],
    datasets: [
      {
        label: 'Tasks',
        data: [10, 20, 30, 40],
        backgroundColor: ['#ff9f40', '#36a2eb', '#ff6384', '#cc65fe'],
        hoverBackgroundColor: ['#ff9f40', '#36a2eb', '#ff6384', '#cc65fe'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-32 h-32">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;