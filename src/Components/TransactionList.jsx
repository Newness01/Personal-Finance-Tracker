import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="bg-white p-4 shadow rounded mt-6">
      <h3 className="text-lg font-semibold mb-3">Transactions</h3>
      <ul className="divide-y divide-gray-200">
        {transactions.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center py-2"
          >
            <span className={t.amount < 0 ? "text-red-600" : "text-green-600"}>
              {t.text} - ${t.amount}
            </span>
            <button
              onClick={() => deleteTransaction(t.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
