import React from "react";

// Donate Page Component

function DonatePage({ submitDonation }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target.amount.value);
    const proofFile = e.target.proof.files[0];
    if (amount > 0 && proofFile) {
      await submitDonation(amount, proofFile);
      e.target.reset();
    } else {
      alert("Please enter a valid amount and upload a proof image.");
    }
  };

  return (
    <section className="py-12 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Make a Donation</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div>
          <label className="block mb-2">Donation Amount (USD)</label>
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
          <label className="block mb-2">Upload Proof (Receipt or Screenshot)</label>
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
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Submit Donation
        </button>
      </form>
    </section>
  );
}

export default DonatePage;