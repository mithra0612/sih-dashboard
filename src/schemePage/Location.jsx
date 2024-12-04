import React from "react";
import { Globe, MapPin, Home, Tag } from "react-feather"; // Import Feather icons

export default function Location() {
  return (
    <div className="w-[720px] border border-gray-300 rounded-lg shadow-md flex flex-col gap-8 p-8 bg-white">
      {/* State */}
      <div className="flex items-center space-x-4">
        <Globe className="h-8 w-8 text-purple-800" />
        <p className="text-xl text-purple-800 font-semibold">TamilNadu</p>
      </div>
      {/* District */}
      <div className="flex items-center space-x-4">
        <Home className="h-8 w-8 text-black" />
        <p className="text-xl text-black font-semibold">Erode</p>
      </div>
      {/* Sub-district */}
      <div className="flex items-center space-x-4">
        <MapPin className="h-8 w-8 text-orange-600" />
        <p className="text-xl text-orange-600 font-semibold">Sathyamangalam</p>
      </div>
      {/* Pincode */}
      <div className="flex items-center space-x-4">
        <Tag className="h-8 w-8 text-gray-600" />
        <p className="text-xl text-gray-600 font-semibold">638402</p>
      </div>
    </div>
  );
}
