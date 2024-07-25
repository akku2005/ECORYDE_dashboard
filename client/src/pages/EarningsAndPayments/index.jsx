import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import WidgetItem from "../../pages/EarningsAndPayments/WidgetItem";
import revenueImage1 from "../../assets/revenue.png";
import { FaFilter, FaTag, FaCheckCircle } from "react-icons/fa";

const EarningsAndPayments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const hosts = [
    {
      username: "John Doe",
      amount: "₹5000",
      date: "2024-07-25",
      status: "Completed",
    },
    {
      username: "Jane Smith",
      amount: "₹3000",
      date: "2024-07-24",
      status: "Pending",
    },
    {
      username: "Michael Johnson",
      amount: "₹7000",
      date: "2024-07-23",
      status: "Failed",
    },
    // Add more sample data as needed
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hosts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(hosts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-270">
        <Header />
        <main className="main p-4">
          <h1 className="text-2xl font-bold mb-4">Payments and Earnings</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <WidgetItem
              heading="Total Sales"
              value="89,000"
              percent="4.3"
              trend="down"
              image={revenueImage1}
              amount={true}
            />
            <WidgetItem
              heading="Total Order"
              value="10,293"
              percent="1.3"
              trend="up"
              image={revenueImage1}
              amount={false}
            />
            <WidgetItem
              heading="Total Pending"
              value="2,040"
              percent="1.8"
              trend="up"
              image={revenueImage1}
              amount={false}
            />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Payment History</h2>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-4">Host Management</h1>
                <div className="flex gap-2">
                  <button className="flex items-center bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100">
                    <FaFilter className="mr-2" /> Filter
                  </button>
                  <button className="flex items-center bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100">
                    <FaTag className="mr-2" /> Status
                  </button>
                </div>
              </div>
              <button className="flex items-center bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600">
                <FaCheckCircle className="mr-2" /> Verify New Host
              </button>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="w-full bg-gray-100 text-left">
                  <th className="py-2 px-4 border-b">Username</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((host, index) => (
                  <tr className="hover:bg-gray-50" key={index}>
                    <td className="py-2 px-4 border-b">{host.username}</td>
                    <td className="py-2 px-4 border-b">{host.amount}</td>
                    <td className="py-2 px-4 border-b">{host.date}</td>
                    <td className="py-2 px-4 border-b">
                      <span
                        className={`text-${
                          host.status === "Completed"
                            ? "green"
                            : host.status === "Pending"
                            ? "yellow"
                            : "red"
                        }-600`}
                      >
                        {host.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500 text-sm">
                Showing {indexOfFirstItem + 1}-
                {indexOfLastItem > hosts.length
                  ? hosts.length
                  : indexOfLastItem}{" "}
                of {hosts.length}
              </p>
              <nav aria-label="Page navigation">
                <ul className="inline-flex -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="page-link relative block py-2 pl-3 pr-4 rounded-l-md border-gray-300 hover:bg-gray-100 text-gray-500 font-medium"
                      onClick={() =>
                        currentPage > 1 && paginate(currentPage - 1)
                      }
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {pageNumbers.map((number) => (
                    <li key={number}>
                      <a
                        href="#"
                        className={`page-link relative block py-2 pl-3 pr-4 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 font-medium ${
                          currentPage === number
                            ? "bg-gray-100 text-gray-700"
                            : ""
                        }`}
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      className="page-link relative block py-2 pl-3 pr-4 rounded-l-md border-gray-300 hover:bg-gray-100 text-gray-500 font-medium"
                      onClick={() =>
                        currentPage < pageNumbers.length &&
                        paginate(currentPage + 1)
                      }
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EarningsAndPayments;
