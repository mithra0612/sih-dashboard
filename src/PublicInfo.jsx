import { React, useState } from "react";
import { LayoutGrid, Search } from "lucide-react";

export const data = [
  {
    id: 1,
    firstName: "Rajesh",
    lastName: "Kumar",
    gender: "Male",
    income: 450000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 50 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 100 },
    scheme3: { name: "Post Office Recurring Deposit", daysLeft: 80 },
  },
  {
    id: 2,
    firstName: "Ananya",
    lastName: "Sharma",
    gender: "Female",
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
    income: 600000,
    scheme1: { name: "Kisan Vikas Patra", daysLeft: 40 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 150 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 20 },
  },
  {
    id: 4,
    firstName: "Meera",
    lastName: "Nair",
    gender: "Female",
    income: 250000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 50 },
    scheme2: { name: "Post Office Time Deposit", daysLeft: 100 },
    scheme3: { name: "Public Provident Fund (PPF)", daysLeft: 300 },
  },
  {
    id: 5,
    firstName: "Ravi",
    lastName: "Singh",
    gender: "Male",
    income: 500000,
    scheme1: { name: "Public Provident Fund (PPF)", daysLeft: 150 },
    scheme2: { name: "National Savings Certificate (NSC)", daysLeft: 140 },
    scheme3: { name: "Kisan Vikas Patra", daysLeft: 130 },
  },
  {
    id: 6,
    firstName: "Neha",
    lastName: "Patel",
    gender: "Female",
    income: 350000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 300 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 290 },
    scheme3: { name: "Post Office Time Deposit", daysLeft: 280 },
  },
  {
    id: 7,
    firstName: "Arun",
    lastName: "Joshi",
    gender: "Male",
    income: 400000,
    scheme1: { name: "Post Office Recurring Deposit", daysLeft: 100 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 25 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 15 },
  },
  {
    id: 8,
    firstName: "Sanya",
    lastName: "Gupta",
    gender: "Female",
    income: 280000,
    scheme1: { name: "Post Office Savings Account", daysLeft: 450 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 40 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 430 },
  },
  {
    id: 9,
    firstName: "Nitin",
    lastName: "Verma",
    gender: "Male",
    income: 650000,
    scheme1: { name: "Kisan Vikas Patra", daysLeft: 50 },
    scheme2: { name: "Post Office Recurring Deposit", daysLeft: 400 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 30 },
  },
  {
    id: 10,
    firstName: "Kavita",
    lastName: "Yadav",
    gender: "Female",
    income: 320000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 180 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 170 },
    scheme3: { name: "Post Office Time Deposit", daysLeft: 160 },
  },
    {
    id: 11,
    firstName: "Arvind",
    lastName: "Khan",
    gender: "Male",
    income: 550000,
    scheme1: { name: "Post Office Recurring Deposit", daysLeft: 130 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 120 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 110 },
  },
  {
    id: 12,
    firstName: "Richa",
    lastName: "Malhotra",
    gender: "Female",
    income: 380000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 180 },
    scheme2: { name: "Post Office Time Deposit", daysLeft: 160 },
    scheme3: { name: "Senior Citizen Savings Scheme", daysLeft: 140 },
  },
  {
    id: 13,
    firstName: "Sunil",
    lastName: "Patel",
    gender: "Male",
    income: 490000,
    scheme1: { name: "Post Office Savings Account", daysLeft: 400 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 390 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 380 },
  },
  {
    id: 14,
    firstName: "Sushma",
    lastName: "Sharma",
    gender: "Female",
    income: 260000,
    scheme1: { name: "Post Office Recurring Deposit", daysLeft: 270 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 260 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 250 },
  },
  {
    id: 15,
    firstName: "Anil",
    lastName: "Jha",
    gender: "Male",
    income: 610000,
    scheme1: { name: "Senior Citizen Savings Scheme", daysLeft: 30 },
    scheme2: { name: "Sukanya Samriddhi Yojana", daysLeft: 25 },
    scheme3: { name: "Post Office Time Deposit", daysLeft: 20 },
  },
  {
    id: 16,
    firstName: "Pooja",
    lastName: "Singh",
    gender: "Female",
    income: 290000,
    scheme1: { name: "Kisan Vikas Patra", daysLeft: 70 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 60 },
    scheme3: { name: "Post Office Recurring Deposit", daysLeft: 50 },
  },
  {
    id: 17,
    firstName: "Rajeev",
    lastName: "Reddy",
    gender: "Male",
    income: 730000,
    scheme1: { name: "National Savings Certificate (NSC)", daysLeft: 140 },
    scheme2: { name: "Post Office Savings Account", daysLeft: 130 },
    scheme3: { name: "Senior Citizen Savings Scheme", daysLeft: 120 },
  },
  {
    id: 18,
    firstName: "Jaspreet",
    lastName: "Kaur",
    gender: "Female",
    income: 320000,
    scheme1: { name: "Sukanya Samriddhi Yojana", daysLeft: 110 },
    scheme2: { name: "Kisan Vikas Patra", daysLeft: 100 },
    scheme3: { name: "Public Provident Fund (PPF)", daysLeft: 90 },
  },
  {
    id: 19,
    firstName: "Vijay",
    lastName: "Yadav",
    gender: "Male",
    income: 420000,
    scheme1: { name: "Post Office Time Deposit", daysLeft: 60 },
    scheme2: { name: "Sukanya Samriddhi Yojana", daysLeft: 50 },
    scheme3: { name: "Public Provident Fund (PPF)", daysLeft: 40 },
  },
  {
    id: 20,
    firstName: "Alok",
    lastName: "Bansal",
    gender: "Male",
    income: 490000,
    scheme1: { name: "National Savings Certificate (NSC)", daysLeft: 35 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 25 },
    scheme3: { name: "Post Office Savings Account", daysLeft: 15 },
  },
  {
    id: 21,
    firstName: "Kriti",
    lastName: "Verma",
    gender: "Female",
    income: 270000,
    scheme1: { name: "Post Office Recurring Deposit", daysLeft: 300 },
    scheme2: { name: "Sukanya Samriddhi Yojana", daysLeft: 290 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 280 },
  },
  {
    id: 22,
    firstName: "Anil",
    lastName: "Kumar",
    gender: "Male",
    income: 620000,
    scheme1: { name: "Public Provident Fund (PPF)", daysLeft: 250 },
    scheme2: { name: "National Savings Certificate (NSC)", daysLeft: 240 },
    scheme3: { name: "Post Office Recurring Deposit", daysLeft: 230 },
  },
  {
    id: 23,
    firstName: "Divya",
    lastName: "Mehta",
    gender: "Female",
    income: 310000,
    scheme1: { name: "Post Office Savings Account", daysLeft: 380 },
    scheme2: { name: "Sukanya Samriddhi Yojana", daysLeft: 370 },
    scheme3: { name: "Public Provident Fund (PPF)", daysLeft: 360 },
  },
  {
    id: 24,
    firstName: "Harish",
    lastName: "Nair",
    gender: "Male",
    income: 540000,
    scheme1: { name: "Senior Citizen Savings Scheme", daysLeft: 90 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 80 },
    scheme3: { name: "Post Office Recurring Deposit", daysLeft: 70 },
  },
  {
    id: 25,
    firstName: "Sonia",
    lastName: "Chopra",
    gender: "Female",
    income: 430000,
    scheme1: { name: "Kisan Vikas Patra", daysLeft: 210 },
    scheme2: { name: "Post Office Time Deposit", daysLeft: 200 },
    scheme3: { name: "Public Provident Fund (PPF)", daysLeft: 190 },
  },
  {
    id: 26,
    firstName: "Rajeev",
    lastName: "Singh",
    gender: "Male",
    income: 560000,
    scheme1: { name: "Post Office Savings Account", daysLeft: 130 },
    scheme2: { name: "Senior Citizen Savings Scheme", daysLeft: 120 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 110 },
  },
  {
    id: 27,
    firstName: "Simran",
    lastName: "Kaur",
    gender: "Female",
    income: 310000,
    scheme1: { name: "Post Office Recurring Deposit", daysLeft: 180 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 170 },
    scheme3: { name: "Sukanya Samriddhi Yojana", daysLeft: 160 },
  },
  {
    id: 28,
    firstName: "Vishal",
    lastName: "Chauhan",
    gender: "Male",
    income: 620000,
    scheme1: { name: "National Savings Certificate (NSC)", daysLeft: 60 },
    scheme2: { name: "Kisan Vikas Patra", daysLeft: 50 },
    scheme3: { name: "Senior Citizen Savings Scheme", daysLeft: 40 },
  },
  {
    id: 29,
    firstName: "Shivani",
    lastName: "Verma",
    gender: "Female",
    income: 320000,
    scheme1: { name: "Post Office Time Deposit", daysLeft: 110 },
    scheme2: { name: "Kisan Vikas Patra", daysLeft: 100 },
    scheme3: { name: "National Savings Certificate (NSC)", daysLeft: 90 },
  },
  {
    id: 30,
    firstName: "Mukesh",
    lastName: "Yadav",
    gender: "Male",
    income: 550000,
    scheme1: { name: "Post Office Recurring Deposit", daysLeft: 160 },
    scheme2: { name: "Public Provident Fund (PPF)", daysLeft: 150 },
    scheme3: { name: "Sukanya Samriddhi Yojana", daysLeft: 140 },
  },

];


const PublicInfo = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([...data]);
  
  // Function to handle sorting by the selected scheme
  const handleSort = (scheme) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    
    const sorted = [...sortedData].sort((a, b) => {
      // Use the specific scheme's daysLeft for sorting
      const aDaysLeft = a[scheme]?.daysLeft || 0; // Default to 0 if the scheme doesn't exist
      const bDaysLeft = b[scheme]?.daysLeft || 0;
      
      return newSortOrder === "asc" ? aDaysLeft - bDaysLeft : bDaysLeft - aDaysLeft;
    });
    
    setSortOrder(newSortOrder);
    setSortedData(sorted);
  };
  return (
    <div className="w-screen h-screen bg-[#f2f7fb]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <button className="flex items-center space-x-1 bg-white text-black shadow-md">
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
              Search
            </button>
          </form>
        </div>
      </header>
  
      <div className="p-5">
        <h2 className="text-gray-800 text-2xl font-semibold p-4">Details</h2>
        <div className="max-h-[540px] overflow-x-auto">
        <table className="table-auto text-gray-900 border-separate border-spacing-0 border border-gray-300 bg-white min-w-full">
        <thead className="sticky top-0 bg-slate-100 text-blue-900 rounded-md">
              <tr>
                <th className="px-4 py-2 whitespace-nowrap">First Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Last Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Gender</th>
                {/* <th className="px-4 py-2 whitespace-nowrap">Income</th> */}

                {/* Scheme 1 Column */}
                <th className="px-4 py-2 whitespace-nowrap">Scheme 1</th>
                <th
                  className="px-4 py-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("scheme1")}
                >
                  Days Left {sortOrder === "asc" ? "⬆" : "⬇"}
                </th>

                {/* Scheme 2 Column */}
                <th className="px-4 py-2 whitespace-nowrap">Scheme 2</th>
                <th
                  className="px-4 py-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("scheme2")}
                >
                  Days Left {sortOrder === "asc" ? "⬆" : "⬇"}
                </th>

                {/* Scheme 3 Column */}
                <th className="px-4 py-2 whitespace-nowrap">Scheme 3</th>
                <th
                  className="px-4 py-2 whitespace-nowrap cursor-pointer"
                  onClick={() => handleSort("scheme3")}
                >
                  Days Left {sortOrder === "asc" ? "⬆" : "⬇"}
                </th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {sortedData.map((row) => (
                <tr key={row.id} className="hover:bg-blue-50 hover:text-blue-800">
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.firstName}</td>
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.lastName}</td>
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.gender}</td>
                  {/* <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.income}</td> */}

                  {/* Scheme 1 Days Left */}
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.scheme1.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        row.scheme1.daysLeft < 80
                          ? "text-red-700"
                          : row.scheme1.daysLeft < 150
                          ? "text-yellow-600"
                          : "text-green-700"
                      }`}
                    >
                      {row.scheme1.daysLeft}
                    </span>
                  </td>

                  {/* Scheme 2 Days Left */}
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.scheme2.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300" border border-gray-300>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        row.scheme2.daysLeft < 80
                          ? "text-red-700"
                          : row.scheme2.daysLeft < 150
                          ? "text-yellow-600"
                          : "text-green-700"
                      }`}
                    >
                      {row.scheme2.daysLeft}
                    </span>
                  </td>

                  {/* Scheme 3 Days Left */}
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">{row.scheme3.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap border border-gray-300">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        row.scheme3.daysLeft < 80
                          ? "text-red-700"
                          : row.scheme3.daysLeft < 150
                          ? "text-yellow-600"
                          : "text-green-700"
                      }`}
                    >
                      {row.scheme3.daysLeft}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PublicInfo;