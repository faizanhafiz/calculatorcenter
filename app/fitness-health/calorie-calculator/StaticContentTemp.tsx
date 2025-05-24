import katex from 'katex';
import 'katex/dist/katex.min.css';
import React from 'react';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const renderLatex = (latex: string) => {
  return {
    __html: katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
    }),
  };
};

const StaticContent = () => {
  const faqs: FAQ[] = [
    {
      question: "What is BMI and how is it calculated?",
      answer: (
        <div className="space-y-2">
          <p>BMI stands for <em>Body Mass Index</em>, a number that estimates how much body fat you have based on your height and weight.</p>
          <p><strong>Metric:</strong> BMI = weight (kg) / [height (m)]²</p>
          <p><strong>US:</strong> BMI = 703 × weight (lb) / [height (in)]²</p>
          <p>Example: A person 1.7 m tall and 70 kg in weight has a BMI of about 24.2.</p>
        </div>
      ),
    },
    {
      question: "What do my BMI results mean (weight categories)?",
      answer: (
        <div className="space-y-2">
          <p>For adults, BMI is interpreted using standard categories:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Underweight:</strong> BMI less than 18.5</li>
            <li><strong>Normal (healthy) weight:</strong> BMI 18.5–24.9</li>
            <li><strong>Overweight:</strong> BMI 25.0–29.9</li>
            <li><strong>Obese:</strong> BMI 30.0 or higher</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Are BMI calculations different for men, women, or children?",
      answer: (
        <div className="space-y-2">
          <p>For adults, BMI is calculated and interpreted the same way for men and women. For children and teens (ages 2–19), BMI is interpreted using age- and sex-specific growth charts (percentiles).</p>
        </div>
      ),
    },
    {
      question: "How accurate is BMI and what are its limitations?",
      answer: (
        <div className="space-y-2">
          <p>BMI is a quick, inexpensive screening tool, but it has limitations. It does not directly measure fat or health status. For example, a muscular person may have a high BMI but low body fat. BMI should be used along with other indicators like waist circumference, diet, and activity.</p>
        </div>
      ),
    },
    {
      question: "What health risks are linked to high or low BMI?",
      answer: (
        <div className="space-y-2">
          <p>A high BMI (overweight/obese) is associated with risks like high blood pressure, type 2 diabetes, heart disease, and some cancers. A low BMI (underweight) can indicate malnutrition and may lead to issues like weakened immunity and osteoporosis.</p>
        </div>
      ),
    },
    {
      question: "Who should or shouldn't use a BMI calculator?",
      answer: (
        <div className="space-y-2">
          <p>Standard BMI is for non-pregnant adults ages 18–65. Children and teens should use BMI-for-age charts. Pregnant women and elderly individuals should consult a healthcare provider, as BMI may not reflect their health accurately.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Understanding Calorie Needs</h2>
      <p className="text-lg text-gray-700 mb-4">
        A calorie calculator helps you determine your daily energy needs based on your age, gender, weight, height, and activity level. This information is crucial for maintaining a healthy weight, losing weight, or gaining muscle mass.
        <br /><br />
        Our calculator uses the Mifflin-St Jeor Equation, which is considered one of the most accurate formulas for estimating daily calorie needs. This equation takes into account your basal metabolic rate (BMR) and your activity level to provide a personalized calorie recommendation.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">The Mifflin-St Jeor Equation</h3>
      <p className="text-lg text-gray-700">
        The Mifflin-St Jeor Equation was developed in 1990 by Mifflin and St. Jeor and is considered one of the most accurate formulas for estimating basal metabolic rate (BMR). The equation is widely used by nutritionists and healthcare professionals because it provides more accurate results than older formulas like the Harris-Benedict equation.
        <br /><br />
        The formula takes into account age, weight, height, and gender to calculate BMR, which is then adjusted based on your activity level to determine your total daily energy expenditure (TDEE).
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Mifflin-St Jeor Formula:</h3>
      <p className="text-lg text-gray-700"><strong>For Men:</strong></p>
      <div className="text-black text-center overflow-auto" dangerouslySetInnerHTML={renderLatex(`\text{BMR} = 10 \times \text{Weight (kg)} + 6.25 \times \text{Height (cm)} - 5 \times \text{Age (years)} + 5`)} />

      <p className="text-lg text-gray-700 mt-4"><strong>For Women:</strong></p>
      <div className="text-black text-center overflow-auto" dangerouslySetInnerHTML={renderLatex(`\text{BMR} = 10 \times \text{Weight (kg)} + 6.25 \times \text{Height (cm)} - 5 \times \text{Age (years)} - 161`)} />

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Activity Levels:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
        <li><strong>Sedentary (little or no exercise):</strong> BMR x 1.2</li>
        <li><strong>Lightly active (light exercise/sports 1-3 days/week):</strong> BMR x 1.375</li>
        <li><strong>Moderately active (moderate exercise/sports 3-5 days/week):</strong> BMR x 1.55</li>
        <li><strong>Very active (hard exercise/sports 6-7 days a week):</strong> BMR x 1.725</li>
        <li><strong>Extra active (very hard exercise/sports & physical job or 2x training):</strong> BMR x 1.9</li>
      </ul>

      <h2 className="text-3xl font-bold text-center mt-12 mb-8 text-blue-800">Frequently Asked Questions (FAQs)</h2>
      <p className="text-center text-gray-600 mb-8">Get answers to common questions about calorie calculation and weight management.</p>

      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq: FAQ, idx: number) => (
            <details
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <summary className="text-lg font-semibold text-blue-900 cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-blue-50 rounded-xl">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 text-blue-600 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 pt-2 text-gray-700 text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaticContent;
