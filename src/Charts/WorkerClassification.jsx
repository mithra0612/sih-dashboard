import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const options = {
  chart: {
    type: 'bar',
    height: '80%',
    width:"110%",
    toolbar: {
      show: false,
    },
    stacked: true, 
  },
  series: [
    {
      name: 'Main Workers',
      data: [1500, 3000, 2000, 500], 
    },
    {
      name: 'Marginalized Workers',
      data: [700, 1500, 1200, 300], 
    },
  ],
  xaxis: {
    categories: ['Agriculture', 'Manufacturing', 'Services', 'Construction'], 
  },
  yaxis: {
    title: {
      text: 'Population of Workers',
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '60%',
    },
  },
  colors: ['#1C64F2', '#E74694'],
  legend: {
    position: 'top',
  },
  dataLabels: {
    enabled: false,
    formatter: (val) => `${val}`,
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
  },
  grid: {
    borderColor: '#e0e0e0',
    strokeDashArray: 4,
  },
};

export default function WorkerClassification() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    if (chartRef.current) {
      chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-col items-center justify-between p-2">
      <h2 className="text-xl font-semibold text-blue-800 mb-4 align-text">Type of Work</h2>
      <div ref={chartRef} id="bar-chart" style={{ height: '320px', width: '100%' }}></div>
    </div>
  );
}
