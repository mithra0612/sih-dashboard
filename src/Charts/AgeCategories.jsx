import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const options = {
  series: [40, 60, 80, 25, 90, 55],
  colors: ["#1C64F2", "#1D9BF0", "#16BDCA", "#00D084", "#2DD4BF", "#38BDF8"],
  chart: {
    height: "380px",
    width: "90%",
    type: "radialBar",
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      track: {
        background: '#E5E7EB',
      },
      dataLabels: {
        show: false,
      },
      hollow: {
        margin: 0,
        size: "20%",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -23,
      bottom: -20,
    },
  },
  labels: ["0-6", "7-14", "15-25", "26-40", "41-50", "55+"],
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    fontSize: "14px",
    fontFamily: "Inter, sans-serif",
    labels: {
      colors: "#333",
    },
    markers: {
      width: 12,
      height: 12,
      radius: 4,
    },
    itemMargin: {
      horizontal: 10,
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

export default function LiteracyEmploymentStatus() {
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
    <div className="flex flex-col justify-between">
      <h2 className="text-xl font-bold text-blue-800">Age Distribution</h2>
      <div ref={chartRef} id="radial-chart"></div>
      <p className="text-center text-gray-600 mt-2">
        Age Groups: 0-6, 7-14, 15-25, 26-40, 41-50, 55+
      </p>
    </div>
  );
}
