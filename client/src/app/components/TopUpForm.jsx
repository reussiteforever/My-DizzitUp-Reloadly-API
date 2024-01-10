import React, { useState, useEffect } from "react";
import axios from "axios";

// Componente Countries
const Countries = ({ handleSelectCountry }) => {
  const [countries, setCountries] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  // console.log("selectedCountry", selectedCountry);

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

  if (countries.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative justify-left inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenuCountry}
          className="inline-flex justify-center items-center text-right rounded bg-white text-sm font-medium text-custom-blue focus:outline-none md:min-w-[30%]"
        >
          <span>
            {selectedCountry ? (
              <span className="inline-flex">
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.isoName}
                  className="w-8 h-6 mr-1 rounded "
                />
                {selectedCountry.isoName}
              </span>
            ) : (
              "Select country"
            )}
          </span>

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
        <div className="absolute z-10 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg overflow-y-auto max-h-48">
          <div className="pt-1 w-60 items-center">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => selectCountry(country)}
                className={`flex items-center w-full mr-3 text-left px-4 py-2 ${
                  selectedCountry === country
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <img
                    src={country.flag} // Utilize country.flag, que contém a URL da imagem da bandeira do país
                    alt={country.isoName}
                    className="w-8 h-6 mr-2 rounded"
                  />

                  <span className="text-sm md:text-base">
                    {country.name} 
                  </span>
                </div>
                <span className="text-sm md:text-base">{'-'}  {country.isoName} </span>
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

  const monetaryValues = ["5.00", "10.00", "20.00", "50.00", "100.00"];

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
          className="inline-flex justify-center items-center rounded border border-custom-yellow bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <span>
            {selectedValue ? selectedValue : "Select recharge amount"}
          </span>
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
        <div className="absolute top-full mt-1 w-40 bg-white border border-gray-300 rounded shadow-lg overflow-y-auto z-10">
          <div className="py-1">
            {monetaryValues.map((value, index) => (
              <button
                key={index}
                onClick={() => selectValue(value)}
                className={`block w-full text-left px-4 py-2 ${
                  selectedValue === value ? "bg-gray-200" : "hover:bg-gray-100"
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
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipientPhone, setRecipientPhone] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [operatorId, setOperatorId] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedCountryRecipient, setSelectedCountryRecipient] = useState("");
  const [selectedCountrySender, setSelectedCountrySender] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativar o indicador de carregamento

    try {
      const response = await axios.post("http://localhost:5002/topup", {
        operatorId,
        selectedValue,
        recipientEmail,
        recipientPhone: {
          countryCode: selectedCountryRecipient.countryCode,
          number: recipientPhone,
        },
        senderPhone: {
          countryCode: selectedCountrySender.countryCode,
          number: senderPhone,
        },
      });

      console.log(response.data);

      // Verificar a estrutura da resposta e definir a mensagem apropriada
      if (response.data.topup && response.data.topup.message) {
        setResponseMessage(response.data.topup.message);
      } else {
        setResponseMessage("Top-up successful!");
      }
    } catch (error) {
      // Em caso de erro na solicitação, definir mensagem de erro
      setResponseMessage("Erro ao processar o top-up.");
    }

    setLoading(false); // Desativar o indicador de carregamento após a conclusão da solicitação
  };

  const handleSelectValue = (selectedValue) => {
    setSelectedValue(selectedValue);
  };


  const handleSelectCountrySender = (selectedCountry) => {
    setSelectedCountrySender(selectedCountry);
  };

  const handleSelectCountryRecipient = (selectedCountry) => {
    setSelectedCountryRecipient(selectedCountry);
  };


  return (
    <form onSubmit={handleSubmit} className="mb-0 p-5 bg-custom-yellow">
      <div className="bg-white text-custom-blue mt-20 py-4 px-6 rounded border-2 border-white shadow-2xl md:max-w-[30%]">
        <div className="text-center text-3xl my-5">
          <h1>
            <strong>Mobile top-up</strong>
          </h1>
        </div>
        <div className="text-center mb-3">
          <p>To top-up, please set the options below:</p>
        </div>
        <div className="mb-4">
          {/* Component MonetaryDropdown */}
          <MonetaryDropdown handleSelectValue={handleSelectValue} />
        </div>

        <div className="flex flex-col  space-y-3">
          <div className="mb-1">
            {/* Component Countries para remetente */}
          <Countries handleSelectCountry={handleSelectCountrySender} />
            <input
              type="tel"
              placeholder="Sender's Mobile Number"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-custom-blue leading-tight focus:outline-none focus:shadow-outline z-10"
              id="telSender"
              value={senderPhone}
              onChange={(e) => setSenderPhone(e.target.value)}
            />
          </div>

          <div className="mb-4">
            {/* Component Countries para destinatário */}
          <Countries handleSelectCountry={handleSelectCountryRecipient} />
              <input
              type="tel"
              placeholder="Recipient's Mobile Number"
              className="shadow appearance-none border rounded w-full py-1 px-1 text-custom-blue leading-tight focus:outline-none focus:shadow-outline z-10"
              id="telRecipient"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
            />
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="recipientEmail"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-1 px-3 text-custom-blue leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
            
          <label className="block text-gray-700 text-sm font-bold mb-2">
              Operador ID
            </label>
          <input
            type="number"
            placeholder="Choose the operator ID"
            className="shadow appearance-none border rounded w-full py-1 px-3 text-custom-blue leading-tight focus:outline-none focus:shadow-outline"
            id="operatorId"
            value={operatorId}
            onChange={(e) => setOperatorId(e.target.value)}
          />
          <button
            type="submit"
            className="bg-custom-yellow hover:bg-custom-blue text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>

      {/* Exibição da mensagem de carregamento */}
    {loading && <p>Loading...</p>}
    
    {/* Exibição da mensagem de resposta */}
    {responseMessage && <div className="border-2 rounded mt-4 text-custom-blue bg-custom-blue-light md:max-w-[30%] px-3 py-1"><p>{responseMessage}</p></div>}
    </form>
  );
};

export default TopUpForm;


