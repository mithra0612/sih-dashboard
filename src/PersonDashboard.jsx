import React from "react";
import { motion } from "framer-motion";
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
    creditScore: 750,
    recommendedSchemes: [
      { name: "Public Provident Fund (PPF)", details: "Long-term tax-saving investment with guaranteed returns" },
      { name: "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)", details: "Pension scheme for small farmers" },
      { name: "Atal Pension Yojana (APY)", details: "Government-backed pension scheme for unorganized sector" }
    ],
    postOffice: "Pollachi Head Post Office",
    subdistrict: "Pollachi Taluk",
    district: "Coimbatore"
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-screen max-h-fit bg-[#f2f7fb] mt-[630px] overflow-hidden"
    >
      <motion.header
        variants={itemVariants}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 bg-white text-black shadow-md"
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </motion.button>
          <motion.form
            variants={itemVariants}
            className="flex w-full max-w-sm items-center space-x-2"
          >
            <input
              type="search"
              placeholder="Search here..."
              className="flex-1 h-9 rounded-lg border bg-background px-3 text-sm bg-white text-black shadow-sm"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="flex items-center px-3 bg-white text-black shadow-sm"
            >
              <Search className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </motion.header>

      <motion.div
        variants={itemVariants}
        className="p-6 h-fit mx-[60px] mt-[20px] max-w-[1400px]"
      >
        <motion.h2
          variants={itemVariants}
          className="font-semibold text-2xl text-gray-700"
        >
          Personal Information
        </motion.h2>
        <hr className="my-2 border-[1.5px] border-gray-200" />
        <div className="flex flex-row space-x-4">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-md rounded-lg w-[670px] h-[300px] my-2 p-8 text-justify h-full"
          >
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
            </p>          </motion.div>

          <div className="flex flex-col justify-between">
            {[
              { icon: Heart, label: "Marital Status", value: user.maritalStatus },
              { icon: Briefcase, label: "Occupation", value: user.occupation },
              { icon: MapPin, label: "Area Name", value: user.areaName }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 flex items-center h-full"
              >
                <item.icon className="text-blue-700 h-7 w-7 mr-4" />
                <p className="text-gray-600 text-lg">
                  <strong>{item.label}:</strong> {item.value}
                </p>
              </motion.div>
            ))}
          </div>

<div className="flex flex-col justify-between">
  {[
    {
      title: "Family Details",
      details: [
        {
          icon: Users,
          label: "Number of Children",
          value: user.noOfChildren,
        },
        {
          icon: UserPlus,
          label: "Number of Girl Children",
          value: user.noOfGirlChildrenUnder10,
        },
      ],
    },
    {
      icon: Compass,
      label: "Location",
      value: user.location,
    },
  ].map((section, index) =>
    section.details ? (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white shadow-md rounded-lg w-[335px] m-h-[200px] h-full my-2 p-4"
      >
        <h3 className="text-gray-700 font-semibold text-lg mb-2 pb-3">
          {section.title}
        </h3>
        <div className="flex flex-col space-y-4">
          {section.details.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2"
            >
              <detail.icon className="text-blue-700 h-7 w-7" />
              <p className="text-gray-600 text-lg">
                <strong>{detail.label}:</strong> {detail.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    ) : (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] h-full my-2 p-4 flex items-center"
      >
        <section.icon className="text-blue-700 h-7 w-7" />
        <p className="text-gray-600 text-lg items-center break-all">
          <strong className="ml-2">{section.label}:</strong>
          <div className="ml-2">{section.value}</div>
        </p>
      </motion.div>
    )
  )}
</div>
        </div>
      </motion.div>
<div className="p-6 h-fit m-[60px] mt-0 max-w-[1400px]">
  {/* Financial Information Section */}
  <motion.h2
    variants={itemVariants}
    className="font-semibold text-2xl text-gray-700"
  >
    Financial Information
  </motion.h2>
  <motion.hr
    variants={itemVariants}
    className="my-2 border-[1.5px] border-gray-300"
  />
 
  <div className="space-x-4">
    <div className="flex flex-row space-x-4">
      <div className="flex flex-col">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] my-2 p-4 flex items-center"
        >
          <div className="flex justify-center items-center space-x-2">
            <IndianRupee className="text-blue-700 h-7 w-7" />
            <p className="text-gray-600 text-lg">
              <strong>Monthly Income: </strong> {user.monthlyIncome}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] h-full my-2 flex justify-center items-center"
        >
          <CreditScore creditScore={user.creditScore} />
        </motion.div>
      </div>

      <div className="flex flex-col">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] my-2 p-4 flex items-center"
        >
          <Target className="h-7 w-7 text-blue-700 mr-3" />
          <div className="text-lg text-gray-700">
            <strong>Financial Goal:</strong> {user.financialGoal}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] h-full my-2 p-4 flex items-center"
        >
          <div className="flex justify-center items-center space-x-2">
            <Pickaxe className="text-blue-700 h-7 w-7" />
            <p className="text-gray-600 text-lg">
              <strong>Own Land for Agriculture:</strong> {user.ownLandForAgriculture}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white shadow-md rounded-lg w-[317px] min-h-[80px] my-2 h-full"
        ></motion.div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row space-x-4">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 flex items-center"
          >
            <Banknote className="h-7 w-7 text-blue-700 mr-3" />
            <div className="text-lg text-gray-600">
              <strong>Taxpayer:</strong> {user.taxPayer}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] h-full my-2 p-4 flex items-center"
            >
              <Smartphone className="text-blue-700 h-7 w-7 " />
              <p className="text-gray-600 text-lg p-2">
                <strong>Digital Usage:</strong> {user.digitalUsage}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-row space-x-4"
        >
          <motion.div

  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4"
>
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
      <strong className="text-gray-600">Investment Duration:</strong>
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
</motion.div>

<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4"
>
  <h2 className="font-semibold text-xl text-gray-700 mb-2 pb-2">
    Investment Strategy
  </h2>

  <div className="flex flex-col space-y-2">
    <div className="bg-gray-100 p-3 rounded-lg">
      <p className="text-md text-gray-600 leading-1 ">
        Based on your risk appetite, we recommend investments with moderate
        returns. For a {user.duration} investment duration, consider fixed
        deposits or mutual funds.
      </p>
    </div>
  </div>
</motion.div>

        </motion.div>
      </div>
    </div>
  </div>
</div>

    {/* Loan and Other Data */}
<motion.div
  variants={itemVariants}
  className="p-6 h-fit mx-[60px] max-w-[1400px]"
>
  <div className="flex flex-row space-x-4 justify-between mt-[-50px]">
    {/* Loan Details */}
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col"
    >
      <h2 className="font-semibold text-2xl text-gray-700">Loan Details</h2>
      <hr className="my-2 border-[1.5px] border-gray-200" />
      <div className="bg-white shadow-md rounded-lg w-[335px] min-h-[80px] my-2 p-4 h-full">
        <div className="space-y-2">
          <div className="flex justify-between py-2">
            <strong className="text-gray-600">Already in Loan:</strong>
            <span className="text-gray-600">{user.alreadyInLoan}</span>
          </div>
          <div className="flex justify-between pb-2">
            <strong className="text-gray-600">Need New Loan:</strong>
            <span className="text-gray-600">
              {user.needNewLoan === "Yes" ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between pb-2">
            <strong className="text-gray-600">Need Education Loan:</strong>
            <span className="text-gray-600">
              {user.needEducationLoan === "Yes" ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Post Office Details */}
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col"
    >
      <h2 className="font-semibold text-2xl text-gray-700">Post Office Details</h2>
      <hr className="my-2 border-[1.5px] border-gray-200" />
      <div className="bg-white shadow-md rounded-lg w-[355px] min-h-[80px] h-full my-2 p-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <strong className="text-gray-600">Post Office:</strong>
            <span className="text-gray-600">{user.postOffice}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-gray-600">Subdistrict:</strong>
            <span className="text-gray-600">{user.subdistrict}</span>
          </div>
          <div className="flex justify-between">
            <strong className="text-gray-600">District:</strong>
            <span className="text-gray-600">{user.district}</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Scheme Recommendations */}
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col"
    >
      <h2 className="font-semibold text-2xl text-gray-700">Scheme Recommendation</h2>
      <hr className="my-2 border-[1.5px] border-gray-200" />
      <div className="bg-white shadow-md rounded-lg w-[630px] min-h-[80px] h-full my-2 p-4">
        <div className="space-y-1">
          {user.recommendedSchemes.map((scheme, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-between items-center"
            >
              <span className="text-gray-700 font-medium pb-2">{scheme.name}</span>
              <button className="text-blue-700 hover:underline bg-white">
                Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

    </motion.div>
  );
}
