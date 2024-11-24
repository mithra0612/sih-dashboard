import React, { useState } from "react";
import { Sidebar } from "flowbite-react";

const Sider = ({ handleCallBack }) => {
  const districts = [
    "Tiruchirappalli",
    "Ariyalur",
    "Karur",
    "Chennai",
    "Nagappattinam",
    "Perambalur",
    "Pudukkottai",
    "Thanjavur",
    "Tiruvarur",
    "Mayiladuthurai",
    "Dharmapuri",
    "Coimbatore",
    "Erode",
    "Krishnagiri",
    "Namakkal",
    "The Nilgiris",
    "Salem",
    "Tiruppur",
    "Dindigul",
    "Kanyakumari",
    "Madurai",
    "Ramanathapuram",
    "Sivagangai",
    "Theni",
    "Thoothukudi",
    "Tirunelveli",
    "Virudhunagar",
    "Tenkasi",
    "Cuddalore",
    "Kanchipuram",
    "Chengalpattu",
    "Tiruvallur",
    "Tiruvannamalai",
    "Vellore",
    "Viluppuram",
    "Kallakurichi",
    "Ranipet",
    "Thirupattur",
  ];

  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleSelection = (district) => {
    setSelectedDistrict(district);
    handleCallBack(district); // Notify parent component of the selection
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="h-full bg-gradient-to-br from-teal-600 to-teal-200 text-white shadow-xl transition-all duration-500 ease-in-out w-64 overflow-hidden">
        <Sidebar aria-label="Sidebar with district selection">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6 text-center text-black drop-shadow-md">
                  Select a District
                </h2>
                {/* Scrollable list */}
                <div className="max-h-[calc(100vh-200px)] overflow-y-scroll space-y-4 hide-scrollbar">
                  {districts.map((district, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white bg-opacity-40 hover:bg-opacity-60 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <input
                        type="checkbox"
                        checked={selectedDistrict === district}
                        onChange={() => handleSelection(district)}
                        className="checkbox glow-hover glow-checked gradient-transition"
                      />

                      <label className="ml-4 text-lg font-medium text-black">
                        {district}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default Sider;