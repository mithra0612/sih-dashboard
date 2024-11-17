import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const getChartOptions = () => {
  return {
    series: [40, 25, 20, 15], // Data percentages for Cultivators, Agricultural Laborers, Household Industries, Other Workers
    colors: ["#023E8A", "#0077B6", "#00B4D8", "#48CAE4"], // Colors for each category
    chart: {
      height: 300,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      width: 3,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ['Cultivators', 'Agricultural Laborers', 'Household Industries', 'Other Workers'], // Worker categories
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`,
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Poppins, sans-serif",
    },
    tooltip: {
      y: {
        formatter: (val) => `${val.toFixed(1)}%`, // Show percentage in tooltip
      },
    },
  };
};

export default function Occupation() {
  useEffect(() => {
    let chart;
    if (document.getElementById("pie-chart") && typeof ApexCharts !== "undefined") {
      chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
      chart.render();
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-col items-center justify-between p-4">
      <h2 className="text-xl font-semibold text-blue-800 p-2 text-center">Occupation Distribution</h2>
      <div id="pie-chart" style={{ height: "320px", width: "100%" }}></div>
    </div>
  );
}
