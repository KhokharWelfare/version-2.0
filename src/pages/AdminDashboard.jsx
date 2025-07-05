import React from "react";

// Admin Dashboard Component
function AdminDashboard({ users, donations, usageHistory, addUsageRecord }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipient = e.target.recipient.value;
    const amount = parseFloat(e.target.amount.value);
    const proofFile = e.target.proof.files[0];
    if (recipient && amount > 0 && proofFile) {
      await addUsageRecord(recipient, amount, proofFile);
      e.target.reset();
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">{users.length || 0}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Donations</h3>
            <p className="text-3xl font-bold text-green-600">
              ${(donations.reduce((sum, d) => sum + d.amount, 0)).toFixed(2)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total Usage</h3>
            <p className="text-3xl font-bold text-purple-600">
              ${(usageHistory.reduce((sum, u) => sum + u.amount, 0)).toFixed(2)}
            </p>
          </div>
        </div>
        
        {/* Add Usage Record Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Add New Usage Record</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Recipient Name</label>
              <input 
                type="text" 
                name="recipient" 
                required 
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter recipient name"
              />
            </div>
            
            <div>
              <label className="block mb-2">Amount (USD)</label>
              <input 
                type="number" 
                name="amount" 
                min="1"
                step="0.01"
                required 
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter amount"
              />
            </div>
            
            <div>
              <label className="block mb-2">Upload Proof</label>
              <input 
                type="file" 
                name="proof" 
                accept="image/*"
                required 
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Add Usage Record
            </button>
          </form>
        </div>
        
        {/* Recent Donations Table */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Proof</th>
                </tr>
              </thead>
              <tbody>
                {donations.slice(0, 5).map((donation) => (
                  <tr key={donation.id} className="border-t dark:border-gray-700">
                    <td className="px-4 py-2 text-center">{new Date(donation.date).toLocaleDateString()}</td>
                    <td className="px-4 py-2 text-center">User {donation.userId}</td>
                    <td className="px-4 py-2 text-center">${donation.amount.toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">
                      <img src={donation.proof} alt="Donation Proof" className="h-16 mx-auto object-cover" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Users Table */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">All Users</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t dark:border-gray-700">
                  <td className="px-4 py-2">Admin User</td>
                  <td className="px-4 py-2">admin@example.com</td>
                  <td className="px-4 py-2 text-center">Admin</td>
                </tr>
                <tr className="border-t dark:border-gray-700">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">user@example.com</td>
                  <td className="px-4 py-2 text-center">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AdminDashboard;