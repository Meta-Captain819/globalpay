"use client";
import Image from "next/image";
import React, { useState } from "react";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [amount, setamount] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [network, setnetwork] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successMessage1, setSuccessMessage1] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState(true);

  const paymentMethods = [
    { id: "Easypaisa", label: "Easypaisa" },
    { id: "Sadapay", label: "Sadapay" },
    { id: "Wallet", label: "Wallet" },
  ];

  const EasypaisaDetails = {
    accountNumber: "03488062645",
    accountName: "Muzammil Mehdi",
    bankName: "Easypaisa",
  };
  const SadapayDetails = {
    accountNumber: "03488062645",
    accountName: "Muzammil Mehdi",
    bankName: "Sadapay",
  };
  const WalletDetails = [
    { name: "Solana", address: "HpMoHcTZgFd7YhsH8P2atKpt2GtYo5yUVBQeV2Fixaif" },
    { name: "BNB", address: "0xf9307b90bee64c68a01217c54a2e789dc60477f0" },
    { name: "Polygon", address: "0xf9307b90bee64c68a01217c54a2e789dc60477f0" },
    { name: "TON", address: "UQAE1UhQ95Z1L4uy_RzSPB8OHGQhIEkFsALitvSdms2DDIAX" },
  ];

  const PaymentCard = ({ accountNumber, accountName, bankName }) => {
    navigator.clipboard.writeText(SadapayDetails.accountNumber);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedNetwork(value);

    if (checked) {
      setnetwork((prev) => [...prev, value]);
    } else {
      setnetwork((prev) => prev.filter((network) => network !== value));
    }
  }
  const handleSubmit = async () => {
    let existingPayments = JSON.parse(localStorage.getItem("payment")) || [];
    if (!Array.isArray(existingPayments)) {
      existingPayments = [];
    }
    const newPayment = { selectedMethod, amount, transactionId, name, address, selectedNetwork };
    existingPayments.push(newPayment);
    if (!selectedMethod || !transactionId || !amount) {
      setErrorMessage("Please select a payment method/Enter amount and enter a transaction ID.");
      setErrorMessage1(true);
      setSuccessMessage1(false);
    }
    if (selectedMethod && transactionId && amount) {
      setSuccessMessage("Payment Initiated Successfully");
      setErrorMessage1(false);
      setSuccessMessage1(true);
      localStorage.setItem("payment", JSON.stringify(existingPayments));
      setSelectedMethod("");
      setamount("");
      setTransactionId("");
    }
    
  };

  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 p-6">
      {(selectedMethod === "Easypaisa" || selectedMethod === "Sadapay") && (
        <div className="bg-gray-800 text-white p-6 rounded shadow-md w-full sm:w-[90%] md:w-[45%] lg:w-[30%] h-[30vh]">
          <h2 className="text-lg font-bold text-center flex justify-center gap-4">
            {selectedMethod === "Easypaisa" && <Image
              src="/easypaisa.png"
              alt="easypaisa"
              width={30}
              height={20}


            />}
            {selectedMethod === "Sadapay" && <Image
              src="/sadapay.png"
              alt="sadapay"
              width={90}
              height={25}


            />}
            {selectedMethod === "Easypaisa" ? "" : ""} Payment Details
          </h2>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              <span className="font-semibold">Account Name:</span>{" "}
              <span className="text-white">
                {selectedMethod === "Easypaisa"
                  ? EasypaisaDetails.accountName
                  : SadapayDetails.accountName}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <span className="font-semibold">Bank Name:</span>{" "}
              <span className="text-white">
                {selectedMethod === "Easypaisa"
                  ? EasypaisaDetails.bankName
                  : SadapayDetails.bankName}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2 flex gap-2">
              <span className="font-semibold">Account Number:</span>{" "}
              <span className="text-white">
                {selectedMethod === "Easypaisa"
                  ? EasypaisaDetails.accountNumber
                  : SadapayDetails.accountNumber}
              </span>
              <span
                className="text-blue-500 cursor-pointer underline "
                onClick={PaymentCard}              >
               <Image
                
            src="/copy.svg"
            alt="copy"
            width={15}
            height={15}

          />
              </span>
            </p>
          </div>
        </div>
      )}

      {selectedMethod === "Wallet" && (
        <div className="bg-gray-800 text-white p-6 rounded shadow-md w-full sm:w-[90%] md:w-[45%] lg:w-[30%] h-[80vh]">
          <h2 className="text-lg font-bold text-center flex justify-center gap-4"><Image
            src="/bitcoin.svg"
            alt="Get Me a Chai Logo"
            width={30}
            height={20}

          />Wallet Payment Details</h2>
          <div className="mt-4">
            {WalletDetails.map((wallet, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-600 p-4 rounded flex justify-between overflow-auto scrollbar-hide "
              >
                <p className="text-sm text-gray-400">
                  <span className="font-semibold">{wallet.name}:</span>{" "}
                  <span className="text-white flex">{wallet.address}</span>
                  <span
                    className="text-blue-500 cursor-pointer underline ml-2"
                    onClick={() => navigator.clipboard.writeText(wallet.address)}
                  >
                    <Image
              
            src="/copy.svg"
            alt="copy"
            width={15}
            height={15}

          />
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-gray-800 text-white p-6 rounded shadow-md w-full sm:w-[90%] md:w-[45%] lg:w-[30%]">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`block p-4 rounded border ${selectedMethod === method.id
                ? "border-blue-500 bg-gray-700"
                : "border-gray-600"
                } cursor-pointer`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
                className="hidden"
              />
              {method.label}
            </label>
          ))}
          <label className="block text-gray-400">Send to</label>
          <input
            className="w-full px-4 py-2 border rounded bg-gray-700 text-white"
            type="text"
            onChange={(e) => setname(e.target.value)}
            value={name}
            placeholder="Enter Receiver Name"
          />

          {selectedMethod === "Wallet" && (
            <>
              <label className="block text-gray-400">Select Network</label>
              <div className="space-y-2">
                {["Solana", "BNB", "Polygon", "TON"].map((network) => (
                  <label
                    key={network}
                    className="flex items-center space-x-2 text-gray-400"
                  >
                    <input
                      type="checkbox"
                      checked={selectedNetwork === network}
                      name="network"
                      value={network}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded-full focus:ring-blue-500 focus:ring-2" />
                    <span>{network}</span>
                  </label>
                ))}
              </div>
              <label className="block text-gray-400">Enter Wallet Address</label>
              <input
                className="w-full px-4 py-2 border rounded bg-gray-700 text-white"
                type="text"
                name="address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Enter Wallet address"
              />

              {/* Display Selected Networks */}
              <div className="mt-4 text-white">
                <h3 className="font-bold">Selected Networks:</h3>
                {selectedNetwork ? (
                  <p>{selectedNetwork}</p>
                ) : (
                  <p>No network selected.</p>
                )}
              </div>

            </>
          )}

          <label className="block text-gray-400">
            {selectedMethod === "Wallet" ? "Amount in $" : "Amount in PKR"}
          </label>
          <input
            className="w-full px-4 py-2 border rounded bg-gray-700 text-white"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>



        <div className="mt-4">
          <label className="block text-gray-400">Transaction ID</label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded bg-gray-700 text-white"
            placeholder="Enter transaction ID"
          />
        </div>

        {errorMessage1 && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage1 && <p className="text-green-500 mt-4">{successMessage}</p>}

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
