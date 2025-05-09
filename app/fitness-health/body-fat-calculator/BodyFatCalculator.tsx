'use client';

import { useState } from 'react';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');
  const [age, setAge] = useState('');
  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [showAd, setShowAd] = useState(false); // New state for showing the ad modal

  const toCm = (value: number, unit: string) => (unit === 'imperial' ? value * 2.54 : value);

  const validateInputs = () => {
  const fields: any = { height, weight, waist, neck, age };
  if (gender === 'female') fields['hip'] = hip;

  const newErrors: any = {};
  Object.entries(fields).forEach(([key, value]) => {
    const numValue = parseFloat(String(value));
    newErrors[key] = !value || isNaN(numValue) || numValue <= 0;
  });

  setErrors(newErrors);
  return Object.values(newErrors).every((val) => !val);
};

  const calculateBodyFat = () => {
    if (!validateInputs()) {
      setBodyFat(null);
      return;
    }

    const h = parseFloat(height);
    const w = parseFloat(weight);
    const wa = parseFloat(waist);
    const ne = parseFloat(neck);
    const hi = parseFloat(hip);
    const a = parseFloat(age);

    const heightCm = toCm(h, unit);
    const waistCm = toCm(wa, unit);
    const neckCm = toCm(ne, unit);
    const hipCm = toCm(hi, unit);

    let result;
    if (gender === 'male') {
      result =
        495 /
          (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) -
        450;
    } else {
      result =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waistCm + hipCm - neckCm) +
            0.22100 * Math.log10(heightCm)) -
        450;
    }

    setBodyFat(parseFloat(result.toFixed(1)));

    // Show the ad after the calculation
    setShowAd(true);
  };

  const getCategory = (bf: number) => {
    if (gender === 'male') {
      if (bf < 6) return 'Essential Fat';
      if (bf < 14) return 'Athletes';
      if (bf < 18) return 'Fitness';
      if (bf < 25) return 'Average';
      return 'Obese';
    } else {
      if (bf < 14) return 'Essential Fat';
      if (bf < 21) return 'Athletes';
      if (bf < 25) return 'Fitness';
      if (bf < 32) return 'Average';
      return 'Obese';
    }
  };

  const getCategoryColor = (bf: number) => {
    const category = getCategory(bf);
    if (category === 'Essential Fat') return 'bg-green-400';
    if (category === 'Athletes') return 'bg-blue-400';
    if (category === 'Fitness') return 'bg-yellow-400';
    if (category === 'Average') return 'bg-orange-400';
    return 'bg-red-400';
  };

  const inputStyle = (field: string) =>
    `w-full text-gray-900 px-4 py-2 rounded-md border ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    } focus:outline-none focus:ring-2 ${
      errors[field] ? 'focus:ring-red-500' : 'focus:ring-blue-500'
    }`;

  const labelStyle = 'block font-medium text-gray-900 mb-1 ';

  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-white rounded-xl shadow p-6 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Body Fat Calculator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {/* Gender and Unit Row */}
            <div className="flex items-center justify-between space-x-6">
              <div className="flex items-center">
                <label className={labelStyle}>Gender</label>
                <div className="flex space-x-4 ml-4">
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === 'male'}
                      onChange={() => setGender('male')}
                    />
                    <label htmlFor="male" className="ml-2 text-gray-900">
                      Male
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={gender === 'female'}
                      onChange={() => setGender('female')}
                    />
                    <label htmlFor="female" className="ml-2 text-gray-900">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelStyle}>Units</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as 'metric' | 'imperial')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900"
                >
                  <option value="metric">Metric (cm/kg)</option>
                  <option value="imperial">Imperial (in/lbs)</option>
                </select>
              </div>
            </div>

            {/* Inputs in Two Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyle}>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className={inputStyle('age')}
                />
                {errors.age && <p className="text-red-500 text-sm">Required and must be &gt; 0</p>}
              </div>

              <div>
                <label className={labelStyle}>Height</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className={inputStyle('height')}
                />
                {errors.height && <p className="text-red-500 text-sm">Required and must be &gt; 0</p>}
              </div>

              <div>
                <label className={labelStyle}>Weight</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={inputStyle('weight')}
                />
                {errors.weight && <p className="text-red-500 text-sm">Required and must be &gt; 0</p>}
              </div>

              <div>
                <label className={labelStyle}>Waist</label>
                <input
                  type="number"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className={inputStyle('waist')}
                />
                {errors.waist && <p className="text-red-500 text-sm">Required and must be &gt; 0</p>}
              </div>

              <div>
                <label className={labelStyle}>Neck</label>
                <input
                  type="number"
                  value={neck}
                  onChange={(e) => setNeck(e.target.value)}
                  className={inputStyle('neck')}
                />
                {errors.neck && <p className="text-red-500 text-sm">Required and must be &gt; 0</p>}
              </div>

              {gender === 'female' && (
                <div>
                  <label className={labelStyle}>Hip</label>
                  <input
                    type="number"
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                    className={inputStyle('hip')}
                  />
                  {errors.hip && <p className="text-red-500 text-sm">Required for females</p>}
                </div>
              )}
            </div>

            <button
              onClick={calculateBodyFat}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-md"
            >
              Calculate Body Fat
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg text-sm text-gray-800 border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Result</h2>

            {bodyFat !== null ? (
              <>
                <p className="text-lg text-gray-800">
                  Estimated Body Fat: <span className="font-bold">{bodyFat}%</span>
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Category: <span className="font-bold">{getCategory(bodyFat)}</span>
                </p>
                <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
                  <div
                    className={`h-4 rounded-full ${getCategoryColor(bodyFat)} transition-all`}
                    style={{ width: `${bodyFat}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <p className="text-gray-600">Please enter all values and click "Calculate" to see your result.</p>
            )}
          </div>
        </div>
      </div>

      {/* Ad Modal */}
      {showAd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-semibold text-gray-800">Special Offer</h2>
            <p className="text-gray-600 my-4">Check out our amazing offers on fitness gear!</p>
            <button
              onClick={() => setShowAd(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Close Ad
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyFatCalculator;
