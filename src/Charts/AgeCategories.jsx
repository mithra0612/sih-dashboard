import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const options = {
  series: [40, 60, 80, 25, 90, 55],
  colors: ["#1C64F2", "#1D9BF0", "#16BDCA", "#00D084", "#2DD4BF", "#38BDF8"],
  chart: {
    height: 400,
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      track: {
        background: '#E5E7EB',
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: '16px',
          fontFamily: 'Poppins, sans-serif',
          color: '#333',
          offsetY: 5,
        },
        value: {
          show: true,
          fontSize: '14px',
          color: '#333',
          offsetY: 5,
          formatter: (val) => `${val}%`,
        },
      },
      hollow: {
        size: "30%",
      },
    },
  },
  grid: {
    show: false,
    padding: {
      left: 10,
      right: 10,
      top: 20,
      bottom: 20,
    },
  },
  labels: ["0-6", "7-14", "15-25", "26-40", "41-50", "55+"],
  legend: {
    show: true,
    position: "bottom",
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif",
    labels: {
      colors: "#333",
    },
    markers: {
      width: 12,
      height: 12,
      radius: 4,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 5,
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    y: {
      formatter: (value) => `${value}%`,
    },
  },
  yaxis: {
    show: false,
  },
};

export default function AgeCategories() {
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
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-blue-800">Age Distribution</h2>
      <div ref={chartRef} id="radial-chart"></div>
    </div>
  );
}
