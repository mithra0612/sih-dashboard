import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

//age_7_14, age_15_25, age_26_40, age_41_55

const options = {
    series: [40,60,80,25,90],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C","#16BDCA", "#FDBB8C", "#FCCB8C"],
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
        }
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
    labels: ["0-6", "7-14", "15-25","26-40","41-50","55+"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      }
    }
  };

export default function LiteracyEmploymentStatus() {
  const chartRef = useRef(null);
  
  useEffect(() => {
    let chart; // Declare chart here for access in cleanup
    
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
    </div>
  );
}
