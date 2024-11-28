import {
  MapPin,
  DollarSign,
  LayoutGrid,
  Search,
  Users,
  Pin,
} from "lucide-react";
import PopulationSpike from "./Charts/PopulationSpike";
import Occupation from "./Charts/Occupation";
import GenderAge from "./Charts/GenderAge";
import AgeCategories from "./Charts/AgeCategories";
import WorkerClassification from "./Charts/WorkerClassification";
import LiteracyPieChart from "./Charts/LiteracyPieChart";

export default function Component() {
  return (
    <div className="w-screen h-screen bg-[#f2f7fb]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <button className="flex items-center space-x-1 bg-white text-black shadow-md">
            <LayoutGrid className="h-4 w-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <form className="flex w-full max-w-sm items-center space-x-2">
            <input
              type="search"
              placeholder="Search here..."
              className="flex-1 h-9 rounded-lg border bg-background px-3 text-sm bg-white text-black shadow-md"
            />
            <button
              type="submit"
              className="flex items-center px-3 bg-white text-black shadow-md"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
      </header>

      <main className="flex flex-col py-3 px-3 bg-white">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md">
            <div className="p-4 flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800">Total Population</p>
                <h2 className="text-[18px] font-bold text-blue-800">20,37,802</h2>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md">
            <div className="p-4 flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800">Number of Scheme Enrollment</p>
                <h2 className="text-[18px] font-bold text-blue-800">7,802</h2>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md">
            <div className="p-4 flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800">Nearest Post Office</p>
                <h3 className="text-[18px] font-bold text-blue-800">Sathy post office</h3>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md">
            <div className="p-4 flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Pin className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800">Location</p>
                <h2 className="text-[18px] font-bold text-blue-800">Sathyamangalam</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex-2 w-max bg-white rounded-lg shadow-md">
            <PopulationSpike />
          </div>
          <div className="flex min-w-[200px] bg-white rounded-lg shadow-md">
            <LiteracyPieChart />
          </div>
          <div className="flex min-w-[200px] bg-white rounded-lg shadow-md">
            <Occupation />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
  <div className="flex-1 max-w-[370px] bg-white rounded-lg shadow-md p-6">
    <AgeCategories />
  </div>
  <div className="flex-1 max-w-[740px] bg-white rounded-lg shadow-md p-6">
    
    <WorkerClassification />
  </div>
  
  <div className="flex-1 max-w-[360px] bg-white rounded-lg shadow-md p-6">
  <GenderAge />
  </div>
</div>
      </main>
    </div>
  );
}
