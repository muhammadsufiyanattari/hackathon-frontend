// import { useState } from "react";
// import "./App.css";
// import { AddToCard } from "./components/AddToCard";
// import Header from "./components/Header";
// import MyNavbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import MyFooter from "./components/Footer";
// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
// import SiginUp from "./Pages/SiginUp";
// import Profile from "./Pages/Profile";
// import { Navigate } from "react-router-dom";

// import Search from "./Pages/Search";

// function App() {
//   const [count, setCount] = useState(0);
//   let logSing = false;
//   return (
//     <>
//       <div className="w-[100%]  2xl:center flex flex-col justify-center overflow-hidden   ">
//         <Header />
//         <MyNavbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/search" element={<Search />} />

//           <Route path="/SiginUp" element={<SiginUp />} />
//           {logSing ? (
//             <>
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/Login" element={<Navigate to="/" />} />
//             </>
//           ) : (
//             <>
//               <Route path="/Login" element={<Login />} />
//               <Route path="*" element={<Navigate to="/Login" />} />
//             </>
//           )}
//         </Routes>
//         <MyFooter />
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";

const MicrofinanceAppUI = () => {
  const [loanCategory, setLoanCategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const calculateLoan = () => {
    if (!loanCategory || !initialDeposit || !loanPeriod) {
      alert("Please fill all fields before calculating.");
      return;
    }

    const maxLoanAmount = {
      "Wedding Loans": 500000,
      "Home Construction Loans": 1000000,
      "Startup Loans": 1000000,
      "Education Loans": 0, // Assuming this is determined by the input later
    }[loanCategory];

    const loanAmount = maxLoanAmount - parseFloat(initialDeposit);
    const monthlyInstallment = loanAmount / (loanPeriod * 12);

    setCalculatedLoan({ loanAmount, monthlyInstallment });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Saylani Qarze Hasana Program</h1>
        <p className="text-gray-600">Empowering communities through interest-free loans</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Loan Categories */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Explore Loan Options</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Wedding Loans",
              "Home Construction Loans",
              "Startup Loans",
              "Education Loans",
            ].map((category) => (
              <div
                key={category}
                className={`p-4 bg-blue-50 rounded shadow hover:shadow-lg transition cursor-pointer ${
                  loanCategory === category ? "bg-blue-100" : ""
                }`}
                onClick={() => setLoanCategory(category)}
              >
                <h3 className="font-bold text-blue-700">{category}</h3>
                <p className="text-sm text-gray-600">
                  {category === "Wedding Loans"
                    ? "Support for events like Valima, Jahez, and more"
                    : category === "Home Construction Loans"
                    ? "Funds for structure or finishing"
                    : category === "Startup Loans"
                    ? "Kickstart your business dreams"
                    : "For university or child tuition fees"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Loan Calculator */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Estimate Your Loan</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              calculateLoan();
            }}
          >
            <div>
              <label className="block text-gray-700 mb-2">Initial Deposit (PKR)</label>
              <input
                type="number"
                className="w-full p-3 border rounded-md"
                placeholder="Enter deposit amount"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Loan Period (Years)</label>
              <input
                type="number"
                className="w-full p-3 border rounded-md"
                placeholder="Enter loan period"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Calculate
            </button>
          </form>

          {calculatedLoan && (
            <div className="mt-4 p-4 bg-green-100 rounded-md">
              <h3 className="font-bold text-green-700">Loan Details</h3>
              <p>Total Loan Amount: PKR {calculatedLoan.loanAmount.toLocaleString()}</p>
              <p>
                Monthly Installment: PKR {calculatedLoan.monthlyInstallment.toFixed(2).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Application Steps */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">How to Apply</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-semibold text-blue-700 mb-2">Step 1</h3>
            <p className="text-gray-600">Fill basic details like CNIC, email, and name.</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-semibold text-blue-700 mb-2">Step 2</h3>
            <p className="text-gray-600">Create your account through email verification.</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-semibold text-blue-700 mb-2">Step 3</h3>
            <p className="text-gray-600">Submit loan details and guarantor information.</p>
          </div>
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-semibold text-blue-700 mb-2">Step 4</h3>
            <p className="text-gray-600">Download your token slip with appointment details.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicrofinanceAppUI;