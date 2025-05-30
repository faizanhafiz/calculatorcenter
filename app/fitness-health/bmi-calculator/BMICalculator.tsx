'use client';

import { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [ponderalIndex, setPonderalIndex] = useState<number | null>(null);
  const [piCategory, setPiCategory] = useState('');
  const [isUSUnits, setIsUSUnits] = useState(false);
  const [heightError, setHeightError] = useState('');
  const [weightError, setWeightError] = useState('');

  const calculateBMIAndPI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    setHeightError('');
    setWeightError('');

    if (!h && !w) {
      setHeightError('Please fill the height');
      setWeightError('Please fill the weight');
      return;
    }

    if (!h || h <= 0) {
      setHeightError('Height must be a positive number');
      return;
    }

    if (!w || w <= 0) {
      setWeightError('Weight must be a positive number');
      return;
    }

    let bmiResult;
    let heightInMeters;

    if (isUSUnits) {
      heightInMeters = h * 0.0254;
      bmiResult = (w * 703) / (heightInMeters * heightInMeters);
    } else {
      heightInMeters = h / 100;
      bmiResult = w / (heightInMeters * heightInMeters);
    }

    const roundedBMI = parseFloat(bmiResult.toFixed(1));
    setBmi(roundedBMI);

    if (roundedBMI < 18.5) {
      setCategory('Underweight');
    } else if (roundedBMI >= 18.5 && roundedBMI < 25) {
      setCategory('Normal weight');
    } else if (roundedBMI >= 25 && roundedBMI < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }

    const piResult = w / Math.pow(heightInMeters, 3);
    const roundedPI = parseFloat(piResult.toFixed(2));
    setPonderalIndex(roundedPI);

    if (roundedPI < 2.2) {
      setPiCategory('Low PI');
    } else if (roundedPI >= 2.2 && roundedPI < 2.5) {
      setPiCategory('Normal PI');
    } else {
      setPiCategory('High PI');
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-blue-700">BMI Calculator</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-700">
                Height ({isUSUnits ? 'inches' : 'cm'})
              </label>
              <input
                type="number"
                id="height"
                min="0"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900"
                placeholder={isUSUnits ? 'e.g. 70' : 'e.g. 170'}
              />
              {heightError && <p className="text-red-600 text-sm mt-2">{heightError}</p>}
            </div>

            <div>
              <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-700">
                Weight ({isUSUnits ? 'pounds' : 'kg'})
              </label>
              <input
                type="number"
                id="weight"
                min="0"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900"
                placeholder={isUSUnits ? 'e.g. 150' : 'e.g. 65'}
              />
              {weightError && <p className="text-red-600 text-sm mt-2">{weightError}</p>}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={calculateBMIAndPI}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
              >
                Calculate BMI
              </button>

              <button
                onClick={() => setIsUSUnits(!isUSUnits)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-md"
              >
                Switch to {isUSUnits ? 'Metric' : 'US'} Units
              </button>
            </div>

            {bmi !== null && (
              <div className="bg-gray-100 p-4 rounded-lg space-y-3">
                <p className="text-lg text-gray-900">
                  Your BMI is: <span className="font-bold">{bmi}</span>
                </p>

                <p className="text-md text-gray-700">
                  Category: <span className="font-semibold">{category}</span>
                </p>

                <p className="text-lg text-gray-900">
                  Your Ponderal Index (PI) is: <span className="font-bold">{ponderalIndex}</span>
                </p>

                <p className="text-md text-gray-700">
                  PI Category: <span className="font-semibold">{piCategory}</span>
                </p>

                <div className="mt-4 w-full h-6 bg-gray-300 rounded-full relative">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min((bmi / 40) * 100, 100)}%`,
                      backgroundColor:
                        bmi < 18.5
                          ? '#f59e0b'
                          : bmi < 25
                          ? '#10b981'
                          : bmi < 30
                          ? '#facc15'
                          : '#ef4444',
                    }}
                  ></div>
                  <div className="absolute top-full text-xs text-gray-600 mt-1 flex justify-between w-full">
                    <span>Under</span>
                    <span>Normal</span>
                    <span>Over</span>
                    <span>Obese</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-gray-800">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">BMI Categories</h3>
            <p className="mb-3">
              BMI is a simple measure of body fat based on height and weight. Here&apos;s how to interpret your BMI result:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Underweight:</strong> BMI less than 18.5</li>
              <li><strong>Normal weight:</strong> BMI 18.5–24.9</li>
              <li><strong>Overweight:</strong> BMI 25–29.9</li>
              <li><strong>Obese:</strong> BMI 30 or more</li>
            </ul>

            <h3 className="text-lg font-semibold text-blue-700 mb-2 mt-6">Ponderal Index (PI) Categories</h3>
            <p className="mb-3">
              Ponderal Index is another measure of body fat based on height and weight. Here&apos;s how to interpret your PI result:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Low PI:</strong> PI less than 2.2</li>
              <li><strong>Normal PI:</strong> PI between 2.2 and 2.5</li>
              <li><strong>High PI:</strong> PI greater than 2.5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
