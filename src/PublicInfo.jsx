import React from "react";
import { LayoutGrid, Search } from "lucide-react";

export const data = [
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
    lastName: "Reddy",
    aadhaar: "5678-1234-9012",
    gender: "Male",
    dob: "1975-11-09",
    income: 600000,
    scheme1: "Kisan Vikas Patra",
    scheme2: "Senior Citizen Savings Scheme",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 365,
  },
  {
    id: 4,
    firstName: "Meera",
    lastName: "Nair",
    aadhaar: "4321-5678-9876",
    gender: "Female",
    dob: "1999-07-05",
    income: 250000,
    scheme1: "Sukanya Samriddhi Yojana",
    scheme2: "Post Office Time Deposit",
    scheme3: "Public Provident Fund (PPF)",
    daysLeft: 90,
  },
  {
    id: 5,
    firstName: "Ravi",
    lastName: "Singh",
    aadhaar: "2345-6789-1234",
    gender: "Male",
    dob: "1980-01-20",
    income: 500000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Kisan Vikas Patra",
    daysLeft: 150,
  },
  {
    id: 6,
    firstName: "Neha",
    lastName: "Patel",
    aadhaar: "1234-4321-5678",
    gender: "Female",
    dob: "1991-05-12",
    income: 350000,
    scheme1: "Sukanya Samriddhi Yojana",
    scheme2: "Senior Citizen Savings Scheme",
    scheme3: "Post Office Time Deposit",
    daysLeft: 300,
  },
  {
    id: 7,
    firstName: "Arun",
    lastName: "Joshi",
    aadhaar: "7890-1234-5678",
    gender: "Male",
    dob: "1989-10-14",
    income: 400000,
    scheme1: "Post Office Recurring Deposit",
    scheme2: "Public Provident Fund (PPF)",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 220,
  },
  {
    id: 8,
    firstName: "Sanya",
    lastName: "Gupta",
    aadhaar: "8765-4321-9087",
    gender: "Female",
    dob: "1995-02-22",
    income: 280000,
    scheme1: "Post Office Savings Account",
    scheme2: "Public Provident Fund (PPF)",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 450,
  },
  {
    id: 9,
    firstName: "Nitin",
    lastName: "Verma",
    aadhaar: "2345-6789-8765",
    gender: "Male",
    dob: "1978-09-05",
    income: 650000,
    scheme1: "Kisan Vikas Patra",
    scheme2: "Post Office Recurring Deposit",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 110,
  },
  {
    id: 10,
    firstName: "Kavita",
    lastName: "Yadav",
    aadhaar: "6789-4321-1234",
    gender: "Female",
    dob: "1988-06-10",
    income: 320000,
    scheme1: "Sukanya Samriddhi Yojana",
    scheme2: "Senior Citizen Savings Scheme",
    scheme3: "Post Office Time Deposit",
    daysLeft: 180,
  },
  {
    id: 11,
    firstName: "Harsh",
    lastName: "Patel",
    aadhaar: "1923-1234-6789",
    gender: "Male",
    dob: "1990-03-18",
    income: 420000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "Kisan Vikas Patra",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 500,
  },
  {
    id: 12,
    firstName: "Shruti",
    lastName: "Sharma",
    aadhaar: "9812-3456-7890",
    gender: "Female",
    dob: "1987-11-01",
    income: 275000,
    scheme1: "Senior Citizen Savings Scheme",
    scheme2: "Post Office Recurring Deposit",
    scheme3: "Sukanya Samriddhi Yojana",
    daysLeft: 90,
  },
  {
    id: 13,
    firstName: "Manish",
    lastName: "Singh",
    aadhaar: "4321-5678-1234",
    gender: "Male",
    dob: "1972-08-25",
    income: 580000,
    scheme1: "Post Office Time Deposit",
    scheme2: "Kisan Vikas Patra",
    scheme3: "Senior Citizen Savings Scheme",
    daysLeft: 60,
  },
  {
    id: 14,
    firstName: "Rina",
    lastName: "Das",
    aadhaar: "5678-2345-9876",
    gender: "Female",
    dob: "1995-01-17",
    income: 350000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "Post Office Recurring Deposit",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 500,
  },
  {
    id: 15,
    firstName: "Vinay",
    lastName: "Rathore",
    aadhaar: "8976-1234-5678",
    gender: "Male",
    dob: "1980-12-02",
    income: 450000,
    scheme1: "Kisan Vikas Patra",
    scheme2: "Senior Citizen Savings Scheme",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 120,
  },
  {
    id: 16,
    firstName: "Surbhi",
    lastName: "Jain",
    aadhaar: "4321-9876-1234",
    gender: "Female",
    dob: "1986-07-25",
    income: 290000,
    scheme1: "Post Office Savings Account",
    scheme2: "Sukanya Samriddhi Yojana",
    scheme3: "Public Provident Fund (PPF)",
    daysLeft: 150,
  },
  {
    id: 17,
    firstName: "Amit",
    lastName: "Kumar",
    aadhaar: "1357-2468-9753",
    gender: "Male",
    dob: "1985-04-18",
    income: 600000,
    scheme1: "Post Office Recurring Deposit",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Senior Citizen Savings Scheme",
    daysLeft: 220,
  },
  {
    id: 18,
    firstName: "Tanya",
    lastName: "Chaudhary",
    aadhaar: "7689-3456-1287",
    gender: "Female",
    dob: "1993-10-28",
    income: 310000,
    scheme1: "Sukanya Samriddhi Yojana",
    scheme2: "Post Office Savings Account",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 200,
  },
  {
    id: 19,
    firstName: "Abhinav",
    lastName: "Mittal",
    aadhaar: "9087-6543-2101",
    gender: "Male",
    dob: "1990-08-03",
    income: 520000,
    scheme1: "Kisan Vikas Patra",
    scheme2: "Senior Citizen Savings Scheme",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 350,
  },
  {
    id: 20,
    firstName: "Nikita",
    lastName: "Verma",
    aadhaar: "4567-1234-9876",
    gender: "Female",
    dob: "1994-11-11",
    income: 275000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "Post Office Time Deposit",
    scheme3: "Kisan Vikas Patra",
    daysLeft: 120,
  },
  {
    id: 21,
    firstName: "Karan",
    lastName: "Rai",
    aadhaar: "9087-1234-5678",
    gender: "Male",
    dob: "1987-02-10",
    income: 400000,
    scheme1: "National Savings Certificate (NSC)",
    scheme2: "Post Office Recurring Deposit",
    scheme3: "Public Provident Fund (PPF)",
    daysLeft: 330,
  },
  {
    id: 22,
    firstName: "Priya",
    lastName: "Bansal",
    aadhaar: "3478-6798-1283",
    gender: "Female",
    dob: "1992-07-18",
    income: 320000,
    scheme1: "Post Office Savings Account",
    scheme2: "Sukanya Samriddhi Yojana",
    scheme3: "Kisan Vikas Patra",
    daysLeft: 290,
  },
  {
    id: 23,
    firstName: "Chirag",
    lastName: "Sharma",
    aadhaar: "1234-5678-6789",
    gender: "Male",
    dob: "1984-05-25",
    income: 700000,
    scheme1: "Post Office Recurring Deposit",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Senior Citizen Savings Scheme",
    daysLeft: 450,
  },
  {
    id: 24,
    firstName: "Aisha",
    lastName: "Siddiqui",
    aadhaar: "4321-8765-3456",
    gender: "Female",
    dob: "1988-12-16",
    income: 400000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "Kisan Vikas Patra",
    scheme3: "Post Office Time Deposit",
    daysLeft: 80,
  },
  {
    id: 25,
    firstName: "Sandeep",
    lastName: "Singh",
    aadhaar: "9876-5432-1123",
    gender: "Male",
    dob: "1996-04-02",
    income: 450000,
    scheme1: "Post Office Savings Account",
    scheme2: "Public Provident Fund (PPF)",
    scheme3: "Senior Citizen Savings Scheme",
    daysLeft: 120,
  },
  {
    id: 26,
    firstName: "Pooja",
    lastName: "Kumari",
    aadhaar: "5432-6789-0123",
    gender: "Female",
    dob: "1990-01-22",
    income: 500000,
    scheme1: "Sukanya Samriddhi Yojana",
    scheme2: "Post Office Recurring Deposit",
    scheme3: "Public Provident Fund (PPF)",
    daysLeft: 200,
  },
  {
    id: 27,
    firstName: "Amit",
    lastName: "Garg",
    aadhaar: "3467-8910-5432",
    gender: "Male",
    dob: "1989-09-12",
    income: 600000,
    scheme1: "Kisan Vikas Patra",
    scheme2: "Post Office Savings Account",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 450,
  },
  {
    id: 28,
    firstName: "Isha",
    lastName: "Khanna",
    aadhaar: "2093-7284-8901",
    gender: "Female",
    dob: "1984-04-30",
    income: 275000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Senior Citizen Savings Scheme",
    daysLeft: 350,
  },
  {
    id: 29,
    firstName: "Rohit",
    lastName: "Mehta",
    aadhaar: "5678-1234-6789",
    gender: "Male",
    dob: "1982-06-19",
    income: 700000,
    scheme1: "Senior Citizen Savings Scheme",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Post Office Recurring Deposit",
    daysLeft: 120,
  },
  {
    id: 30,
    firstName: "Shubhi",
    lastName: "Verma",
    aadhaar: "5678-9012-1234",
    gender: "Female",
    dob: "1987-02-14",
    income: 320000,
    scheme1: "Sukanya Samriddhi Yojana",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Public Provident Fund (PPF)",
    daysLeft: 150,
  },
  {
    id: 31,
    firstName: "Vishal",
    lastName: "Sharma",
    aadhaar: "1234-8765-4321",
    gender: "Male",
    dob: "1990-11-07",
    income: 550000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "Kisan Vikas Patra",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 130,
  },
  {
    id: 32,
    firstName: "Sneha",
    lastName: "Desai",
    aadhaar: "9876-4321-7654",
    gender: "Female",
    dob: "1993-07-05",
    income: 400000,
    scheme1: "Public Provident Fund (PPF)",
    scheme2: "Post Office Savings Account",
    scheme3: "Sukanya Samriddhi Yojana",
    daysLeft: 290,
  },
  {
    id: 33,
    firstName: "Sandeep",
    lastName: "Gupta",
    aadhaar: "2345-6789-3421",
    gender: "Male",
    dob: "1995-12-21",
    income: 380000,
    scheme1: "Senior Citizen Savings Scheme",
    scheme2: "National Savings Certificate (NSC)",
    scheme3: "Public Provident Fund (PPF)",
    daysLeft: 180,
  },
  {
    id: 34,
    firstName: "Simran",
    lastName: "Singh",
    aadhaar: "1234-5678-2468",
    gender: "Female",
    dob: "1987-01-30",
    income: 400000,
    scheme1: "Post Office Recurring Deposit",
    scheme2: "Senior Citizen Savings Scheme",
    scheme3: "Kisan Vikas Patra",
    daysLeft: 250,
  },
  {
    id: 35,
    firstName: "Manoj",
    lastName: "Soni",
    aadhaar: "6789-4321-5643",
    gender: "Male",
    dob: "1983-08-18",
    income: 600000,
    scheme1: "Post Office Recurring Deposit",
    scheme2: "Kisan Vikas Patra",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 400,
  },
  {
    id: 36,
    firstName: "Rajeev",
    lastName: "Saxena",
    aadhaar: "4567-8901-2345",
    gender: "Male",
    dob: "1980-04-16",
    income: 520000,
    scheme1: "Post Office Savings Account",
    scheme2: "Public Provident Fund (PPF)",
    scheme3: "National Savings Certificate (NSC)",
    daysLeft: 310,
  },
  {
    id: 37,
    firstName: "Ritika",
    lastName: "Agarwal",
    aadhaar: "1234-5678-8901",
    gender: "Female",
    dob: "1995-06-09",
    income: 330000,
    scheme1: "Kisan Vikas Patra",
    scheme2: "Public Provident Fund (PPF)",
    scheme3: "Post Office Recurring Deposit",
    daysLeft: 450,
  },
  {
    id: 38,
    firstName: "Anil",
    lastName: "Kumar",
    aadhaar: "9087-6543-5678",
    gender: "Male",
    dob: "1976-09-05",
    income: 600000,
    scheme1: "National Savings Certificate (NSC)",
    scheme2: "Post Office Time Deposit",
    scheme3: "Kisan Vikas Patra",
    daysLeft: 250,
  },
];


const PublicInfo = () => {
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


      <div className="p-4">
      <h2 className = "text-gray-800 text-2xl font-semibold p-4">Details</h2>
      <div className="max-h-[500px] overflow-y-auto">
          <table className="min-w-full h-96 table-auto text-black">
          <thead className="sticky top-0 bg-white">
              <tr>
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Aadhaar</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">DOB</th>
                <th className="px-4 py-2">Income</th>
                <th className="px-4 py-2">Scheme 1</th>
                <th className="px-4 py-2">Scheme 2</th>
                <th className="px-4 py-2">Scheme 3</th>
                <th className="px-4 py-2">Days Left</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-blue-100 hover:text-blue-800">
                <td className="px-4 py-2">{row.firstName}</td>
                  <td className="px-4 py-2">{row.lastName}</td>
                  <td className="px-4 py-2">{row.aadhaar}</td>
                  <td className="px-4 py-2">{row.gender}</td>
                  <td className="px-4 py-2">{row.dob}</td>
                  <td className="px-4 py-2">{row.income}</td>
                  <td className="px-4 py-2">{row.scheme1}</td>
                  <td className="px-4 py-2">{row.scheme2}</td>
                  <td className="px-4 py-2">{row.scheme3}</td>
                  <td className="px-4 py-2">{row.daysLeft}</td>
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
