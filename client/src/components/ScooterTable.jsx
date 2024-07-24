import React, { useState } from "react";
import {
  FaFilter,
  FaTags,
  FaCircle,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa"; // Import icons

function ScooterTable() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Set this to the total number of pages you have

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="main p-4">
      <h1 className="text-2xl font-bold mb-4">Scooter Management</h1>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="bg-gray-300 text-gray-800 p-1 rounded flex items-center hover:bg-gray-400">
            <FaFilter className="mr-1" />
            Filters
          </button>
          <button className="bg-gray-300 text-gray-800 p-1 rounded flex items-center hover:bg-gray-400">
            <FaTags className="mr-1" />
            Model
          </button>
          <button className="bg-gray-300 text-gray-800 p-1 rounded flex items-center hover:bg-gray-400">
            <FaCircle className="mr-1" />
            Status
          </button>
        </div>
        <button className="bg-green-500 text-white p-1 rounded hover:bg-green-600 flex items-center gap-2">
          Add New Scooter
          <FaPlus className="mr-1" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">
                Scooter ID
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">
                Model
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">
                Owner
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 text-gray-700">66277431</td>
              <td className="px-4 py-2 text-gray-700">TMX-03</td>
              <td className="px-4 py-2 text-gray-700">Pásztor Kira</td>
              <td className="px-4 py-2 text-gray-700">On road</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 text-gray-700">11081197</td>
              <td className="px-4 py-2 text-gray-700">TMY-01</td>
              <td className="px-4 py-2 text-gray-700">László Barbara</td>
              <td className="px-4 py-2 text-gray-700">Offline</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400 disabled:bg-gray-200"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScooterTable;
