import {
  MapPin,
  DollarSign,
  Bell,
  LayoutGrid,
  Maximize2,
  Moon,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import PopulationSpike from "./Charts/PopulationSpike";
import Occupation from "./Charts/Occupation";
import LiteracyRate from "./Charts/LiteracyRate";
import EmploymentStatus from "./Charts/EmploymentStatus";
import GenderAge from "./Charts/GenderAge";
import AgeCategories from "./Charts/AgeCategories";
import WorkerClassification from "./Charts/WorkerClassification";

export default function Component() {
  const data = Array(12)
    .fill(0)
    .map((_, i) => ({ value: Math.random() * 100 }));
  const monthlyData = Array(12)
    .fill(0)
    .map((_, i) => ({ value: Math.random() * 100 }));

  const products = [
    {
      name: "Patimax Fragrance Long...",
      items: "100 Items",
      code: "Sflat",
      price: "$27.00",
      discount: "-15%",
      flag: "🇦🇹",
    },
    {
      name: "Nulo MedalSeries Adult Cat...",
      items: "100 Items",
      code: "Sflat",
      price: "$27.00",
      discount: "-15%",
      flag: "🇮🇳",
    },
    {
      name: "Patimax Fragrance Long...",
      items: "100 Items",
      code: "Sflat",
      price: "$27.00",
      discount: "-15%",
      flag: "🇦🇹",
    },
  ];

  const countries = [
    { name: "Turkish Flag", value: "6,972", trend: "up", flag: "🇹🇷" },
    { name: "Belgium", value: "6,972", trend: "up", flag: "🇧🇪" },
    { name: "Sweden", value: "6,972", trend: "down", flag: "🇸🇪" },
    // Add more countries as needed
  ];

  return (
    <div className="w-screen h-screen bg-[#f2f7fb] ">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <button className="flex items-center space-x-1 bg-white text-black shadow-md">
            <LayoutGrid className="h-4 w-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <form className="flex w-full max-w-sm items-center space-x-2 ">
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

      <main className="flex flex-col py-6 px-6 bg-white">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-blue-600">
                      Total Population
                    </p>
                    <h2 className="text-2xl font-bold text-blue-600">
                      20,37,802
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <div className="p-2 bg-cyan-100 rounded-lg space-x-4">
                    <MapPin className="h-6 w-6 text-cyan-800" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-cyan-800">
                      Nearest Post Office
                    </p>
                    <h3 className="text-xl font-bold text-cyan-800">
                    India Post,Sathyamangalam
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-200 rounded-lg">
                    <DollarSign className="h-6 w-6 text-indigo-800" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-indigo-800">
                      Number of Scheme Enrollment
                    </p>
                    <h2 className="text-2xl font-bold text-indigo-800">
                      7,802
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground text-orange-600">
                      Data
                    </p>
                    <h2 className="text-2xl font-bold text-orange-400">
                      100000
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4   ">
          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg">
            <PopulationSpike />
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-green-600">
                  Top Products
                </h3>
                <button variant="link" className="text-sm bg-green-500">
                  View all
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {products.map((product, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                      <div>
                        <p className="text-sm font-medium text-black">
                          {product.name}
                        </p>
                        <p className="text-sm text-muted-foreground text-orange-300">
                          {product.items}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-400">
                        {product.discount}
                      </p>
                      <p className="text-sm text-muted-foreground text-red-400">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg">
            <Occupation />
          </div>
          <div className="flex flex-row space-x-4">
            <div className="block w-max bg-white border rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex flex-col p-3">
                  <LiteracyRate />
                </div>
              </div>
            </div>
            <div class="block w-max bg-white border rounded-lg shadow-lg">
              <div className="flex-row">
                <div className="flex flex-shrink">
                  <GenderAge />
                </div>
              </div>
            </div>
            <div class="block w-max	p-6 bg-white border rounded-lg shadow-lg">
              <div className="flex-row">
                <div className="flex flex-grow-0">
                <AgeCategories/>
                </div>
              </div>
            </div>
            <div class="block p-6 bg-white border rounded-lg shadow-lg">
              <div className="flex-row">
                <div className="flex flex-shrink">
                    <WorkerClassification/>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div className="flex flex-row space-x-4 py-3">
            <div className="block w-max	bg-white border rounded-lg shadow-lg">
              <div className="p-6">
                <div className="flex flex-col p-3">
                  <EmploymentStatus />
                </div>
              </div>
            </div>
            <div class="block w-fit	p-6 bg-white border rounded-lg shadow-lg">
              <div className="flex-row">
                <div className="flex flex-shrink">
                </div>
              </div>
            </div>
            <div class="block w-max	p-6 bg-white border rounded-lg shadow-lg">
              <div className="flex-row">
                <div className="flex flex-shrink">
                <AgeCategories/>
                </div>
              </div>
            </div>

            <div class="block w-fit p-6 bg-white border rounded-lg shadow-lg">
              <div className="flex-row">
                <div className="flex flex-shrink">
                  <GenderAge/>
                </div>
              </div>
            </div>
          </div>
        
      </main>
    </div>
  );
}
