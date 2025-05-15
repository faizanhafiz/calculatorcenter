'use client';

import { useState } from 'react';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('imperial');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');
  const [age, setAge] = useState('');
  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [showAd, setShowAd] = useState(false);

  const toCm = (value: number) => unit === 'imperial' ? value * 30.48 : value;
  const toKg = (value: number) => unit === 'imperial' ? value * 0.453592 : value;

  const getUnitLabel = (field: string) => {
    if (field === 'weight') return unit === 'imperial' ? 'lbs' : 'kg';
    return unit === 'imperial' ? 'ft' : 'cm';
  };

  const validateInputs = () => {
    const fields: any = { weight, waist, neck, age };
    if (unit) fields['height'] = height;
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

    let h = parseFloat(height);
    const w = parseFloat(weight);
    const wa = parseFloat(waist);
    const ne = parseFloat(neck);
    const hi = parseFloat(hip);
    const a = parseFloat(age);

    const heightCm = toCm(h);
    const waistCm = toCm(wa);
    const neckCm = toCm(ne);
    const hipCm = toCm(hi);
    const weightKg = toKg(w);

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
    `w-full text-gray-900 px-4 py-2 rounded-md border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors[field] ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`;

  const labelStyle = 'block font-medium text-gray-900 mb-1';

  const InputField = ({
    label,
    value,
    setter,
    field,
    placeholder,
    type = 'number',
  }: {
    label: string;
    value: string;
    setter: (value: string) => void;
    field: string;
    placeholder: string;
    type?: string;
  }) => (
    <div>
      <label className={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setter(e.target.value)}
        className={inputStyle(field)}
        placeholder={placeholder}
      />
      {errors[field] && <p className="text-red-500 text-sm">Required and must be &gt; 0</p>}
    </div>
  );

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full bg-white rounded-xl shadow p-6 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Body Fat Calculator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Gender</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center text-gray-900">
                    <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} className="mr-2" />
                    Male
                  </label>
                  <label className="flex items-center text-gray-900">
                    <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} className="mr-2" />
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label className={labelStyle}>Units</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as 'imperial' | 'metric')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900"
                >
                  <option value="imperial">US Units (ft & lbs)</option>
                  <option value="metric">Metric Units (cm & kg)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Age" value={age} setter={setAge} field="age" placeholder="e.g. 25" />
              <InputField label={`Height (${getUnitLabel('height')})`} value={height} setter={setHeight} field="height" placeholder={`e.g. ${unit === 'imperial' ? '5.5' : '170'}`} />
              <InputField label={`Weight (${getUnitLabel('weight')})`} value={weight} setter={setWeight} field="weight" placeholder={`e.g. ${unit === 'imperial' ? '160' : '72.5'}`} />
              <InputField label={`Waist (${getUnitLabel('waist')})`} value={waist} setter={setWaist} field="waist" placeholder={`e.g. ${unit === 'imperial' ? '2.5' : '70'}`} />
              <InputField label={`Neck (${getUnitLabel('neck')})`} value={neck} setter={setNeck} field="neck" placeholder={`e.g. ${unit === 'imperial' ? '1.5' : '35'}`} />
              {gender === 'female' && (
                <InputField label={`Hip (${getUnitLabel('hip')})`} value={hip} setter={setHip} field="hip" placeholder={`e.g. ${unit === 'imperial' ? '2.5' : '90'}`} />
              )}
            </div>

            <button
              onClick={calculateBodyFat}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-md"
            >
              Calculate
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
              <p className="text-gray-600 mt-4">
                Please enter all values and click "Calculate" to see your result.
              </p>
            )}
            <br></br>
            <br></br>

             
  <h2 className="text-lg font-semibold text-blue-700 mb-3">Body Fat Summary</h2>
  <ul className="space-y-2 text-gray-800">
    <li><span className="font-medium">Body Fat (U.S. Navy Method):</span> 15.3%</li>
    <li><span className="font-medium">Body Fat Category:</span> Fitness</li>
    <li><span className="font-medium">Body Fat Mass:</span> 23.2 lbs</li>
    <li><span className="font-medium">Lean Body Mass:</span> 128.8 lbs</li>
    <li><span className="font-medium">Ideal Body Fat for Given Age (Jackson & Pollock):</span> 10.5%</li>
    <li><span className="font-medium">Body Fat to Lose to Reach Ideal:</span> 7.2 lbs</li>
    <li><span className="font-medium">Body Fat (BMI Method):</span> 15.4%</li>
  </ul>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFatCalculator;
