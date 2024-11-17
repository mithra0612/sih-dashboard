import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
  colors: ["#1A56DB", "#FDBA8C"],
  series: [
    {
      name: "Female",
      color: "#c8a2c8",
      data: [
        { x: "0-6", y: 130 },
        { x: "7-14", y: 140 },
        { x: "15-25", y: 190 },
        { x: "26-40", y: 170 },
        { x: "41-55", y: 150 },
        { x: "55+", y: 160 },

      ],
    },
    {
      name: "Male",
      color: "#1A56DB",
      data: [
        { x: "0-6", y: 120 },
        { x: "7-14", y: 150 },
        { x: "15-25", y: 200 },
        { x: "26-40", y: 180 },
        { x: "41-55", y: 160 },
        { x: "55+", y: 130 },
      ],
    },
  ],
  chart: {
    type: "bar",
    width: "130%",
    height: "350px",
    fontFamily: "Poppins, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      borderRadiusApplication: "end",
      borderRadius: 10,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "bottom",
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Poppins, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
  },
  fill: {
    opacity: 1,
  },
};

export default function GenderAge() {
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
    <div className="flex flex-col justify-center">
      <div ref={chartRef} id="bar-chart"></div>
    </div>
  );
}
