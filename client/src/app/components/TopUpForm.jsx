import React, { useState, useEffect } from "react";
import axios from "axios";


// Componente Countries
const Countries = ({ handleSelectCountry }) => {
  const [countries, setCountries] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:5003/countries");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);

  const toggleMenuCountry = () => {
    setShowMenu(!showMenu);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    handleSelectCountry(country);
    toggleMenuCountry();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenuCountry}
          className="inline-flex justify-center items-center rounded border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span>Select country</span>
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showMenu && (
        <div className="absolute top-full mt-1 w-40 bg-white border border-gray-300 rounded shadow-lg overflow-y-auto h-40">
          <div className="py-1">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => selectCountry(country.name)}
                className={`block w-full text-left px-4 py-2 ${
                  selectedCountry === country.name
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                {country.name} 
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente MonetaryDropdown
const MonetaryDropdown = ({ handleSelectValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const monetaryValues = ['5.00', '10.00', '20.00', '50.00', '100.00'];

  const toggleMenuValue = () => {
    setShowMenu(!showMenu);
  };

  const selectValue = (value) => {
    setSelectedValue(value);
    handleSelectValue(value);
    toggleMenuValue();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenuValue}
          className="inline-flex justify-center items-center rounded border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span>Select recharge amount</span>
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showMenu && (
        <div className="absolute top-full mt-1 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="py-1">
            {monetaryValues.map((value, index) => (
              <button
                key={index}
                onClick={() => selectValue(value)}
                className={`block w-full text-left px-4 py-2 ${
                  selectedValue === value 
                  ? "bg-gray-200" 
                  : "hover:bg-gray-100"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const TopUpForm = () => {
  const [countryCode, setCountryCode] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipientPhone, setRecipientPhone] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [operatorId, setOperatorId] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativar o indicador de carregamento
 
   try {
    const response = await axios.post('http://localhost:5002/topup', {
      operatorId,
      selectedValue,
      recipientPhone,
      senderPhone
    });

    console.log(response.data);

 // Verificar a estrutura da resposta e definir a mensagem apropriada
 if (response.data.topup && response.data.topup.message) {
  setResponseMessage(response.data.topup.message);
} else {
  setResponseMessage('Top-up successful!');
}
} catch (error) {
// Em caso de erro na solicitação, definir mensagem de erro
setResponseMessage('Erro ao processar o top-up.');
}

setLoading(false); // Desativar o indicador de carregamento após a conclusão da solicitação
};


  const handleSelectValue = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  const handleSelectCountry = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 p-10 bg-blue-100">
      <div className="w-2/5 bg-white text-blue-800 py-4 px-6 rounded border-2 border-blue-200 shadow-xl">
        <div className="text-center text-3xl my-5">
          <h1>
            <strong>Mobile top-up</strong>
          </h1>
        </div>
        <div className="text-center mb-3">
          <p>
            Follow the steps to top-up in seconds. To do, please set the
            options below:
          </p>
        </div>
        <div className="mb-4">
          {/* Component MonetaryDropdown */}
          <MonetaryDropdown handleSelectValue={handleSelectValue} />
          <div>Amount: {selectedValue}</div>
        </div>
        <div className="mb-4">
          {/* Component Countries */}
          <Countries handleSelectCountry={handleSelectCountry} />
          <div>Country: {selectedCountry}</div>
        </div>

          <div className="flex flex-col space-y-3">
          <input
            type="tel"
            placeholder="Sender's Mobile Number"
            className="border-2 rounded px-3 py-1"
            value={senderPhone}
            onChange={(e) => setSenderPhone(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Recipient's Mobile Number"
            className="border-2 rounded px-3 py-1"
            value={recipientPhone}
            onChange={(e) => setRecipientPhone(e.target.value)}
          />

          <input
            type="number"
            placeholder="Operator ID"
            className="border-2 rounded px-3 py-1"
            value={operatorId}
            onChange={(e) => setOperatorId(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default TopUpForm;
