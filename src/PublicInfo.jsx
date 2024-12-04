import { React, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const data = [
  {
    id: 1,
    firstName: "Rajesh",
    lastName: "Kumar",
    aadhaar: "1234-5678-9012",
    gender: "Male",
    dob: "1985-06-15",
    income: 450000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 50 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 100 },
    scheme3: { name: "Post Office Recurring Deposit", daysLeft: 80 },
  },
  {
    id: 2,
    firstName: "Ananya",
    lastName: "Sharma",
    aadhaar: "9876-5432-1012",
    gender: "Female",
    dob: "1992-03-22",
    income: 300000,
    scheme1: { name: "Post Office Savings Account", daysLeft: 200 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 180 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 160 },
  },
  {
    id: 3,
    firstName: "Vikram",
    lastName: "Reddy",
    aadhaar: "5678-1234-9012",
    gender: "Male",
    dob: "1975-11-09",
    income: 600000,
    scheme1: { name: "Kisan Vikas Patra", daysLeft: 40 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 150 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 20 },
  },
  // Add the rest of your data...
];

const PublicInfo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [arrowRotated, setArrowRotated] = useState(false);
  const [sortedData, setSortedData] = useState(data);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const schemes = [
    "Sukanya Samriddhi Yojana",
    "Senior Citizen Savings Scheme",
    "Post Office Recurring Deposit",
  ];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setArrowRotated(!arrowRotated);
  };

  const handleSortByDays = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const aDaysLeft = Math.min(
        a.scheme1.daysLeft,
        a.scheme2.daysLeft,
        a.scheme3.daysLeft
      );
      const bDaysLeft = Math.min(
        b.scheme1.daysLeft,
        b.scheme2.daysLeft,
        b.scheme3.daysLeft
      );
      return aDaysLeft - bDaysLeft;
    });
    setSortedData(sorted);
  };

  const handleSchemeSelect = (scheme) => {
    setSelectedScheme(scheme);
    const filteredData = data.filter(
      (item) =>
        item.scheme1.name === scheme ||
        item.scheme2.name === scheme ||
        item.scheme3.name === scheme
    );
    setSortedData(filteredData);
  };

  const handleResetFilter = () => {
    setSortedData(data); // Reset the table to the original data
    setSelectedScheme(null); // Reset the selected scheme
  };

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (scheme) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...sortedData].sort((a, b) => {
      const aDaysLeft = a[scheme]?.daysLeft || 0;
      const bDaysLeft = b[scheme]?.daysLeft || 0;
      return newSortOrder === "asc"
        ? aDaysLeft - bDaysLeft
        : bDaysLeft - aDaysLeft;
    });
    setSortOrder(newSortOrder);
    setSortedData(sorted);
  };

  return (
    <div className="w-screen h-screen bg-[#f2f7fb]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="justify-between container flex h-14 items-center px-4 md:px-6">
          <button className="flex items-center space-x-1 bg-white text-black shadow-md">
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <div className="flex gap-20 text-black items-center">
            <form className="flex w-full max-w-sm items-center space-x-2">
              <input
                type="search"
                placeholder="Search here..."
                className="flex-1 h-10 w-72 rounded-full bg-[#e9efff] px-4 text-sm font-semibold text-[#6d7395] outline-none focus:ring-2 focus:ring-primary"
              />
            </form>
            <div className="flex items-center p-4 border-b gap-5">
              <h2>Filter</h2>
              <button
                onClick={handleSidebarToggle}
                className="bg-indigo-600 rounded-lg border-zinc-900"
              >
                {arrowRotated ? <FaChevronRight /> : <FaChevronLeft />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex">
        <div
          className={`fixed top-0 right-0 z-50 h-screen w-[290px] space-y-4 overflow-hidden bg-[#f9fafb] transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-700">Filter</h2>
            <button
              onClick={handleSidebarToggle}
              className="bg-indigo-600 rounded-lg border-zinc-900"
            >
              {arrowRotated ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Sort by Days</h3>
              <button
                onClick={handleSortByDays}
                className="mt-2 w-full rounded-lg bg-[#edfbff] p-2 text-sm text-primary"
              >
                Sort
              </button>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Select Scheme</h3>
              <select
                onChange={(e) => handleSchemeSelect(e.target.value)}
                className="mt-2 w-full rounded-lg border bg-white px-4 py-2 text-sm text-black"
              >
                <option value="">Select Scheme</option>
                {schemes.map((scheme, index) => (
                  <option key={index} value={scheme}>
                    {scheme}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                onClick={handleResetFilter}
                className="mt-4 w-full rounded-lg bg-[#f8f9fa] p-2 text-sm text-gray-700"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table Wrapper */}
        <div
          className={`flex-1 transition-all duration-500 ease-in-out relative ${
            isSidebarOpen ? "mr-[290px]" : "mr-0"
          }`}
        >
          <table className="min-w-96 bg-white border border-gray-200 shadow-md text-black">
            <thead>
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Scheme</th>
                <th className="p-4 text-left">Days Left</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item) => (
                <tr key={item.id} className="text-sm">
                  <td className="p-4">{`${item.firstName} ${item.lastName}`}</td>
                  <td className="p-4">
                    {item.scheme1.name}, {item.scheme2.name}, {item.scheme3.name}
                  </td>
                  <td className="p-4">
                    {Math.min(item.scheme1.daysLeft, item.scheme2.daysLeft, item.scheme3.daysLeft)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default PublicInfo;
