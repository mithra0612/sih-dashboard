import React from "react";
import { Link } from 'react-router-dom';

import GenderAge from "./Charts/GenderAge";
import WorkerPieChart from "./Charts/WorkerPieCharts";
import LiteracyPieChart from "./Charts/LiteracyPieChart";
import WorkersLineChart from "./Charts/WorkersLineChart";
import { House } from "lucide-react";

function SideBar() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row text-black text-4xl">
      {/* Map Section */}
      <div className="w-full md:w-2/5 bg-slate-50 flex items-center justify-center md:h-screen md:fixed left-0 top-0">
        <p>Map</p>
      </div>

      {/* Sathyamangalam Section */}
      <div className="w-full md:w-3/5 bg-blue-100 md:ml-[40%] p-3 overflow-y-auto h-screen">
        <div className="flex items-baseline justify-between p-4">
          <h3 className="text-2xl font-bold p-3">Sathyamangalam</h3>
          <div className="flex flex-row items-end space-x-4">
            <Link to='/detailed-demographics'>
              <h3 className="text-sm">Detailed Demographics</h3>
            </Link>
            <Link to='/suggested-schemes'>
              <h3 className="text-sm">Suggested Schemes</h3>
            </Link>
          </div>
        </div>

        <div className="flex flex-row space-x-4 p-3">
          <div className="flex items-center w-60 h-28 p-4 bg-white border rounded-lg shadow-lg">
            <div className="p-3 bg-blue-100 rounded-lg mr-3">
              <House className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Population</p>
              <p className="text-xl font-semibold text-gray-800">1,000</p>
            </div>
          </div>

          {/* Household Count Tile */}
          <div className="flex items-center w-60 h-28 p-4 bg-white border rounded-lg shadow-lg">
            <div className="p-3 bg-blue-100 rounded-lg mr-3">
              <House className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Household Count</p>
              <p className="text-xl font-semibold text-gray-800">1,000</p>
            </div>
          </div>

          {/* Additional Tiles */}
          <div className="flex items-center w-60 h-28 p-4 bg-white border rounded-lg shadow-lg">
            <div className="p-3 bg-blue-100 rounded-lg mr-3">
              <House className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Gender Ratio</p>
              <p className="text-xl font-semibold text-gray-800">950/1000</p>
            </div>
          </div>
          <div className="flex items-center w-60 h-28 p-4 bg-white border rounded-lg shadow-lg">
            <div className="p-3 bg-blue-100 rounded-lg mr-3">
              <House className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-xl font-semibold text-gray-800">Erode, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4 p-3">
          <div className="block w-fit h-fit p-6 bg-white border rounded-lg shadow-lg">
            <GenderAge />
          </div>
          <div className="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <WorkerPieChart />
          </div>
        </div>

        <div className="flex flex-row space-x-4 p-3">
          <div className="block w-fit h-fit p-6 bg-white border rounded-lg shadow-lg">
            <LiteracyPieChart />
          </div>
          <div className="block w-fit h-fit p-3 bg-white border rounded-lg shadow-lg">
            <WorkersLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
