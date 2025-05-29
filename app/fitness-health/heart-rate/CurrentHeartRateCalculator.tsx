"use client";

import React, { useState } from "react";

export default function CurrentHeartRateCalculator() {
  const [heartRate, setHeartRate] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<React.ReactNode>(null);
  const [showDefinitions, setShowDefinitions] = useState<boolean>(false); // State to control visibility of definitions

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setHeartRate(value);
      setError("");
      setMessage("");
      setShowDefinitions(false); // Hide definitions when input changes
    }
  };

  const evaluateHeartRate = () => {
    const hr = parseInt(heartRate, 10);
    if (isNaN(hr) || hr <= 0 || hr > 250) {
      setError("Please enter a valid heart rate between 1 and 250.");
      setMessage("");
      setShowDefinitions(false); // Hide definitions on error
      return;
    }

    setError("");
    setShowDefinitions(true); // Show definitions when a valid result is processed

    // Basic interpretation based on resting heart rate ranges (for adults)
    if (hr < 60) {
      setMessage(
        <>Your heart rate is below normal resting range (<span className="text-red-600 font-bold">bradycardia</span>).</>
      );
    } else if (hr <= 100) {
      setMessage(<>Your heart rate is within the (<span className="text-green-600 font-bold">normal</span>) resting range.</>);
    } else {
      setMessage(
        <>Your heart rate is above normal resting range (<span className="text-red-600 font-bold">tachycardia</span>).</>
      );
    }
  };

  return (
    <div className="p-6 rounded-xl mb-10 max-w-md mx-auto bg-white shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Current Heart Rate Calculator
      </h2>
      <label htmlFor="heartRate" className="block mb-2 text-lg font-medium text-gray-700">
        Enter your current heart rate (BPM):
      </label>
      <input
        type="text"
        id="heartRate"
        value={heartRate}
        onChange={handleInputChange}
        placeholder="e.g., 72"
        className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg mb-4"
      />
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <button
        onClick={evaluateHeartRate}
        className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition"
      >
        Check
      </button>

      {message && (
        <p className="mt-6 text-center text-gray-800 font-semibold text-lg">{message}</p>
      )}

      {/* Added definitions section */}
      {showDefinitions && (
        <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-700">
          <h3 className="text-md font-semibold text-gray-800 mb-2 text-center">Heart Rate Information:</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Normal Resting Heart Rate: 60-100 beats per minute (bpm)</li>
            <li>Bradycardia: Below 60 bpm</li>
            <li>Tachycardia: Above 100 bpm</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3 text-center">
            This is general information for adults and not medical advice. Consult a doctor for any health concerns.
          </p>
        </div>
      )}
    </div>
  );
}
