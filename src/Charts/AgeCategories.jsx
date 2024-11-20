import React, { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';

const options = {
  series: [12.5, 18.3, 24.2, 15.1, 14.7, 15.2], // Example population distribution data for each age group
  colors: ["#00B4D8", "#0077B6", "#90E0EF", "#48CAE4", "#023E8A", "#1C64F2"], // Colors for each segment
  chart: {
    height: 250,
    width: "100%",
    type: "donut",
  },
  stroke: {
    colors: ["transparent"],
    lineCap: "",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontsize: "12px",
            fontFamily: "Poppins, sans-serif",
            offsetY: 20,
          },
          total: {
            showAlways: true,
            show: true,
            label: "Age",
            size:"18px",
            fontFamily: "Poppins, sans-serif",
          },
          value: {
            show: false,
            fontFamily: "Poppins, sans-serif",
          },
        },
        size: "75%",
      },
    },
  },
  grid: {
    padding: {
      top: -2,
    },
  },
  labels: ["0-6", "7-14", "15-25", "25-40", "41-55", "55+"], // Age groups
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    fontFamily: "Inter, sans-serif",
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
  },
  xaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};

export default function AgeDistribution() {
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
                  <h2 className="text-[18px] text-blue-800 mb-4 align-text">Age Distribution</h2>

      <div ref={chartRef} id="donut-chart"></div>
    </div>
  );
}
