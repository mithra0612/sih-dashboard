import React from "react";
import GenderAge from "./Charts/GenderAge";
import Occupation from "./Charts/Occupation";
import WorkerPieChart from "./Charts/WorkerPieCharts";
import LiteracyPieChart from "./Charts/LiteracyPieChart";


function SideBar() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row text-black text-4xl">
      {/* Map Section */}
      <div className="w-full md:w-2/5 bg-slate-50 flex items-center justify-center md:h-screen">
        <p>Map</p>
      </div>

      {/* Sathyamangalam Section */}
      <div className="w-full md:w-3/5 bg-blue-100 md:h-screen">
        <div className="p-3">
          <h3>Sathyamangalam</h3>
        </div>

        <div className="flex flex-row space-x-4 p-3">
          <div class="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <p>NSVJOI</p>
              </div>
            </div>
          </div>
          <div class="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <p>NSVJOI</p>
              </div>
            </div>
          </div>
          <div class="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <p>NSVJOI</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 p-3">
          <div class="block w-fit h-fit p-6 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <GenderAge />
              </div>
            </div>
          </div>
          <div class="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <WorkerPieChart/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 p-3">
          <div class="block w-fit h-fit p-6 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <GenderAge />
              </div>
            </div>
          </div>
          <div class="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <div className="flex-row">
              <div className="flex flex-shrink">
                <LiteracyPieChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
