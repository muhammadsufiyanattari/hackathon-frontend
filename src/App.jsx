
// // import React, { useState } from "react";

// // const LoanCalculator = () => {
// //   const [category, setCategory] = useState("");
// //   const [subCategory, setSubCategory] = useState("");
// //   const [deposit, setDeposit] = useState(0);
// //   const [loanPeriod, setLoanPeriod] = useState(0);
// //   const [loanAmount, setLoanAmount] = useState(0);

// //   const handleCalculate = () => {
// //     // Example calculation logic
// //     let maxLoan = 0;
// //     if (category === "Wedding") maxLoan = 500000;
// //     else if (category === "Home") maxLoan = 1000000;
// //     else if (category === "Business") maxLoan = 1000000;
// //     else if (category === "Education") maxLoan = 100000;

// //     setLoanAmount(maxLoan - deposit);
// //   };

// //   return (
    
// //     <div className="bg-gray-100 min-h-screen p-6">
// //       <h2 className="text-2xl font-bold mb-4">Loan Calculator</h2>
// //       <div className="mb-4">
// //         <label className="block text-gray-700 mb-2">Select Category</label>
// //         <select
// //           className="w-full p-3 border rounded-md"
// //           onChange={(e) => setCategory(e.target.value)}
// //         >
// //           <option value="">Select Category</option>
// //           <option value="Wedding">Wedding Loans</option>
// //           <option value="Home">Home Construction Loans</option>
// //           <option value="Business">Business Startup Loans</option>
// //           <option value="Education">Education Loans</option>
// //         </select>
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-gray-700 mb-2">Select Subcategory</label>
// //         <select
// //           className="w-full p-3 border rounded-md"
// //           onChange={(e) => setSubCategory(e.target.value)}
// //         >
// //           <option value="">Select Subcategory</option>
// //           {/* Subcategories logic */}
// //         </select>
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-gray-700 mb-2">Initial Deposit</label>
// //         <input
// //           type="number"
// //           className="w-full p-3 border rounded-md"
// //           placeholder="Enter deposit amount"
// //           value={deposit}
// //           onChange={(e) => setDeposit(e.target.value)}
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block text-gray-700 mb-2">Loan Period (in years)</label>
// //         <input
// //           type="number"
// //           className="w-full p-3 border rounded-md"
// //           placeholder="Enter loan period"
// //           value={loanPeriod}
// //           onChange={(e) => setLoanPeriod(e.target.value)}
// //         />
// //       </div>

// //       <button
// //         className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
// //         onClick={handleCalculate}
// //       >
// //         Calculate
// //       </button>

// //       <div className="mt-4 p-4 bg-green-100 rounded-md">
// //         <h4 className="font-bold text-green-700">Estimated Loan Amount: PKR {loanAmount}</h4>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoanCalculator;
// import React, { useState } from "react";

// const LoanCalculator = () => {
//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [deposit, setDeposit] = useState(0);
//   const [loanPeriod, setLoanPeriod] = useState(0);
//   const [loanAmount, setLoanAmount] = useState(0);

//   const handleCalculate = () => {
//     let maxLoan = 0;
//     if (category === "Wedding") maxLoan = 500000;
//     else if (category === "Home") maxLoan = 1000000;
//     else if (category === "Business") maxLoan = 1000000;
//     else if (category === "Education") maxLoan = 100000;

//     setLoanAmount(maxLoan - deposit);
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex justify-center items-center p-6">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Saylani</h2>
//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Select Loan Category</label>
//           <select
//             className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setCategory(e.target.value)}
//             value={category}
//           >
//             <option value="">Select Category</option>
//             <option value="Wedding">Wedding Loans</option>
//             <option value="Home">Home Construction Loans</option>
//             <option value="Business">Business Startup Loans</option>
//             <option value="Education">Education Loans</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Select Subcategory</label>
//           <select
//             className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setSubCategory(e.target.value)}
//             value={subCategory}
//           >
//             <option value="">Select Subcategory</option>
//             {/* Add logic for subcategories based on selected category */}
//           </select>
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Initial Deposit</label>
//           <input
//             type="number"
//             className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter deposit amount"
//             value={deposit}
//             onChange={(e) => setDeposit(e.target.value)}
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 font-medium mb-2">Loan Period (in years)</label>
//           <input
//             type="number"
//             className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter loan period"
//             value={loanPeriod}
//             onChange={(e) => setLoanPeriod(e.target.value)}
//           />
//         </div>

//         <button
//           className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition-all ease-in-out duration-200"
//           onClick={handleCalculate}
//         >
//           Calculate
//         </button>

//         {loanAmount > 0 && (
//           <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-md">
//             <h4 className="font-medium text-green-700">Estimated Loan Amount:</h4>
//             <p className="text-lg font-semibold text-gray-800">PKR {loanAmount}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoanCalculator;
import React, { useState } from "react";

const LoanCalculator = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [deposit, setDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);

  // Mapping categories to subcategories
  const categoryToSubcategories = {
    Wedding: ["Bride's Wedding", "Groom's Wedding"],
    Home: ["Construction", "Renovation"],
    Business: ["Startup", "Expansion"],
    Education: ["Undergraduate", "Postgraduate"]
  };

  const handleCalculate = () => {
    let maxLoan = 0;
    if (category === "Wedding") maxLoan = 500000;
    else if (category === "Home") maxLoan = 1000000;
    else if (category === "Business") maxLoan = 1000000;
    else if (category === "Education") maxLoan = 100000;

    setLoanAmount(maxLoan - deposit);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Saylani</h2>

        {/* Category Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Select Loan Category</label>
          <select
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setCategory(e.target.value);
              setSubCategory(""); // Reset subcategory when category changes
            }}
            value={category}
          >
            <option value="">Select Category</option>
            <option value="Wedding">Wedding Loans</option>
            <option value="Home">Home Construction Loans</option>
            <option value="Business">Business Startup Loans</option>
            <option value="Education">Education Loans</option>
          </select>
        </div>

        {/* Subcategory Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Select Subcategory</label>
          <select
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            disabled={!category} // Disable subcategory dropdown if no category is selected
          >
            <option value="">Select Subcategory</option>
            {categoryToSubcategories[category]?.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Initial Deposit */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Initial Deposit</label>
          <input
            type="number"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter deposit amount"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>

        {/* Loan Period */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Loan Period (in years)</label>
          <input
            type="number"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter loan period"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          />
        </div>

        {/* Calculate Button */}
        <button
          className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-700 transition-all ease-in-out duration-200"
          onClick={handleCalculate}
        >
          Calculate
        </button>

        {/* Loan Amount Display */}
        {loanAmount > 0 && (
          <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-md">
            <h4 className="font-medium text-green-700">Estimated Loan Amount:</h4>
            <p className="text-lg font-semibold text-gray-800">PKR {loanAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;

