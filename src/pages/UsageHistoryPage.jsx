import React from "react";

// Usage History Page Component
function UsageHistoryPage({ usageHistory }) {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Transparent Usage History</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usageHistory.map((record) => (
            <div key={record.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={record.proof} alt="Usage Proof" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{record.recipient}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold">${record.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {new Date(record.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {usageHistory.length === 0 && (
          <p className="text-center py-8">No usage records available yet.</p>
        )}
      </div>
    </section>
  );
}
export default UsageHistoryPage;