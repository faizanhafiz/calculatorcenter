'use client';

import { useState } from 'react';
 
import { FaMale, FaFemale } from 'react-icons/fa';

interface Measurement {
  value: string;
  unit: 'metric' | 'imperial';
}

const CalorieCalculator = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('imperial');
  const [height, setHeight] = useState<Measurement>({ value: '', unit: 'metric' });
  const [weight, setWeight] = useState<Measurement>({ value: '', unit: 'metric' });
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const [showAd, setShowAd] = useState(false);

  const ACTIVITY_LEVELS = {
    sedentary: {
      label: 'Sedentary (little or no exercise)',
      multiplier: 1.2,
    },
    light: {
      label: 'Light exercise (1-3 days/week)',
      multiplier: 1.375,
    },
    moderate: {
      label: 'Moderate exercise (3-5 days/week)',
      multiplier: 1.55,
    },
    active: {
      label: 'Heavy exercise (6-7 days/week)',
      multiplier: 1.725,
    },
    veryActive: {
      label: 'Very heavy exercise (twice/day)',
      multiplier: 1.9,
    },
  };

  const toCm = (value: number) => unit === 'imperial' ? value * 30.48 : value;
  const toKg = (value: number) => unit === 'imperial' ? value * 0.453592 : value;

  const getUnitLabel = (field: string) => {
    if (field === 'weight') return unit === 'imperial' ? 'lbs' : 'kg';
    return unit === 'imperial' ? 'ft' : 'cm';
  };

  const validateInputs = () => {
    const fields: any = { weight: weight.value, height: height.value, age };
    const newErrors: any = {};

    Object.entries(fields).forEach(([key, value]) => {
      const numValue = parseFloat(String(value));
      newErrors[key] = !value || isNaN(numValue) || numValue <= 0;
    });

    setErrors(newErrors);
    return Object.values(newErrors).every((val) => !val);
  };

  const calculateCalories = () => {
    if (!validateInputs()) {
      setCalories(null);
      return;
    }

    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);
    const a = parseFloat(age);
    const heightCm = toCm(h);
    const weightKg = toKg(w);
    const activityMultiplier = ACTIVITY_LEVELS[activityLevel as keyof typeof ACTIVITY_LEVELS].multiplier;

    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * a);
    }

    const totalCalories = bmr * activityMultiplier;
    setCalories(Math.round(totalCalories));
    setShowAd(true);
  };

  const getCalorieCategory = (calories: number) => {
    if (calories < 1200) return 'Low';
    if (calories < 1800) return 'Moderate';
    if (calories < 2500) return 'Normal';
    return 'High';
  };

  const getCategoryColor = (calories: number) => {
    const category = getCalorieCategory(calories);
    if (category === 'Low') return 'bg-red-400';
    if (category === 'Moderate') return 'bg-yellow-400';
    if (category === 'Normal') return 'bg-green-400';
    return 'bg-blue-400';
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Daily Calorie Calculator</h2>
        <p className="text-gray-600">
          Calculate your daily calorie needs based on your age, height, weight, gender, and activity level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Gender</label>
            <div className="flex space-x-4">
              <button
                onClick={() => setGender('male')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
              >
                <FaMale className="mr-2" />
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
              >
                <FaFemale className="mr-2" />
                Female
              </button>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full text-gray-800 placeholder-gray-400 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Height</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={height.value}
                onChange={(e) => setHeight({ ...height, value: e.target.value })}
                className="flex-1 w-full text-gray-800 placeholder-gray-400 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your height"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value as 'metric' | 'imperial')}
                className="w-32 text-gray-800 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="metric" className="text-gray-800">cm</option>
                <option value="imperial" className="text-gray-800">ft</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Weight</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={weight.value}
                onChange={(e) => setWeight({ ...weight, value: e.target.value })}
                className="flex-1 w-full text-gray-800 placeholder-gray-400 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your weight"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value as 'metric' | 'imperial')}
                className="w-32 text-gray-800 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="metric" className="text-gray-800">kg</option>
                <option value="imperial" className="text-gray-800">lbs</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full text-gray-800 placeholder-gray-400 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(ACTIVITY_LEVELS).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <br /> <br />
            <button
              onClick={calculateCalories}
              className="  bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {calories && (
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Daily Calorie Needs</h3>
              <div className="flex items-center justify-center mb-4">
                <div className={`rounded-full w-32 h-32 flex items-center justify-center ${getCategoryColor(calories)}`}>
                  <span className="text-3xl font-bold text-white">{calories}</span>
                </div>
              </div>
              <p className="text-gray-600">
                Your estimated daily calorie needs based on your inputs and activity level.
              </p>
              <div className="mt-4">
                <span className="font-bold text-gray-700">Category:</span>
                <span className={`ml-4 font-bold text-lg ${getCategoryColor(calories).replace('bg-', 'text-').replace('400', '700')
                  } px-4 py-2 rounded-lg`}>
                  {getCalorieCategory(calories)}
                </span>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default CalorieCalculator;
