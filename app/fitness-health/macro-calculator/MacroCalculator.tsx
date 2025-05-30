'use client'

import { useState ,useRef} from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';

interface MacroCalculatorProps {
  defaultGoal?: 'weight_loss' | 'weight_maintenance' | 'weight_gain';
}

const MacroCalculator: React.FC<MacroCalculatorProps> = ({ defaultGoal = 'weight_maintenance' }) => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState(defaultGoal);
  const [calories, setCalories] = useState<number | null>(null);
  const [macros, setMacros] = useState({
    protein: 0,
    carbs: 0,
    fat: 0
  });
  const [weightUnit, setWeightUnit] = useState<'metric' | 'us'>('metric');
  const [heightUnit, setHeightUnit] = useState<'metric' | 'us'>('us');
  const resultsRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState({
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: ''
  });

  const ACTIVITY_LEVELS = {
    sedentary: { label: 'Sedary (little or no exercise)', multiplier: 1.2 },
    light: { label: 'Lightly active (light exercise/sports 1-3 days/week)', multiplier: 1.375 },
    moderate: { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', multiplier: 1.55 },
    very: { label: 'Very active (hard exercise/sports 6-7 days a week)', multiplier: 1.725 },
    extra: { label: 'Extra active (very hard exercise/job, physical job)', multiplier: 1.9 }
  };

  const GOAL_MACROS = {
    weight_loss: { protein: 0.8, carbs: 0.4, fat: 0.4 },
    weight_maintenance: { protein: 0.3, carbs: 0.5, fat: 0.2 },
    weight_gain: { protein: 0.25, carbs: 0.55, fat: 0.2 }
  };

  const UNIT_LABELS = {
    metric: {
      weight: 'kg',
      height: 'cm',
      weightConversion: 1,
      heightConversion: 1
    },
    us: {
      weight: 'lbs',
      height: 'in',
      weightConversion: 2.20462, // kg to lbs
      heightConversion: 0.393701 // cm to in
    }
  };

  const validateInputs = () => {
    const newErrors = {
      age: age ? '' : 'Age is required',
      weight: weight ? '' : 'Weight is required',
      height: height ? '' : 'Height is required',
      activityLevel: activityLevel ? '' : 'Activity level is required',
      goal: goal ? '' : 'Fitness goal is required'
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const calculateMacros = () => {
    if (!validateInputs()) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (isNaN(w) || isNaN(h) || isNaN(a)) {
      setErrors(prev => ({
        ...prev,
        age: isNaN(a) ? 'Please enter a valid age' : '',
        weight: isNaN(w) ? 'Please enter a valid weight' : '',
        height: isNaN(h) ? 'Please enter a valid height' : ''
      }));
      return;
    }

    // Convert to metric if using US units
    const weightKg = weightUnit === 'metric' ? w : w / UNIT_LABELS.us.weightConversion;
    const heightCm = heightUnit === 'metric' ? h : h / UNIT_LABELS.us.heightConversion;

    // Calculate BMR using Mifflin-St Jeor equation
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * a);
    }

    // Calculate total daily energy expenditure (TDEE)
    const activityMultiplier = ACTIVITY_LEVELS[activityLevel as keyof typeof ACTIVITY_LEVELS].multiplier;
    const tdee = bmr * activityMultiplier;

    // Adjust calories based on goal
    let targetCalories = tdee;
    if (goal === 'weight_loss') {
      targetCalories *= 0.8; // 20% deficit
    } else if (goal === 'weight_gain') {
      targetCalories *= 1.1; // 10% surplus
    }

    setCalories(Math.round(targetCalories));

    // Calculate macros based on goal
    const goalMacros = GOAL_MACROS[goal as keyof typeof GOAL_MACROS];
    const protein = Math.round((targetCalories * goalMacros.protein) / 4);
    const carbs = Math.round((targetCalories * goalMacros.carbs) / 4);
    const fat = Math.round((targetCalories * goalMacros.fat) / 9);

    setMacros({ protein, carbs, fat });

    // Scroll to results section on mobile after state updates
    setTimeout(() => {
      if (window.innerWidth <= 768 && resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Input Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Macronutrient Calculator</h2>
          <p className="text-gray-600 mb-6">
            Calculate your daily macronutrient needs based on your weight, height, age, activity level, and fitness goals.
          </p>

          <div className="space-y-6">
            {/* Gender Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    className="h-4 w-4 text-gray-800 focus:ring-blue-500"
                  />
                  <FaMale className="text-gray-700" />
                  <span className='text-gray-700'>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    className="h-4 w-4 text-pink-800 focus:ring-pink-500"
                  />
                  <FaFemale className="text-pink-600" />
                  <span className='text-gray-700'>Female</span>
                </label>
              </div>
            </div>

            {/* Age Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Age (years)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-3 text-gray-700 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                min="13"
                max="100"
              />
              {errors.age && (
                <p className="text-sm text-red-500 mt-1">{errors.age}</p>
              )}
            </div>

            {/* Weight Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Weight</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  min="20"
                  max="500"
                />
                <select
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value as 'metric' | 'us')}
                  className="px-3 text-gray-700  py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="metric">kg</option>
                  <option value="us">lbs</option>
                </select>
              </div>
              {errors.weight && (
                <p className="text-sm text-red-500 mt-1">{errors.weight}</p>
              )}
            </div>

            {/* Height Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Height</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="flex-1 text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  min="50"
                  max="300"
                />
                <select
                  value={heightUnit}
                  onChange={(e) => setHeightUnit(e.target.value as 'metric' | 'us')}
                  className="px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="metric">cm</option>
                  <option value="us">in</option>
                </select>
              </div>
              {errors.height && (
                <p className="text-sm text-red-500 mt-1">{errors.height}</p>
              )}
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <label className="block text-gray-700 text-sm font-medium text-gray-700">Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.entries(ACTIVITY_LEVELS).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.activityLevel && (
                <p className="text-sm text-red-500 mt-1">{errors.activityLevel}</p>
              )}
            </div>

            {/* Goal Selection */}
            <div className="space-y-2">
              <label className="block text-gray-700 text-sm font-medium text-gray-700">Fitness Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as 'weight_loss' | 'weight_maintenance' | 'weight_gain')}
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="weight_loss">Weight Loss</option>
                <option value="weight_maintenance">Weight Maintenance</option>
                <option value="weight_gain">Weight Gain</option>
              </select>
              {errors.goal && (
                <p className="text-sm text-red-500 mt-1">{errors.goal}</p>
              )}
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateMacros}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Calculate Macros
            </button>
          </div>
        </div>

        {/* Right Column - Results */}
        <div>
          {calories !== null && (
            <div ref={resultsRef} className="mt-8 p-6 bg-white rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Your Macronutrient Needs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-100 rounded-full p-6 text-center">
                  <div className="text-blue-800 font-semibold text-3xl">{calories}</div>
                  <div className="text-blue-600 text-sm mt-2">Calories</div>
                </div>

                <div className="bg-green-100 rounded-full p-6 text-center">
                  <div className="text-green-800 font-semibold text-3xl">{macros.protein}</div>
                  <div className="text-green-600 text-sm mt-2">Protein</div>
                </div>

                <div className="bg-yellow-100 rounded-full p-6 text-center">
                  <div className="text-yellow-800 font-semibold text-3xl">{macros.carbs}</div>
                  <div className="text-yellow-600 text-sm mt-2">Carbs</div>
                </div>

                <div className="bg-red-100 rounded-full p-6 text-center">
                  <div className="text-red-800 font-semibold text-3xl">{macros.fat}</div>
                  <div className="text-red-600 text-sm mt-2">Fats</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MacroCalculator;