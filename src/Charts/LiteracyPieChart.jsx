// LiteracyChart.js
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const getLiteracyChartOptions = () => {
  return {
    series: [45, 15, 30, 10],
    colors: ["#FF7F50", "#FFB6C1", "#9370DB", "#BA55D3"],
    chart: {
      height: 300,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      width: 3,
    },
    labels: ["Literate Men", "Illiterate Men", "Literate Women", "Illiterate Women"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Poppins, sans-serif",
    },
  };
};

export default function LiteracyPieChart() {
  useEffect(() => {
    let literacyChart;
    if (document.getElementById("literacy-chart") && typeof ApexCharts !== "undefined") {
      literacyChart = new ApexCharts(document.getElementById("literacy-chart"), getLiteracyChartOptions());
      literacyChart.render();
    }
    return () => {
      if (literacyChart) literacyChart.destroy();
    };
  }, []);

  return (
    <div className="flex-col items-center">
      <h2 className="text-xl font-bold text-blue-800 p-2">Literate/Illiterate Men and Women</h2>
      <div id="literacy-chart"></div>
    </div>
  );
}
