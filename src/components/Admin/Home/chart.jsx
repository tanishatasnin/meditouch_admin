import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  // Function to generate the last 10 days' dates
  const generateLast10Days = () => {
    const dates = [];
    const today = new Date();

    for (let i = 9; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split('T')[0]); // Format: YYYY-MM-DD
    }

    return dates;
  };

  const [state, setState] = useState({
    series: [
      {
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7], // Example sales data
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: generateLast10Days(), // Use dynamically generated dates
        labels: {
          formatter: function (value) {
            const date = new Date(value);
            return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
          },
        },
      },
      title: {
        text: 'Daily Revenue for Last 10 Days',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#eeaeca','#76, #48, #118'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Chart;
