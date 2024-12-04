import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Filter = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Control sidebar visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Control dropdown visibility
  const [filter, setFilter] = useState(""); // This will be used to track which scheme is selected
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "Rajesh",
      lastName: "Kumar",
      aadhaar: "1234-5678-9012",
      gender: "Male",
      dob: "1985-06-15",
      income: 450000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "Senior Citizen Savings Scheme",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 120,
    },
    {
      id: 2,
      firstName: "Ananya",
      lastName: "Sharma",
      aadhaar: "9876-5432-1012",
      gender: "Female",
      dob: "1992-03-22",
      income: 300000,
      scheme1: "Post Office Savings Account",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "National Savings Certificate (NSC)",
      daysLeft: 200,
    },
    {
      id: 3,
      firstName: "Vikram",
      lastName: "Singh",
      aadhaar: "1456-8790-1234",
      gender: "Male",
      dob: "1978-11-03",
      income: 500000,
      scheme1: "Public Provident Fund (PPF)",
      scheme2: "National Pension Scheme (NPS)",
      scheme3: "Kisan Vikas Patra",
      daysLeft: 150,
    },
    {
      id: 4,
      firstName: "Neha",
      lastName: "Verma",
      aadhaar: "6789-1234-5678",
      gender: "Female",
      dob: "1989-07-09",
      income: 320000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "Senior Citizen Savings Scheme",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 180,
    },
    {
      id: 5,
      firstName: "Ravi",
      lastName: "Patel",
      aadhaar: "4321-8765-0987",
      gender: "Male",
      dob: "1990-02-25",
      income: 350000,
      scheme1: "Public Provident Fund (PPF)",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Post Office Savings Account",
      daysLeft: 160,
    },
    {
      id: 6,
      firstName: "Priya",
      lastName: "Singh",
      aadhaar: "5566-4433-2211",
      gender: "Female",
      dob: "1995-12-17",
      income: 280000,
      scheme1: "National Pension Scheme (NPS)",
      scheme2: "Post Office Recurring Deposit",
      scheme3: "Kisan Vikas Patra",
      daysLeft: 230,
    },
    {
      id: 7,
      firstName: "Arun",
      lastName: "Reddy",
      aadhaar: "9988-7755-4433",
      gender: "Male",
      dob: "1980-10-04",
      income: 600000,
      scheme1: "Senior Citizen Savings Scheme",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "Post Office Savings Account",
      daysLeft: 140,
    },
    {
      id: 8,
      firstName: "Sita",
      lastName: "Rani",
      aadhaar: "1122-3344-5566",
      gender: "Female",
      dob: "1986-09-18",
      income: 400000,
      scheme1: "Post Office Recurring Deposit",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Kisan Vikas Patra",
      daysLeft: 210,
    },
    {
      id: 9,
      firstName: "Harish",
      lastName: "Thakur",
      aadhaar: "2233-4455-6677",
      gender: "Male",
      dob: "1975-01-10",
      income: 750000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "National Pension Scheme (NPS)",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 100,
    },
    {
      id: 10,
      firstName: "Meera",
      lastName: "Kaur",
      aadhaar: "3344-5566-7788",
      gender: "Female",
      dob: "1991-08-12",
      income: 420000,
      scheme1: "Public Provident Fund (PPF)",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Senior Citizen Savings Scheme",
      daysLeft: 190,
    },
    {
      id: 11,
      firstName: "Ajay",
      lastName: "Mehra",
      aadhaar: "6677-8899-1122",
      gender: "Male",
      dob: "1993-04-17",
      income: 390000,
      scheme1: "Post Office Savings Account",
      scheme2: "Kisan Vikas Patra",
      scheme3: "National Pension Scheme (NPS)",
      daysLeft: 250,
    },
    {
      id: 12,
      firstName: "Sunita",
      lastName: "Yadav",
      aadhaar: "4455-6677-8899",
      gender: "Female",
      dob: "1980-12-05",
      income: 330000,
      scheme1: "Post Office Recurring Deposit",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "National Savings Certificate (NSC)",
      daysLeft: 180,
    },
    {
      id: 13,
      firstName: "Vijay",
      lastName: "Nair",
      aadhaar: "9988-6677-3344",
      gender: "Male",
      dob: "1983-05-30",
      income: 600000,
      scheme1: "Senior Citizen Savings Scheme",
      scheme2: "Kisan Vikas Patra",
      scheme3: "Post Office Savings Account",
      daysLeft: 130,
    },
    {
      id: 14,
      firstName: "Rita",
      lastName: "Choudhury",
      aadhaar: "5566-7788-9900",
      gender: "Female",
      dob: "1990-07-13",
      income: 370000,
      scheme1: "National Pension Scheme (NPS)",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "Post Office Savings Account",
      daysLeft: 220,
    },
    {
      id: 15,
      firstName: "Rohit",
      lastName: "Joshi",
      aadhaar: "2233-4455-6677",
      gender: "Male",
      dob: "1994-01-18",
      income: 420000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 160,
    },
  ]);

  // Initial data for resetting
  const initialData = [
    {
      id: 1,
      firstName: "Rajesh",
      lastName: "Kumar",
      aadhaar: "1234-5678-9012",
      gender: "Male",
      dob: "1985-06-15",
      income: 450000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "Senior Citizen Savings Scheme",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 120,
    },
    {
      id: 2,
      firstName: "Ananya",
      lastName: "Sharma",
      aadhaar: "9876-5432-1012",
      gender: "Female",
      dob: "1992-03-22",
      income: 300000,
      scheme1: "Post Office Savings Account",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "National Savings Certificate (NSC)",
      daysLeft: 200,
    },
    {
      id: 3,
      firstName: "Vikram",
      lastName: "Singh",
      aadhaar: "1456-8790-1234",
      gender: "Male",
      dob: "1978-11-03",
      income: 500000,
      scheme1: "Public Provident Fund (PPF)",
      scheme2: "National Pension Scheme (NPS)",
      scheme3: "Kisan Vikas Patra",
      daysLeft: 150,
    },
    {
      id: 4,
      firstName: "Neha",
      lastName: "Verma",
      aadhaar: "6789-1234-5678",
      gender: "Female",
      dob: "1989-07-09",
      income: 320000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "Senior Citizen Savings Scheme",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 180,
    },
    {
      id: 5,
      firstName: "Ravi",
      lastName: "Patel",
      aadhaar: "4321-8765-0987",
      gender: "Male",
      dob: "1990-02-25",
      income: 350000,
      scheme1: "Public Provident Fund (PPF)",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Post Office Savings Account",
      daysLeft: 160,
    },
    {
      id: 6,
      firstName: "Priya",
      lastName: "Singh",
      aadhaar: "5566-4433-2211",
      gender: "Female",
      dob: "1995-12-17",
      income: 280000,
      scheme1: "National Pension Scheme (NPS)",
      scheme2: "Post Office Recurring Deposit",
      scheme3: "Kisan Vikas Patra",
      daysLeft: 230,
    },
    {
      id: 7,
      firstName: "Arun",
      lastName: "Reddy",
      aadhaar: "9988-7755-4433",
      gender: "Male",
      dob: "1980-10-04",
      income: 600000,
      scheme1: "Senior Citizen Savings Scheme",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "Post Office Savings Account",
      daysLeft: 140,
    },
    {
      id: 8,
      firstName: "Sita",
      lastName: "Rani",
      aadhaar: "1122-3344-5566",
      gender: "Female",
      dob: "1986-09-18",
      income: 400000,
      scheme1: "Post Office Recurring Deposit",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Kisan Vikas Patra",
      daysLeft: 210,
    },
    {
      id: 9,
      firstName: "Harish",
      lastName: "Thakur",
      aadhaar: "2233-4455-6677",
      gender: "Male",
      dob: "1975-01-10",
      income: 750000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "National Pension Scheme (NPS)",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 100,
    },
    {
      id: 10,
      firstName: "Meera",
      lastName: "Kaur",
      aadhaar: "3344-5566-7788",
      gender: "Female",
      dob: "1991-08-12",
      income: 420000,
      scheme1: "Public Provident Fund (PPF)",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Senior Citizen Savings Scheme",
      daysLeft: 190,
    },
    {
      id: 11,
      firstName: "Ajay",
      lastName: "Mehra",
      aadhaar: "6677-8899-1122",
      gender: "Male",
      dob: "1993-04-17",
      income: 390000,
      scheme1: "Post Office Savings Account",
      scheme2: "Kisan Vikas Patra",
      scheme3: "National Pension Scheme (NPS)",
      daysLeft: 250,
    },
    {
      id: 12,
      firstName: "Sunita",
      lastName: "Yadav",
      aadhaar: "4455-6677-8899",
      gender: "Female",
      dob: "1980-12-05",
      income: 330000,
      scheme1: "Post Office Recurring Deposit",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "National Savings Certificate (NSC)",
      daysLeft: 180,
    },
    {
      id: 13,
      firstName: "Vijay",
      lastName: "Nair",
      aadhaar: "9988-6677-3344",
      gender: "Male",
      dob: "1983-05-30",
      income: 600000,
      scheme1: "Senior Citizen Savings Scheme",
      scheme2: "Kisan Vikas Patra",
      scheme3: "Post Office Savings Account",
      daysLeft: 130,
    },
    {
      id: 14,
      firstName: "Rita",
      lastName: "Choudhury",
      aadhaar: "5566-7788-9900",
      gender: "Female",
      dob: "1990-07-13",
      income: 370000,
      scheme1: "National Pension Scheme (NPS)",
      scheme2: "Public Provident Fund (PPF)",
      scheme3: "Post Office Savings Account",
      daysLeft: 220,
    },
    {
      id: 15,
      firstName: "Rohit",
      lastName: "Joshi",
      aadhaar: "2233-4455-6677",
      gender: "Male",
      dob: "1994-01-18",
      income: 420000,
      scheme1: "Sukanya Samriddhi Yojana",
      scheme2: "National Savings Certificate (NSC)",
      scheme3: "Post Office Recurring Deposit",
      daysLeft: 160,
    },
  ];

  const resetFilters = () => {
    setFilter(""); // Reset the selected scheme filter
    setData(initialData); // Reset to initial data
  };

  const sortDataByDaysLeft = () => {
    const sortedData = [...data].sort((a, b) => a.daysLeft - b.daysLeft);
    setData(sortedData);
  };

  const filterByScheme = (scheme) => {
    // If the same scheme is clicked again, reset the filter
    if (filter === scheme) {
      setFilter(""); // Reset the selected filter
      setData(initialData); // Reset to original data
    } else {
      setFilter(scheme); // Set the new scheme as the filter
      const filteredData = initialData.filter(
        (item) =>
          item.scheme1 === scheme ||
          item.scheme2 === scheme ||
          item.scheme3 === scheme
      );
      setData(filteredData); // Update data with the filtered results
    }
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className={`flex-1 p-6 bg-background transition-all duration-300`}>
        <h1 className="text-2xl font-semibold mb-6">Users Data</h1>
        <table className="table-auto w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="border border-gray-300 px-4 py-2">First Name</th>
              <th className="border border-gray-300 px-4 py-2">Last Name</th>
              <th className="border border-gray-300 px-4 py-2">Aadhaar</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">DOB</th>
              <th className="border border-gray-300 px-4 py-2">Income</th>
              <th className="border border-gray-300 px-4 py-2">Scheme 1</th>
              <th className="border border-gray-300 px-4 py-2">Scheme 2</th>
              <th className="border border-gray-300 px-4 py-2">Scheme 3</th>
              <th className="border border-gray-300 px-4 py-2">Days Left</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center text-black">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.firstName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.aadhaar}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.gender}
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.dob}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.income}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.scheme1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.scheme2}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.scheme3}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.daysLeft}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sidebar (Filter) */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-gray-800 text-white h-full p-4 flex flex-col transition-all duration-300 overflow-hidden`}
      >
        {/* Arrow for expanding/collapsing the entire sidebar */}
        <div
          className="flex items-center cursor-pointer mb-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)} // Toggles the entire sidebar
        >
          <div
            className={`mr-2 transition-transform duration-300 ${
              isSidebarOpen ? "rotate-0" : "rotate-180"
            }`}
          >
            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </div>
          <span className="font-semibold">Filters</span>
        </div>

        {/* Filter Section */}
        {isSidebarOpen && (
          <div>
            {/* Sort by Days Left */}
            <div className="mb-4">
              <button
                className="px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 rounded"
                onClick={sortDataByDaysLeft}
              >
                Sort by Days Left
              </button>
            </div>

            {/* Filter by Scheme with Dropdown */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span className="font-semibold">Select Scheme</span>
                <div
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaChevronDown />
                </div>
              </div>

              {isDropdownOpen && (
                <div className="mt-2 space-y-2">
                  {/* Scheme 1 Filter */}
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() => filterByScheme("Sukanya Samriddhi Yojana")}
                  >
                    Sukanya Samriddhi Yojana
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("Senior Citizen Savings Scheme")
                    }
                  >
                    Senior Citizen Savings Scheme
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("Post Office Recurring Deposit")
                    }
                  >
                    Post Office Recurring Deposit
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("Post Office Savings Account")
                    }
                  >
                    Post Office Savings Account
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("Public Provident Fund (PPF)")
                    }
                  >
                    Public Provident Fund (PPF)
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("National Savings Certificate (NSC)")
                    }
                  >
                    National Savings Certificate (NSC)
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("Pradhan Mantri Jan Dhan Yojana")
                    }
                  >
                    Pradhan Mantri Jan Dhan Yojana
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() => filterByScheme("Atal Pension Yojana")}
                  >
                    Atal Pension Yojana
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme(
                        "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)"
                      )
                    }
                  >
                    MGNREGA
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() => filterByScheme("Make in India")}
                  >
                    Make in India
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("National Skill Development Mission")
                    }
                  >
                    National Skill Development Mission
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() => filterByScheme("Swachh Bharat Mission")}
                  >
                    Swachh Bharat Mission
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("Pradhan Mantri Kisan Samman Nidhi")
                    }
                  >
                    Pradhan Mantri Kisan Samman Nidhi
                  </button>
                  <button
                    className="block w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                    onClick={() =>
                      filterByScheme("National Health Protection Scheme")
                    }
                  >
                    National Health Protection Scheme
                  </button>
                  {/* Add more schemes here */}
                </div>
              )}
            </div>

            {/* Reset Button */}
            <button
              className="mt-4 px-4 py-2 w-full bg-red-500 hover:bg-red-600 rounded"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
