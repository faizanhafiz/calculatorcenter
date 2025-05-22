'use client';

import { useState, useRef } from 'react';

type Unit = 'cm' | 'in';

interface Measurement {
    value: string;
    unit: Unit;
}

const WaistHipCalculator = () => {
    const resultRef = useRef<HTMLDivElement | null>(null);
    const [bust, setBust] = useState<Measurement>({ value: '', unit: 'cm' });
    const [waist, setWaist] = useState<Measurement>({ value: '', unit: 'cm' });
    const [highHip, setHighHip] = useState<Measurement>({ value: '', unit: 'cm' });
    const [hip, setHip] = useState<Measurement>({ value: '', unit: 'cm' });
    const [result, setResult] = useState('');
    const [shape, setShape] = useState('');
    const [whr, setWhr] = useState<number | null>(null);

    const convertToInches = (value: number, unit: Unit) => (unit === 'cm' ? value / 2.54 : value);

    const handleCalculate = () => {
        const bustIn = convertToInches(parseFloat(bust.value), bust.unit);
        const waistIn = convertToInches(parseFloat(waist.value), waist.unit);
        const highHipIn = convertToInches(parseFloat(highHip.value), highHip.unit);
        const hipIn = convertToInches(parseFloat(hip.value), hip.unit);

        if ([bustIn, waistIn, highHipIn, hipIn].some(isNaN)) {
            setResult('Please enter valid numerical values for all measurements.');
            setShape('');
            setWhr(null);
            return;
        }

        const bustHipDiff = Math.abs(bustIn - hipIn);
        const hipsBustDiff = hipIn - bustIn;
        const bustWaistDiff = bustIn - waistIn;
        const hipsWaistDiff = hipIn - waistIn;
        const highHipWaistRatio = highHipIn / waistIn;

        let detectedShape = '';

        if (
            bustHipDiff <= 1 &&
            bustWaistDiff >= 9 &&
            hipsWaistDiff >= 10
        ) {
            detectedShape = 'Hourglass';
        } else if (
            hipsBustDiff >= 3.6 &&
            hipsBustDiff < 10 &&
            hipsWaistDiff >= 9 &&
            highHipWaistRatio < 1.193
        ) {
            detectedShape = 'Bottom Hourglass';
        } else if (
            bustIn - hipIn > 1 &&
            bustIn - hipIn < 10 &&
            bustWaistDiff >= 9
        ) {
            detectedShape = 'Top Hourglass';
        } else if (
            hipsBustDiff > 2 &&
            hipsWaistDiff >= 7 &&
            highHipWaistRatio >= 1.193
        ) {
            detectedShape = 'Spoon';
        } else if (
            hipsBustDiff >= 3.6 &&
            hipsWaistDiff < 9
        ) {
            detectedShape = 'Triangle (Pear)';
        } else if (
            bustIn - hipIn >= 3.6 &&
            bustWaistDiff < 9
        ) {
            detectedShape = 'Inverted Triangle';
        } else if (
            bustHipDiff < 3.6 &&
            bustWaistDiff < 9 &&
            hipsWaistDiff < 10
        ) {
            detectedShape = 'Rectangle';
        } else {
            detectedShape = 'Undefined Body Shape';
        }

        const calculatedWHR = waistIn / hipIn;

        setResult(`Your body shape is: ${detectedShape}. Waist-Hip Ratio: ${calculatedWHR.toFixed(2)}`);
        setShape(detectedShape);
        setWhr(calculatedWHR);
        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const renderInputField = (
        label: string,
        measurement: Measurement,
        setMeasurement: React.Dispatch<React.SetStateAction<Measurement>>
    ) => (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">{label}:</label>
            <div className="flex">
                <input
                    type="number"
                    value={measurement.value}
                    onChange={(e) => setMeasurement({ ...measurement, value: e.target.value })}
                  className="w-full md:w-56 lg:w-64 border border-gray-300 rounded-l px-3 py-2 text-gray-700 text-sm"
                    placeholder={`Enter ${label.toLowerCase()}`}
                />
                <select
                    value={measurement.unit}
                    onChange={(e) => setMeasurement({ ...measurement, unit: e.target.value as Unit })}
                    className="border border-gray-300 rounded-r px-3 py-2 bg-gray-100 text-gray-700 text-sm"
                >
                    <option value="cm">cm</option>
                    <option value="in">in</option>
                </select>
            </div>
        </div>
    );

    const getWHRColor = (ratio: number) => {
        if (ratio < 0.8) return '#10b981';
        if (ratio <= 0.85) return '#f59e0b';
        return '#ef4444';
    };

     return (
  <div className="w-full sm:px-6 flex flex-col lg:flex-row gap-6  justify-center items-start">
    {/* Calculator Section */}
    <div className="w-full max-w-screen-md bg-white shadow-md rounded-md p-6 sm:p-8 flex-1">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Body Type Calculator</h2>

      {renderInputField('Bust Size', bust, setBust)}
      {renderInputField('Waist Size', waist, setWaist)}
      {renderInputField('High Hip Size', highHip, setHighHip)}
      {renderInputField('Hip Size', hip, setHip)}

      <div className="flex justify-center sm:justify-start">
        <button
          onClick={handleCalculate}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 shadow-md"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div
          ref={resultRef}
          role="alert"
          className="mt-6 p-5 rounded-lg border-l-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-500 text-gray-900 shadow-md animate-fadeIn"
          style={{ animationDuration: '0.6s' }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" />
            </svg>
            <h3 className="text-lg font-semibold">Results</h3>
          </div>
          <p className="text-base leading-relaxed">
            Your body shape is: <span className="font-bold text-blue-700">{shape}</span>.
          </p>
          <p className="mt-1">
            Waist-Hip Ratio (WHR):{' '}
            <span
              className={`font-semibold ${
                whr !== null
                  ? whr < 0.8
                    ? 'text-green-600'
                    : whr <= 0.85
                    ? 'text-yellow-600'
                    : 'text-red-600'
                  : ''
              }`}
            >
              {whr !== null ? whr.toFixed(2) : 'N/A'}
            </span>
          </p>
          {whr !== null && (
            <p className="mt-3 text-sm text-gray-700 italic">
              {whr < 0.8
                ? 'Great! Your waist-hip ratio indicates a low health risk.'
                : whr <= 0.85
                ? 'Moderate health risk detected; consider a balanced diet and exercise.'
                : 'High health risk detected; please consult a healthcare professional for advice.'}
            </p>
          )}
        </div>
      )}
    </div>

    {/* Right Info Section */}
    <div className="w-full max-w-screen-sm bg-blue-50 border border-blue-200 p-5 rounded-lg text-gray-800 flex flex-col justify-start flex-1">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Waist-Hip Ratio (WHR) Categories</h3>
      <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
        <li><strong>Low Risk:</strong> WHR less than 0.8</li>
        <li><strong>Moderate Risk:</strong> WHR 0.8 – 0.85</li>
        <li><strong>High Risk:</strong> WHR greater than 0.85</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-700 mb-4">Body Shapes</h3>
      <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
        <li>Hourglass</li>
        <li>Bottom Hourglass</li>
        <li>Top Hourglass</li>
        <li>Spoon</li>
        <li>Triangle (Pear)</li>
        <li>Inverted Triangle</li>
        <li>Rectangle</li>
        <li>Undefined Body Shape</li>
      </ul>

      {whr !== null && (
        <>
          <h4 className="font-semibold mb-2">Your Waist-Hip Ratio Progress</h4>
          <div className="relative w-full h-6 bg-gray-300 rounded-full">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(whr * 100, 100)}%`,
                backgroundColor: getWHRColor(whr),
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Low Risk</span>
            <span>Moderate Risk</span>
            <span>High Risk</span>
          </div>
        </>
      )}
    </div>
  </div>
);

};

export default WaistHipCalculator;
