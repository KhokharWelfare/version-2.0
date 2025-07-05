import React from "react";

// My Donations Page Component
function MyDonationsPage({ donations }) {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">My Donations</h2>
        
        {donations.length === 0 ? (
          <p className="text-center py-8">You haven't made any donations yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Proof</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id} className="border-t dark:border-gray-700">
                    <td className="px-4 py-2 text-center">{new Date(donation.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2 text-center">${donation.amount.toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">
                      <img src={donation.proof} alt="Donation Proof" className="h-16 mx-auto object-cover" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
export default MyDonationsPage;