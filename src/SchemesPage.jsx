import React from "react";
import { LayoutGrid, Search } from "lucide-react"; // Replace with the correct library
import SuccessRateChart from "./Charts/SuccessRateChart";
import Location from "./Location";

export default function SchemesPage() {
  return (
    <div>
      <div className="w-screen bg-[#f2f7fb]">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
          <div className="container flex h-14 items-center justify-between px-4 md:px-6">
            <button className="flex items-center space-x-1 bg-white text-black shadow-md">
              <LayoutGrid className="h-4 w-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="search"
                placeholder="Search here..."
                className="flex-1 h-9 rounded-lg border px-3 text-sm bg-white text-black shadow-sm"
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

        <div className="overflow-auto">
          <div className="flex px-6 mt-28 gap-10 ">
            <div>
              <SuccessRateChart />
            </div>
            <div>
              <Location />
            </div>
          </div>

          <div className="p-6 shadow-lg">
            <div className="overflow-hidden rounded-lg border border-gray-100 ">
              <h3 className="text-violet-950 font-semibold text-[20px] p-3">
                Schemes
              </h3>
              <div className="border-b-1 border-gray-300 rounded-xl h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#aeb6da] scrollbar-track-gray-200 shadow-xl">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-[#f2f7fb] border-2 border-[#f2f7fb]-900">
                  <thead className="text-xs text-gray-700 uppercase bg-[#c7d2ff]">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">
                          {/* Optional radio button */}
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Schemes
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Targeted Audience
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table rows */}
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Post Office Savings Account
                      </th>
                      <td className="px-6 py-4">
                        General public, rural/semi-urban areas
                      </td>
                      <td className="px-6 py-4">
                        Encourage savings with easy access to banking
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-2"
                            type="radio"
                            name="select-product"
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-2"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Recurring Deposit (RD)
                      </th>
                      <td className="px-6 py-4">Middle/lower-income groups</td>
                      <td className="px-6 py-4">
                        Help save small amounts monthly and get a lump sum at
                        maturity.
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-3"
                            type="radio"
                            name="select-product"
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-3"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Time Deposit (TD)
                      </th>
                      <td className="px-6 py-4">
                        Salaried individuals, pensioners
                      </td>
                      <td className="px-6 py-4">
                        Offer fixed-income returns for short to long-term
                        investments
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Public Provident Fund (PPF)
                      </th>
                      <td className="px-6 py-4">
                        Salaried/self-employed individuals, taxpayers
                      </td>
                      <td className="px-6 py-4">
                        Promote long-term savings with tax benefits.
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        National Savings Certificate (NSC)
                      </th>
                      <td className="px-6 py-4">
                        Small-scale investors, taxpayers
                      </td>
                      <td className="px-6 py-4">
                        Provide guaranteed returns with tax-saving benefits
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Kisan Vikas Patra (KVP)
                      </th>
                      <td className="px-6 py-4">
                        Rural/semi-urban populations, farmers
                      </td>
                      <td className="px-6 py-4">
                        Offer secure investment doubling deposits in a fixed
                        period
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Sukanya Samriddhi Yojana (SSY)
                      </th>
                      <td className="px-6 py-4">Parents of girl children</td>
                      <td className="px-6 py-4">
                        Secure girl children’s future (education and marriage
                        expenses)
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Senior Citizen Savings Scheme (SCSS)
                      </th>
                      <td className="px-6 py-4">Senior citizens aged 60+</td>
                      <td className="px-6 py-4">
                        Provide regular income and secure investments
                        post-retirement
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Atal Pension Yojana (APY)
                      </th>
                      <td className="px-6 py-4">
                        Workers in unorganized sectors
                      </td>
                      <td className="px-6 py-4">
                        Ensure pension and social security after retirement
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Postal Life Insurance (PLI)
                      </th>
                      <td className="px-6 py-4">
                        Government employees, salaried individuals
                      </td>
                      <td className="px-6 py-4">
                        Provide low-cost life insurance with high returns
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Rural Postal Life Insurance (RPLI)
                      </th>
                      <td className="px-6 py-4">
                        Rural populations, farmers, small businesses
                      </td>
                      <td className="px-6 py-4">
                        Extend affordable life insurance to rural areas
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-1"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-1"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        India Post Payments Bank (IPPB)
                      </th>
                      <td className="px-6 py-4">
                        Unbanked/underbanked in rural/remote areas
                      </td>
                      <td className="px-6 py-4">
                        Provide digital banking and doorstep services
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-2"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-2"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Money Transfer Service Scheme (MTSS)
                      </th>
                      <td className="px-6 py-4">General public</td>
                      <td className="px-6 py-4">
                        Enable safe and fast domestic/international money
                        transfers
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-2"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-2"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Direct Benefit Transfer (DBT)
                      </th>
                      <td className="px-6 py-4">
                        Welfare scheme beneficiaries
                      </td>
                      <td className="px-6 py-4">
                        Ensure subsidies and benefits reach eligible recipients
                        directly
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-2"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-2"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Mahila Samman Savings Certificate
                      </th>
                      <td className="px-6 py-4">Women in rural areas</td>
                      <td className="px-6 py-4">
                        Empower women through savings and financial independence
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-3"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-3"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Kisan Credit Card (KCC)
                      </th>
                      <td className="px-6 py-4">
                        Farmers, agricultural workers
                      </td>
                      <td className="px-6 py-4">
                        Provide short-term loans for agriculture, animal
                        husbandry, and allied activities
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-4"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-4"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Loan Against NSC/KVP
                      </th>
                      <td className="px-6 py-4">NSC/KVP holders</td>
                      <td className="px-6 py-4">
                        Enable borrowing against the value of National Savings
                        Certificates or Kisan Vikas Patra as security
                      </td>
                    </tr>
                    <tr className="bg-[#f2f7fb] border-b border-gray-400 hover:bg-gray-50">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="radio-table-search-4"
                            type="radio"
                            name="select-product" // Same name as other radio buttons
                            className="w-4 h-4 text-[#6366f1] bg-gray-100 border-gray-300 rounded focus:ring-[#6366f1] focus:ring-2"
                          />
                          <label
                            htmlFor="radio-table-search-4"
                            className="sr-only"
                          >
                            radio button
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Loan Against RD/TD
                      </th>
                      <td className="px-6 py-4">RD/TD account holders</td>
                      <td className="px-6 py-4">
                        Offer short-term credit by pledging Recurring Deposit
                        (RD) or Time Deposit (TD)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
