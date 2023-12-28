import React, { useState, useEffect } from "react";
import axios from "axios";

function Balance() {
  const [balance, setBalance] = useState(null);
  

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:5001/balance");
        setBalance(response.data);
      } catch (error) {
        console.error("Error while fetching server balance", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex flex-container m-15 bg-custom-blue text-white py-2 px-4 rounded-md border-2 border-white">
      <div>
        <h2>
          <strong>Balance Information</strong>
        </h2>
        {balance ? (
          <>
          
            <p>
              Your new balance: {balance.balance} 
            </p>
          </>
        ) : (
          <p>Loading balance...</p>
        )}
      </div>
      <div className="m-2 bg-custom-blue hover:bg-custom-white hover:text-custom-blue text-white py-2 px-4 rounded-md border-2 hover:border-custom-blue shadow-xl">
      <button
        type="button"
        
      >
        Recharge wallet
      </button>
      </div>
      
    </div>
  );
}

export default Balance;
