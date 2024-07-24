import React, { useState } from "react";
import { FaFilter, FaTag, FaCheckCircle } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Popup from "../../pages/HostDetails/ClientDetails";

function HostDetails() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedHost, setSelectedHost] = useState(null);
  const itemsPerPage = 9;

  const hosts = [
    {
      userName: "Amit Sharma",
      email: "amit.sharma@example.in",
      phone: "+91 98765 43210",
      status: "Active",
    },
    {
      userName: "Priya Patel",
      email: "priya.patel@example.in",
      phone: "+91 87654 32109",
      status: "Pending",
    },
    {
      userName: "Ravi Kumar",
      email: "ravi.kumar@example.in",
      phone: "+91 76543 21098",
      status: "Inactive",
    },
    {
      userName: "Neha Gupta",
      email: "neha.gupta@example.in",
      phone: "+91 65432 10987",
      status: "Active",
    },
    {
      userName: "Rajesh Singh",
      email: "rajesh.singh@example.in",
      phone: "+91 54321 09876",
      status: "Pending",
    },
    {
      userName: "Sita Verma",
      email: "sita.verma@example.in",
      phone: "+91 43210 98765",
      status: "Inactive",
    },
    {
      userName: "Vikram Mehta",
      email: "vikram.mehta@example.in",
      phone: "+91 32109 87654",
      status: "Active",
    },
    {
      userName: "Pooja Reddy",
      email: "pooja.reddy@example.in",
      phone: "+91 21098 76543",
      status: "Pending",
    },
    {
      userName: "Arjun Joshi",
      email: "arjun.joshi@example.in",
      phone: "+91 10987 65432",
      status: "Inactive",
    },
    {
      userName: "Kavita Agarwal",
      email: "kavita.agarwal@example.in",
      phone: "+91 98765 43210",
      status: "Active",
    },
    {
      userName: "Suresh Babu",
      email: "suresh.babu@example.in",
      phone: "+91 87654 32109",
      status: "Pending",
    },
    {
      userName: "Anita Yadav",
      email: "anita.yadav@example.in",
      phone: "+91 76543 21098",
      status: "Inactive",
    },
    {
      userName: "Sunil Chauhan",
      email: "sunil.chauhan@example.in",
      phone: "+91 65432 10987",
      status: "Active",
    },
    {
      userName: "Rina Desai",
      email: "rina.desai@example.in",
      phone: "+91 54321 09876",
      status: "Pending",
    },
    {
      userName: "Raj Kumar",
      email: "raj.kumar@example.in",
      phone: "+91 43210 98765",
      status: "Inactive",
    },
    {
      userName: "Manisha Kapoor",
      email: "manisha.kapoor@example.in",
      phone: "+91 32109 87654",
      status: "Active",
    },
    {
      userName: "Dev Patel",
      email: "dev.patel@example.in",
      phone: "+91 21098 76543",
      status: "Pending",
    },
    {
      userName: "Sanjay Rao",
      email: "sanjay.rao@example.in",
      phone: "+91 10987 65432",
      status: "Inactive",
    },
    {
      userName: "Jaya Singh",
      email: "jaya.singh@example.in",
      phone: "+91 98765 43210",
      status: "Active",
    },
    {
      userName: "Asha Mehta",
      email: "asha.mehta@example.in",
      phone: "+91 87654 32109",
      status: "Pending",
    },
    {
      userName: "Deepak Sharma",
      email: "deepak.sharma@example.in",
      phone: "+91 76543 21098",
      status: "Inactive",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hosts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(hosts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleRowClick = (host) => {
    setSelectedHost(host);
  };

  const handleClosePopup = () => {
    setSelectedHost(null);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-270">
        <Header />
        <main className="p-4 mt-16 ml-270 overflow-y-auto main">
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

          <div className="mt-6">
            <table className="w-full text-left text-sm text-gray-200 bg-white border-gray-200 rounded-2xl shadow-md">
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="p-3 text-left text-gray-600">UserName</th>
                  <th className="p-3 text-left text-gray-600">Email</th>
                  <th className="p-3 text-left text-gray-600">Phone Number</th>
                  <th className="p-3 text-left text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((host, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleRowClick(host)}
                  >
                    <td className="p-3 text-gray-800">{host.userName}</td>
                    <td className="p-3 text-gray-800">{host.email}</td>
                    <td className="p-3 text-gray-800">{host.phone}</td>
                    <td
                      className={`p-3 mx-2 py-1 px-3 text-center rounded ${
                        host.status === "Active"
                          ? "bg-green-300 text-green-800"
                          : host.status === "Pending"
                          ? "bg-yellow-300 text-yellow-800"
                          : "bg-red-300 text-red-800"
                      }`}
                    >
                      {host.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500 text-sm">
              Showing {indexOfFirstItem + 1}-{indexOfLastItem} of {hosts.length}
            </p>
            <nav aria-label="Page navigation">
              <ul className="inline-flex -space-x-px">
                <li>
                  <a
                    href="#"
                    className="page-link relative block py-2 pl-3 pr-4 rounded-l-md border-gray-300 hover:bg-gray-100 text-gray-500 font-medium"
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
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

          {selectedHost && (
            <Popup host={selectedHost} onClose={handleClosePopup} />
          )}
        </main>
      </div>
    </div>
  );
}

export default HostDetails;
