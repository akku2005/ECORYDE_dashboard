import React, { useState } from "react";
import { FaTimes, FaEdit, FaSave } from "react-icons/fa";

const ClientDetails = ({ host, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableHost, setEditableHost] = useState(host);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Add save functionality here
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditableHost({
      ...editableHost,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white backdrop-blur-md p-6 rounded-lg shadow-lg max-w-lg mx-auto relative flex">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FaTimes />
        </button>
        <div className="flex-shrink-0 mr-4">
          <img
            src={
              editableHost.profilePicture || "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="w-32 h-36 rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Host Details</h2>
          <div className="mb-4">
            <p>
              <strong>UserName:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="userName"
                  value={editableHost.userName}
                  onChange={handleChange}
                  className="ml-2 p-1 border rounded"
                />
              ) : (
                ` ${editableHost.userName}`
              )}
            </p>
            <p>
              <strong>Email:</strong>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editableHost.email}
                  onChange={handleChange}
                  className="ml-2 p-1 border rounded"
                />
              ) : (
                ` ${editableHost.email}`
              )}
            </p>
            <p>
              <strong>Phone Number:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={editableHost.phone}
                  onChange={handleChange}
                  className="ml-2 p-1 border rounded"
                />
              ) : (
                ` ${editableHost.phone}`
              )}
            </p>
            <p>
              <strong>Status:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="status"
                  value={editableHost.status}
                  onChange={handleChange}
                  className="ml-2 p-1 border rounded"
                />
              ) : (
                ` ${editableHost.status}`
              )}
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
              >
                <FaSave className="mr-2" /> Save Changes
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
