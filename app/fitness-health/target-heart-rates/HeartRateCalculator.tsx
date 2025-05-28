"use client"; // Add this directive at the very top of the file

import React, { useState } from 'react';

export default function HeartRateCalculator() {
  // Explicitly define types for state variables
  const [age, setAge] = useState<string>('');
  const [maxHr, setMaxHr] = useState<number | null>(null);
  const [moderateHr, setModerateHr] = useState<string | null>(null);
  const [vigorousHr, setVigorousHr] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  // Define a maximum scale for the progress bars (e.g., typical max HR for a very young person)
  // This helps normalize the bar lengths for visualization.
  const MAX_HR_SCALE = 220; // A common maximum possible heart rate for visualization

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Added type annotation for 'e'
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAge(value);
      setError('');
    }
  };

  const calculateHeartRates = () => {
    const ageNum = parseInt(age, 10);

    if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
      setError('Please enter a valid age between 1 and 120.');
      setMaxHr(null);
      setModerateHr(null);
      setVigorousHr(null);
      return;
    }

    const calculatedMaxHr = 220 - ageNum;
    setMaxHr(calculatedMaxHr);

    const moderateMin = Math.round(calculatedMaxHr * 0.50);
    const moderateMax = Math.round(calculatedMaxHr * 0.70);
    setModerateHr(`${moderateMin} - ${moderateMax}`);

    const vigorousMin = Math.round(calculatedMaxHr * 0.70);
    const vigorousMax = Math.round(calculatedMaxHr * 0.85);
    setVigorousHr(`${vigorousMin} - ${vigorousMax}`);

    setError('');
  };

  /**
   * Helper function to render a circular progress bar.
   * @param {string} label - The text label for the heart rate zone.
   * @param {string} valueText - The calculated heart rate value or range as text (e.g., "190 bpm" or "95-133 bpm").
   * @param {number} valueForBar - The numeric value to determine the bar's fill (e.g., max HR or upper bound of a zone).
   * @param {string} barColorClass - Tailwind CSS class for the bar's background color.
   */
  const renderCircularProgressBar = (label: string, valueText: string, valueForBar: number, barColorClass: string) => {
    const radius = 50; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle

    // Calculate the percentage of the circle's fill based on MAX_HR_SCALE
    const progressPercentage = Math.min(100, (valueForBar / MAX_HR_SCALE) * 100);
    const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

    // Map Tailwind color class to a direct color value for SVG stroke
    let strokeColor = '#4B5563'; // Default gray
    if (barColorClass === 'bg-red-500') strokeColor = '#EF4444';
    else if (barColorClass === 'bg-green-500') strokeColor = '#22C55E';
    else if (barColorClass === 'bg-blue-500') strokeColor = '#3B82F6';
    else if (barColorClass === 'bg-purple-700') strokeColor = '#6D28D9';


    return (
      <div className="flex flex-col items-center justify-center mb-6">
        {/* Label displayed above the circular bar */}
        <p className="text-base font-semibold text-gray-800 mb-2 text-center">{label}</p>
        <div className="relative w-32 h-32"> {/* Container for the SVG and value text */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              className="text-gray-200"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
            {/* Progress circle */}
            <circle
              className={`transition-all duration-1000 ease-in-out`}
              strokeWidth="10"
              stroke={strokeColor} // Use direct color for stroke
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {/* Only valueText remains inside the circle */}
            <p className="text-xl font-extrabold text-purple-700">{valueText} bpm</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 rounded-xl mb-10">
     
      <div className="mb-6">
        <label htmlFor="age" className="block text-lg font-medium text-gray-700 mb-2">
          Enter Your Age:
        </label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={handleAgeChange}
          placeholder="e.g., 30"
          className="w-full text-gray-800 px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-lg transition duration-200"
        />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <button
        onClick={calculateHeartRates}
        className="w-full md:w-auto md:px-8 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg text-xl shadow-md transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 mx-auto block" // Added md:w-auto, md:px-8, mx-auto, block
      >
        Calculate
      </button>

      {maxHr !== null && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-purple-200">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">Your Calculated Zones:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center"> {/* Use grid for layout */}
            {renderCircularProgressBar(
              'Max HR', // Shorter label for circular display
              `${maxHr}`,
              maxHr,
              'bg-red-500' // Red for Max HR
            )}
            {renderCircularProgressBar(
              'Moderate Zone', // Shorter label
              moderateHr!, // Non-null assertion
              parseInt(moderateHr!.split(' - ')[1]), // Non-null assertion
              'bg-green-500' // Green for Moderate
            )}
            {renderCircularProgressBar(
              'Vigorous Zone', // Shorter label
              vigorousHr!, // Non-null assertion
              parseInt(vigorousHr!.split(' - ')[1]), // Non-null assertion
              'bg-blue-500' // Blue for Vigorous
            )}
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            <span className="font-semibold">Disclaimer:</span> These are estimated values based on the 220 - Age formula. For personalized and accurate advice, always consult with a healthcare professional or a certified fitness expert.
          </p>
        </div>
      )}
    </div>
  );
}
