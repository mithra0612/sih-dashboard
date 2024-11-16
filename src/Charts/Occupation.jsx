import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const getChartOptions = () => {
  return {
    series: [40, 25, 20, 15],// Percentages or proportions
        colors: ["#023E8A", "#0077B6", "#00B4D8", "#48CAE4"],
    chart: {
      height: 300,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "",
      width:3,
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Agriculture", "Construction", "Healthcare", "Technology"],
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
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    xaxis: {
      labels: {
        show:false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
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
    <div className="flex-col items-center justify-between p-2">
    <h2 className="text-xl font- text-blue-800 p-2">Occupation</h2>
      <div id="pie-chart" ></div>
  </div>

  );
}
