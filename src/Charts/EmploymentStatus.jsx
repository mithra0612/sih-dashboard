import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
  series: [64.23, 36.07],
  colors: ["#1C64F2", "#16BDCA"],
  chart: {
    height: 300,
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
            fontFamily: "Poppins, sans-serif",
            offsetY: 20,
          },
          total: {
            showAlways: true,
            show: true,
            label: "Employment Status",
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
  labels: ["Male", "Female"],
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

export default function EmploymentStatus() {
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
      {/* <h2 className="text-xl font-poppins font-bold text-blue-700 p-2">Literacy Rate</h2> */}
      <div ref={chartRef} id="donut-chart"></div>
    </div>
  );
}
