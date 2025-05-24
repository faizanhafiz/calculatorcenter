''
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
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Understanding Calorie Needs</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our calorie calculator uses the Mifflin-St Jeor Equation, which is considered one of the most accurate formulas for estimating daily calorie needs. This equation takes into account your basal metabolic rate (BMR) and your activity level to provide a personalized calorie recommendation.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">The Mifflin-St Jeor Equation</h3>
      <p className="text-lg text-gray-700">
        The Mifflin-St Jeor Equation was developed in 1990 by Mifflin and St. Jeor and is considered one of the most accurate formulas for estimating basal metabolic rate (BMR). The equation is widely used by nutritionists and healthcare professionals because it provides more accurate results than older formulas like the Harris-Benedict equation.
        <br /><br />
        The formula takes into account age, weight, height, and gender to calculate BMR, which is then adjusted based on your activity level to determine your total daily energy expenditure (TDEE).
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Mifflin-St Jeor Formula:</h3>
      <p className="text-lg text-gray-700"><strong>For Men:</strong></p>
      <div className="text-black text-center overflow-auto" dangerouslySetInnerHTML={renderLatex(`{BMR} = 10 \* {weight(Kg)} + 6.25 \* {height(cm)} - 5 \* {age(years)} + 5`)}/>

      <p className="text-lg text-gray-700 mt-4"><strong>For Women:</strong></p>
      <div className="text-black text-center overflow-auto" dangerouslySetInnerHTML={renderLatex(`{BMR} = 10 \* {weight(Kg)} + 6.25 \* {height(cm)} - 5 \* {age(years)} - 161`)}/>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Activity Levels:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
        <li><strong>Sedentary (little or no exercise):</strong> BMR x 1.2</li>
        <li><strong>Lightly active (light exercise/sports 1-3 days/week):</strong> BMR x 1.375</li>
        <li><strong>Moderately active (moderate exercise/sports 3-5 days/week):</strong> BMR x 1.55</li>
        <li><strong>Very active (hard exercise/sports 6-7 days a week):</strong> BMR x 1.725</li>
        <li><strong>Extra active (very hard exercise/sports & physical job or 2x training):</strong> BMR x 1.9</li>
      </ul>

     
     
      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-blue-800">Frequently Asked Questions (FAQs)</h2>
      <p className="text-center text-gray-600 mb-8">Get answers to common questions about calorie calculation and weight management.</p>

      <div className="space-y-6 max-w-4xl mx-auto">
        {[
          {
            question: "How do I use a calorie calculator?",
            answer: "You'll need to input your age, gender, height, weight, and activity level (e.g., sedentary, moderately active). The calculator will then estimate your BMR and TDEE.",
          },
          {
            question: "What is BMR?",
            answer: "BMR (Basal Metabolic Rate) is the number of calories your body burns at rest to maintain basic bodily functions.",
          },
          {
            question: "What is TDEE?",
            answer: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns daily, including BMR and activity.",
          },
          {
            question: "How do I calculate a calorie deficit?",
            answer: "To lose weight, you need to burn more calories than you consume. A calorie deficit is the difference between your TDEE and your daily calorie intake. For example, if your TDEE is 2000 calories and you eat 1500 calories, you have a 500-calorie deficit.",
          },
          {
            question: "How many calories should I eat for breakfast, lunch, or dinner?",
            answer: "General recommendations suggest women aim for around 2,000 calories daily, and men around 2,500, but individual needs vary.",
          },
          {
            question: "Why am I not losing weight even with a calorie deficit?",
            answer: "Weight loss can be influenced by factors beyond just calorie intake, including the types of food you eat, how full you feel, and psychological, environmental, and social factors.",
          },
          {
            question: "How accurate is a calorie calculator?",
            answer: "Calorie calculators provide estimates, and individual results may vary. Some experts suggest that calorie calculators can be an accurate way to determine a person's daily calorie usage.",
          },
        ].map((faq, idx) => (
          <details
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <summary className="text-lg font-semibold text-blue-900 cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-blue-50 rounded-xl">
              <span>{faq.question}</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 text-blue-600 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
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


    </section>
  );
};

export default StaticContent;
