import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [witnessCnic, setWitnessCnic] = useState("");
  const [showSlip, setShowSlip] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSlip(true); // Show the generated slip after form submission
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Registration Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* CNIC Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">CNIC Number</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your CNIC number"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Witness CNIC Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Witness CNIC Number</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter witness CNIC number"
              value={witnessCnic}
              onChange={(e) => setWitnessCnic(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition-all ease-in-out duration-200"
          >
            Submit
          </button>
        </form>

        {/* Generated Slip */}
        {showSlip && (
          <div className="mt-8 p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-md">
            <h4 className="font-medium text-yellow-700">Registration Slip</h4>
            <p className="text-lg font-semibold text-gray-800">Name: {name}</p>
            <p className="text-lg font-semibold text-gray-800">Email: {email}</p>
            <p className="text-lg font-semibold text-gray-800">CNIC: {cnic}</p>
            <p className="text-lg font-semibold text-gray-800">Address: {address}</p>
            <p className="text-lg font-semibold text-gray-800">Witness CNIC: {witnessCnic}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
