import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const options = {
    series: [60,30,10],
    colors: ["#818cf7", "#a6b4fd","#c7d2ff"],
    chart: {
      height: 320,
      width: "90%",
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
              show:false,
              
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
    dataLabels:{
        enabled:false,
    },
    legend: {
        show:false,
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
    <div className="block w-max p-6 bg-white border rounded-lg shadow-lg flex flex-row ">
        <div ref={chartRef} id="donut-chart" aria-label="Success Rate Donut Chart"></div>
        <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-purple-800 p-6 ">
          Success Rate
        </h2>
        <h1 className="text-5xl font-bold text-black flex font-poppins ">
            80%
        </h1>
        </div>
      </div>
    
  );
}
