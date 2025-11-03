import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ExportPDF({ transactions }) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Finance Report", 14, 10);

    const tableColumn = ["Description", "Amount"];
    const tableRows = [];

    transactions.forEach((t) => {
      const row = [t.text, t.amount];
      tableRows.push(row);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("finance-report.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
    >
      Export PDF
    </button>
  );
}

export default ExportPDF;
