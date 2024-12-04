import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
  series: [60, 30, 10],
  colors: ["#818cf7", "#a6b4fd", "#c7d2ff"],
  chart: {
    height: 200,
    width: "100%",
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "55%",
        labels: {
          show: false,
          name: {
            show: false,
            fontFamily: "Poppins, sans-serif",
            offsetY: 20,
          },
          total: {
            show: false,
          },
          value: {
            show: false,
            fontFamily: "Poppins, sans-serif",
            offsetY: -20,
          },
        },
      },
    },
  },
  // labels: ["Sc", "Sponsor"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    //   position: "bottom",
    //   fontFamily: "Poppins, sans-serif",
  },
};

export default function SuccessRateChart() {
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
      <div className="w-max p-3 border rounded-lg shadow-md flex items-center bg-white">
        <div
          ref={chartRef}
          id="donut-chart"
          aria-label="Success Rate Donut Chart"
        ></div>
        <div>
          <div className="flex flex-col p-6 gap-4">
            <h2 className="text-2xl font-semibold text-purple-800">Scheme</h2>
            <h6 className="text-xl font-bold text-black flex font-poppins ">
              National Savings Certificate (NSC)
            </h6>
          </div>
          <div className="flex flex-col p-6 gap-5">
            <h2 className="text-2xl font-semibold text-purple-800">
              Success Rate
            </h2>
            <h1 className="text-4xl font-bold text-black flex font-poppins ">
              80%
            </h1>
          </div>
        </div>
      </div>
  );
}
