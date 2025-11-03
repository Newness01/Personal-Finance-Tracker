import React from "react";

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expense;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white shadow p-4 rounded text-center">
        <h4 className="font-semibold">Balance</h4>
        <p className="text-xl font-bold text-indigo-600">${balance}</p>
      </div>
      <div className="bg-white shadow p-4 rounded text-center">
        <h4 className="font-semibold">Income</h4>
        <p className="text-xl font-bold text-green-600">${income}</p>
      </div>
      <div className="bg-white shadow p-4 rounded text-center">
        <h4 className="font-semibold">Expense</h4>
        <p className="text-xl font-bold text-red-600">${Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default Summary;
