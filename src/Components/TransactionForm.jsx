import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
      <h3 className="text-lg font-semibold mb-3">Add Transaction</h3>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
        />
        <input
          type="number"
          placeholder="Amount (+income / -expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
}

export default TransactionForm;
