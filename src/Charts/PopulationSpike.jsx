import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const options = {
  chart: {
    height: 300,
    width: "100%",
    type: "area",
    fontFamily: "Poppins, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 1,
      right: 1,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [100000, 130030, 104430, 90000, 129300, 140000],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: false,
  },
};

export default function PopulationSpike() {
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
      <h2 className="text-xl font- text-blue-800">Expected Population Spike</h2>
        <div ref={chartRef} id="area-chart" ></div>
    </div>
  );
}
