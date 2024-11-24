import React from "react";
import { LayoutGrid, Search } from "lucide-react"; // Replace with the correct library
import SuccessRateChart from "./Charts/SuccessRateChart";

export default function SchemesPage() {
  return (
    <div>
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
                className="flex-1 h-9 rounded-lg border bg-background px-3 text-sm bg-white text-black shadow-sm"
              />
              <button
                type="submit"
                className="flex items-center px-3 bg-white text-black shadow-sm"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        </header>

        <div className="flex flex-row justify-evenly space-x-4 mt-2 px-2 py-3.5 align-top">
          <div className="flex">
            <SuccessRateChart />
          </div>
          <div className="flex">
            <SuccessRateChart />
          </div>
        </div>

        <div className="px-6 mx-6 py-2">
          <div className="overflow-hidden rounded-lg border border-gray-100 shadow-md">
            <h3 className="text-violet-950 font-semibold text-[20px] p-3">Schemes</h3>
            <div className="h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#aeb6da] scrollbar-track-gray-200">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-[#f2f7fb] ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        {/* <input
                          id="radio-all-search"
                          type="radio"
                          name="select-product" 
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        /> */}
                        {/* <label htmlFor="radio-all-search" className="sr-only">
                          radio button
                        </label> */}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Accessories
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows */}
                  <tr className="bg-[#f2f7fb] border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="radio-table-search-1"
                          type="radio"
                          name="select-product" // Same name as other radio buttons
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        />
                        <label htmlFor="radio-table-search-1" className="sr-only">
                          radio button
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                  <tr className="bg-[#f2f7fb] border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="radio-table-search-2"
                          type="radio"
                          name="select-product" // Same name as other radio buttons
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        />
                        <label htmlFor="radio-table-search-2" className="sr-only">
                          radio button
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                  <tr className="bg-[#f2f7fb] border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="radio-table-search-2"
                          type="radio"
                          name="select-product" // Same name as other radio buttons
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        />
                        <label htmlFor="radio-table-search-2" className="sr-only">
                          radio button
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                  <tr className="bg-[#f2f7fb] border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="radio-table-search-2"
                          type="radio"
                          name="select-product" // Same name as other radio buttons
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        />
                        <label htmlFor="radio-table-search-2" className="sr-only">
                          radio button
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                  <tr className="bg-[#f2f7fb] border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="radio-table-search-3"
                          type="radio"
                          name="select-product" // Same name as other radio buttons
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        />
                        <label htmlFor="radio-table-search-3" className="sr-only">
                          radio button
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                  <tr className="bg-[#f2f7fb] border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="radio-table-search-4"
                          type="radio"
                          name="select-product" // Same name as other radio buttons
                          className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                        />
                        <label htmlFor="radio-table-search-4" className="sr-only">
                          radio button
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}