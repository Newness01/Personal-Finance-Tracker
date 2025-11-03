
import React, { useState, useEffect } from "react";
import Chart from "./Components/Chart";
import ExportPDF from "./Components/ExportPDF";
import Summary from "./Components/Summary";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";
import { CSVLink } from "react-csv";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        💰 Personal Finance Tracker
      </h1>

      <Summary transactions={transactions} />

      <div className="flex justify-between mb-4">
        <CSVLink
          data={transactions}
          filename="finance-report.csv"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Export CSV
        </CSVLink>
        <ExportPDF transactions={transactions} />
      </div>

      <TransactionForm addTransaction={addTransaction} />
      <Chart transactions={transactions} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;















// import React, { useState, useEffect } from "react";
// import TransactionForm from "./components/TransactionForm";
// import TransactionList from "./components/TransactionList";
// import Summary from "./components/Summary";
// import Chart from "./Components/Chart";
// import { CSVLink } from "react-csv";
// import ExportPDF from "./Components/ExportPDF";

// function App() {
//   const [transactions, setTransactions] = useState(() => {
//     const saved = localStorage.getItem("transactions");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//   }, [transactions]);

//   const addTransaction = (transaction) => {
//     setTransactions([transaction, ...transactions]);
//   };

//   const deleteTransaction = (id) => {
//     setTransactions(transactions.filter((t) => t.id !== id));
//   };

//   return (


    
//     <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>



//       <h1>💰 Personal Finance Tracker</h1>
//       <Summary transactions={transactions} />
//       <TransactionForm addTransaction={addTransaction} />
//       <Chart transactions={transactions} />
//       <TransactionList
//         transactions={transactions}
//         deleteTransaction={deleteTransaction}
//       />
//       <ExportPDF transactions={transactions} />
//       <CSVLink
//   data={transactions}
//   filename="finance-report.csv"
//   style={{
//     display: "inline-block",
//     margin: "10px 0",
//     padding: "8px 12px",
//     background: "#4CAF50",
//     color: "white",
//     borderRadius: "5px",
//     textDecoration: "none",
//   }}
// >
//   Export CSV
// </CSVLink>
//     </div>

    
//   );
// }

// export default App;
