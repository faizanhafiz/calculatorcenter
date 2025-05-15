 import katex from 'katex';
import 'katex/dist/katex.min.css';

const renderLatex = (latex: string) => {
  return {
    __html: katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
    }),
  };
};

const StaticContent = () => {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Body Fat Percentage</h2>

      <p className="text-gray-700 mb-4">
        Your body fat percentage serves as a crucial health marker, providing valuable insight into your overall wellbeing. Elevated body fat levels significantly increase susceptibility to various chronic conditions, including cardiovascular disease, type 2 diabetes, and metabolic disorders.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Optimal Body Fat Ranges for Health:</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><span className="font-semibold">Men</span> should strive to maintain <span className="font-semibold">15% body fat or less</span></li>
        <li><span className="font-semibold">Women</span> should target <span className="font-semibold">25% body fat or less</span></li>
      </ul>

      <p className="text-gray-700">
        These thresholds represent the upper limits for maintaining optimal metabolic health and physical function. Individuals with athletic training or specific fitness goals may maintain lower percentages, though extremely low body fat can also present health concerns.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Why Does Body Fat Percentage Matter?</h3>
      <ol className="list-decimal pl-6 text-gray-700 space-y-2">
        <li>
          <span className="font-semibold">Better Health Indicator Than BMI</span>
          <ul className="list-disc pl-6 mt-1">
            <li>BMI doesn’t distinguish between fat and muscle. A muscular person could be classified as "overweight" despite having low body fat.</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Helps Track Fitness Progress</span>
          <ul className="list-disc pl-6 mt-1">
            <li>Losing fat while gaining muscle may not change your weight much, but your body composition improves.</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Reduces Risk of Chronic Diseases</span>
          <ul className="list-disc pl-6 mt-1">
            <li>Excess body fat (especially visceral fat around organs) is linked to diabetes, heart disease, and metabolic disorders.</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">How to Lower Body Fat Percentage</h3>
      <ol className="list-decimal pl-6 text-gray-700 space-y-1">
        <li><span className="font-semibold">Strength Training</span> – Builds muscle, which boosts metabolism.</li>
        <li><span className="font-semibold">High-Protein Diet</span> – Helps retain muscle while losing fat.</li>
        <li><span className="font-semibold">Cardio & HIIT</span> – Burns calories and improves fat loss.</li>
        <li><span className="font-semibold">Sleep & Stress Management</span> – Poor sleep and high cortisol increase fat storage.</li>
        <li><span className="font-semibold">Avoid Crash Diets</span> – Rapid weight loss often means losing muscle, not just fat.</li>
      </ol>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Measuring Body Fat Percentage</h3>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">U.S. Navy Method:</span> This method uses circumference measurements and has been adopted by the Naval Health Research Center. Follow these steps:
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
        <li>Measure the circumference of the subject's waist at a horizontal level around the navel for men, and at the smallest width for women.</li>
        <li>Record the circumference of the neck just below the larynx, with the tape sloping downward to the front.</li>
        <li>Measure height standing straight without shoes.</li>
        <li><span className="font-semibold">For women only:</span> Measure the circumference of the hips at the largest horizontal measure.</li>
      </ul>

      <h4 className="text-md font-semibold text-gray-800 mt-4 mb-1">Body Fat Percentage (BFP) Formula for Males:</h4>

      <div className="mb-2">
        <p className="text-gray-700 mb-1 font-semibold">USC Units:</p>
        <div className="overflow-x-auto">
          <div className="bg-gray-50 text-black text-base p-2 rounded inline-block min-w-fit" dangerouslySetInnerHTML={renderLatex(String.raw`BFP = 86.010 \cdot \log_{10}(\text{abdomen} - \text{neck}) - 70.041 \cdot \log_{10}(\text{height}) + 36.76`)} />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 mb-1 font-semibold">SI, Metric Units:</p>
        <div className="overflow-x-auto">
          <div className="bg-gray-50 text-black text-base p-2 rounded inline-block min-w-fit" dangerouslySetInnerHTML={renderLatex(String.raw`BFP = \left(\frac{495}{1.0324 - 0.19077 \cdot \log_{10}(\text{waist} - \text{neck}) + 0.15456 \cdot \log_{10}(\text{height})}\right) - 450`)} />
        </div>
      </div>

      <h4 className="text-md font-semibold text-gray-800 mt-4 mb-1">Body Fat Percentage (BFP) Formula for Females:</h4>

      <div className="mb-2">
        <p className="text-gray-700 mb-1 font-semibold">USC Units:</p>
        <div className="overflow-x-auto">
          <div className="bg-gray-50 text-black text-base p-2 rounded inline-block min-w-fit" dangerouslySetInnerHTML={renderLatex(String.raw`BFP = 163.205 \cdot \log_{10}(\text{waist} + \text{hip} - \text{neck}) - 97.684 \cdot \log_{10}(\text{height}) - 78.387`)} />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 mb-1 font-semibold">SI, Metric Units:</p>
        <div className="overflow-x-auto">
          <div className="bg-gray-50 text-black text-base p-2 rounded inline-block min-w-fit" dangerouslySetInnerHTML={renderLatex(String.raw`BFP = \left(\frac{495}{1.29579 - 0.35004 \cdot \log_{10}(\text{waist} + \text{hip} - \text{neck}) + 0.22100 \cdot \log_{10}(\text{height})}\right) - 450`)} />
        </div>
      </div>

      <h4 className="text-md font-semibold text-gray-800 mt-4 mb-1">Fat Mass (FM) & Lean Mass (LM) Formulas:</h4>

      <div className="mb-2">
        <p className="text-gray-700 mb-1 font-semibold">USC Units:</p>
        <div className="overflow-x-auto">
          <div className="bg-gray-50 text-black text-base p-2 rounded inline-block min-w-fit" dangerouslySetInnerHTML={renderLatex(String.raw`FM = \frac{BFP}{100} \times \text{Weight}`)} />
        </div>
      </div>

      <div className="mb-2">
        <p className="text-gray-700 mb-1 font-semibold">SI, Metric Units:</p>
        <div className="overflow-x-auto">
          <div className="bg-gray-50 text-black text-base p-2 rounded inline-block min-w-fit" dangerouslySetInnerHTML={renderLatex(String.raw`LM = \text{Weight} - FM`)} />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-blue-800">FAQs about Body Fat Percentage</h2>
      <p className="text-center text-gray-600 mb-8">Discover solutions to commonly asked questions about Body Fat Percentage and its relevance to health.</p>

      <div className="space-y-4 max-w-4xl mx-auto">
        {[
          {
            question: "What is a healthy body fat percentage?",
            answer: <>A healthy body fat percentage varies by gender and age. For men, 10-20% is generally fit, while women typically range between 18-28%. Athletes may have lower percentages, but going too low can be unhealthy</>,
          },
          {
            question: "How is body fat percentage different from BMI?",
            answer: <>The most accurate methods are DEXA scans, hydrostatic weighing, and Bod Pod tests. However, skinfold calipers and bioelectrical impedance scales (like smart scales) are more accessible and can still be useful for tracking trends.</>,
          },
          {
            question: "Can I have too little body fat?",
            answer: <>Yes! <strong>Essential fat</strong> is necessary for hormone regulation, organ protection, and overall health. For men, dropping below 3-5% and women below 10-13% can lead to health issues like hormonal imbalances, weakened immunity, and organ dysfunction.</>,
          },
          {
            question: " Why does body fat percentage matter more than weight?",
            answer: <>Weight doesn’t distinguish between fat, muscle, and water. Two people can weigh the same but have very different body compositions—one could be lean and muscular, while the other could have higher fat levels.</>,
          },
          {
            question: "How can I lower my body fat percentage?",
            answer: (
              <ul className="list-disc list-inside mt-2 ml-4">
                <li><strong>Strength training</strong> (to preserve muscle)</li>
                <li><strong>High-protein diet</strong> (to support fat loss and muscle retention)</li>
                <li><strong>Cardio & HIIT</strong> (to burn calories)</li>
                <li><strong>Adequate sleep & stress management</strong> (high cortisol promotes fat storage)</li>
              </ul>
            ),
          },
          {
            question: " Does age affect body fat percentage?",
            answer: "Yes, as we age, muscle mass tends to decrease (sarcopenia), and fat percentage may increase even if weight stays the same. Strength training and proper nutrition can help counteract this.",
          },
        ].map((faq, idx) => (
          <details
            key={idx}
            className="bg-gray-50 border border-blue-200 rounded-xl shadow-sm open:shadow-md transition-shadow duration-300"
          >
            <summary className="text-lg font-semibold text-blue-900 cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-blue-50 rounded-xl">
              <span>{faq.question}</span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 text-blue-600 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-4 pt-2 text-gray-800 text-base">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default StaticContent;
