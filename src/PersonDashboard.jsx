import React from "react";
import {
  LayoutGrid,
  Search,
  Heart,
  Smartphone,
  MapPin,
  Users,
  UserPlus,
  DollarSign,
  Target,
  Briefcase,
  Compass,
  Pickaxe,
  IndianRupee,
  Banknote,
} from "lucide-react";
import CreditScore from "./Charts/CreditScore";

export default function PersonDashboard() {
  const user = {
    name: "Priya Raman",
    phoneNumber: "+91-9876543211",
    address: "456 ABC Nagar, Pollachi Taluk, Coimbatore, Tamil Nadu, India",
    age: 32,
    gender: "Female",
    areaName: "Pollachi",
    location: "Coimbatore, Tamil Nadu",
    maritalStatus: "Married",
    occupation: "Farmer",
    monthlyIncome: "₹35,000",
    educationLevel: "10th Grade",
    financialGoal: "Savings",
    riskAppetite: "Low",
    duration: "Long",
    bankAccount: "Yes",
    digitalUsage: "Low",
    ownLandForAgriculture: "No",
    alreadyInLoan: "No",
    needNewLoan: "Yes",
    taxPayer: "No",
    needEducationLoan: "No",
    noOfChildren: 1,
    noOfGirlChildrenUnder10: 1,
    creditScore: 750, // Credit score out of 1000
    recommendedSchemes: [
      { name: "Public Provident Fund (PPF)", details: "Long-term tax-saving investment with guaranteed returns" },
      { name: "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)", details: "Pension scheme for small farmers" },
      { name: "Atal Pension Yojana (APY)", details: "Government-backed pension scheme for unorganized sector" }
    ],
    postOffice: "Pollachi Head Post Office",
    subdistrict: "Pollachi Taluk",
    district: "Coimbatore"
  };
  

  //
  return (
    <div className="w-screen max-h-fit bg-[#f2f7fb] mt-[580px] overflow-hidden">
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
      <div className="p-6 h-fit mx-[60px] mt-[20px] max-w-[1400px]">
        {/* Personal Information Section */}
        <h2 className="font-semibold text-2xl text-gray-700">
          Personal Information
        </h2>
        <hr className="my-2 border-[1.5px] border-gray-200" />
        <div className="flex flex-row space-x-4">
          <div className="bg-white shadow-md rounded-lg w-[670px] h-[300px] my-2 p-8 text-justify h-full ">
            <h3 className="text-gray-700 text-xl mb-4 font-semibold">
              Profile Summary
            </h3>
            <p className="text-gray-600 text-lg pb-2">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-600 text-lg pb-2">
              <strong>Age:</strong> {user.age}
            </p>
            <p className="text-gray-600 text-lg pb-2">
              <strong>Phone Number:</strong>{" "}
              <a href="tel:{user.phoneNumber}" className="text-gray-600">
                {user.phoneNumber}
              </a>
            </p>
            <p className="text-gray-600 text-lg pb-2">
              <strong>Address:</strong> {user.address}
            </p>
            <p className="text-gray-600 text-lg pb-2">
              <strong>Education Level:</strong> {user.educationLevel}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 flex items-center h-full">
              <Heart className="text-blue-700 h-7 w-7 mr-4" />
              <p className="text-gray-600 text-lg">
                <strong>Marital Status:</strong> {user.maritalStatus}
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 flex items-center h-full">
              <Briefcase className="h-7 w-7 text-blue-700 mr-3" /> {/* Icon */}
              <div className="text-lg text-gray-600">
                <strong>Occupation:</strong> {user.occupation}
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 flex items-center h-full">
              <MapPin className="text-blue-700 h-7 w-7 mr-4" />
              <p className="text-gray-600 text-lg">
                <strong>Area Name:</strong> {user.areaName}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-white shadow-md rounded-lg w-[335px] m-h-[200px] h-full my-2 p-4">
              <h3 className="text-gray-700 font-semibold text-lg mb-2 pb-3">
                Family Details
              </h3>
              <div className="flex flex-col space-y-4 ">
                <div className="flex items-center space-x-2 ">
                  <Users className="text-blue-700 h-7 w-7" />
                  <p className="text-gray-600 text-lg ">
                    <strong>Number of Children:</strong> {user.noOfChildren}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <UserPlus className="text-blue-700 h-7 w-7" />
                  <p className="text-gray-600 text-lg pb-3">
                    <strong>Number of Girl Children:</strong>{" "}
                    {user.noOfGirlChildrenUnder10}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] h-full my-2 p-4 flex items-center">
              <div className="flex items-center space-x-2">
                <Compass className="text-blue-700 h-7 w-7" />

                <p className="text-gray-600 text-lg items-center break-all">
                  <strong className="ml-2">Location:</strong>
                  <div className="ml-2"> {user.location}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 h-fit m-[60px] mt-0 max-w-[1400px]">
        {/* Financial Information Section */}
        <h2 className="font-semibold text-2xl text-gray-700">
          Financial Information
        </h2>
        <hr className="my-2 border-[1.5px] border-gray-300" />
        <div className="space-x-4">
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <div className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px]  my-2 p-4 flex items-center">
                <div className="flex justify-center items-center space-x-2">
                  <IndianRupee className="text-blue-700 h-7 w-7" />
                  <p className="text-gray-600 text-lg">
                    <strong>Monthly Income: </strong> {user.monthlyIncome}
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] h-full my-2 flex justify-center items-center">
                <CreditScore creditScore={user.creditScore} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px]  my-2 p-4 flex items-center">
                <Target className="h-7 w-7 text-blue-700 mr-3" /> {/* Icon */}
                <div className="text-lg text-gray-700">
                  <strong>Financial Goal:</strong> {user.financialGoal}
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] h-full my-2 p-4 flex items-center">
                <div className="flex justify-center items-center space-x-2">
                  <Pickaxe className="text-blue-700 h-7 w-7" />
                  <p className="text-gray-600 text-lg">
                    <strong>Own Land for Agriculture:</strong>{" "}
                    {user.ownLandForAgriculture}
                  </p>
                </div>
              </div>{" "}
              <div className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] my-2 h-full"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row space-x-4">
                <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px]  my-2 p-4 flex items-center">
                  <Banknote className="h-7 w-7 text-blue-700 mr-3" />{" "}
                  {/* Icon */}
                  <div className="text-lg text-gray-600">
                    <strong>Taxpayer:</strong> {user.taxPayer}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] h-full my-2 p-4 flex items-center">
                    <Smartphone className="text-blue-700 h-7 w-7 " />
                    <p className="text-gray-600 text-lg p-2">
                      <strong>Digital Usage:</strong> {user.digitalUsage}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4">
                  <h2 className="font-semibold text-xl text-gray-700 mb-2 pb-2">
                    Risk and Investment Preferences
                  </h2>

                  <div className="flex flex-col space-y-2">
                    {/* Risk Appetite */}
                    <div className="flex justify-between pb-2">
                      <strong className="text-gray-600">Risk Appetite:</strong>
                      <span className="text-gray-600">{user.riskAppetite}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex justify-between pb-2">
                      <strong className="text-gray-600">
                        Investment Duration:
                      </strong>
                      <span className="text-gray-600">{user.duration}</span>
                    </div>

                    {/* Bank Account */}
                    <div className="flex justify-between">
                      <strong className="text-gray-600">Bank Account:</strong>
                      <span className="text-gray-600">
                        {user.bankAccount === "Yes" ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px]  my-2 p-4">
                  <h2 className="font-semibold text-xl text-gray-700 mb-2 pb-2">
                    Investment Strategy
                  </h2>

                  <div className="flex flex-col space-y-2">
                    <div className ="bg-gray-100 p-3 rounded-lg">
                    <p className="text-md text-gray-600 leading-1 ">
                      Based on your risk appetite, we recommend investments with
                      moderate returns. For a {user.duration} investment
                      duration, consider fixed deposits or mutual funds.
                    </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Loan and other data */}
        <div className="flex flex-row space-x-4 justify-between mt-[40px] ">
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl text-gray-700">
              Loan Details
            </h2>
            <hr className="my-2 border-[1.5px] border-gray-200" />
            <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 h-full">
              <div className="space-y-2 ">
                {/* Already In Loan */}
                <div className="flex justify-between py-2 ">
                  <strong className="text-gray-600">Already in Loan:</strong>
                  <span className="text-gray-600">{user.alreadyInLoan}</span>
                </div>

                {/* Need New Loan */}
                <div className="flex justify-between pb-2">
                  <strong className="text-gray-600">Need New Loan:</strong>
                  <span className="text-gray-600">
                    {user.needNewLoan === "Yes" ? "Yes" : "No"}
                  </span>
                </div>

                {/* Need Education Loan */}
                <div className="flex justify-between pb-2">
                  <strong className="text-gray-600 ">
                    Need Education Loan:
                  </strong>
                  <span className="text-gray-600">
                    {user.needEducationLoan === "Yes" ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-semibold text-2xl text-gray-700  ">
              Post Office Details
            </h2>
            <hr className="my-2 border-[1.5px] border-gray-200" />
            <div className="bg-white shadow-md rounded-lg w-[355px] min-h-[80px] h-full my-2 p-4">
              <div className="space-y-2">
                {/* Post Office */}
                <div className="space-x-4 flex flex-row">
                  <strong className="text-gray-600 w-60 ">Post Office: </strong>
                  <span className="text-gray-600 flex text-right ">{user.postOffice}</span>
                </div>

                {/* Subdistrict */}
                <div className="flex space-x-4 pb-2 justify-between">
                  <strong className="text-gray-600">Subdistrict:</strong>
                  <span className="text-gray-600">{user.subdistrict}</span>
                </div>

                {/* District */}
                <div className="flex gap-12 pb-2 justify-between">
                  <strong className="text-gray-600">District:</strong>
                  <span className="text-gray-600">{user.district}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-semibold text-2xl text-gray-700 ">
              Scheme Recommendation
            </h2>
            <hr className="my-2 border-[1.5px] border-gray-200" />
            <div className="bg-white shadow-md rounded-lg w-[650px] min-h-[80px] h-full my-2 p-4">
              <div className="space-y-1">
                {user.recommendedSchemes.map((scheme, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 font-medium pb-2">
                      {scheme.name}
                    </span>
                    <button className="text-blue-700 hover:underline bg-white">
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
