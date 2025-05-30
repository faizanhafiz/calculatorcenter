
const StaticContent = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="space-y-8">
        {/* Understanding Macronutrients */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Macronutrients (Macros)</h3>
          <p className="text-gray-600 mb-6">
            Macronutrients are essential nutrients that provide bulk energy for the human body. They include carbohydrates, proteins, and fats. Each macronutrient plays a crucial role in maintaining optimal health and supporting various bodily functions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Protein Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Protein</h4>
              <p className="text-gray-600 mb-3">
                Proteins are organic compounds made up of amino acids, essential for muscle repair, growth, and hormone production. They are vital for maintaining lean body mass and overall health.
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">Healthy protein sources:</strong> Soy, beans, nuts, fish, skinless poultry, lean beef, pork, and low-fat dairy products.
              </p>
            </div>

            {/* Carbohydrates Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-green-600 mb-4">Carbohydrates</h4>
              <p className="text-gray-600 mb-3">
                Carbohydrates are the body's primary energy source, classified as simple (sugars) or complex (starches and fiber). They are essential for brain function and physical activity.
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">Healthy carbohydrate sources:</strong> Vegetables, fruits, whole grains, and legumes.
              </p>
            </div>

            {/* Fats Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-red-600 mb-4">Fats</h4>
              <p className="text-gray-600 mb-3">
                Fats are energy-dense molecules essential for cell structure, hormone production, and vitamin absorption. They are the most efficient form of energy storage in the body.
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">Healthy fat sources:</strong> Monounsaturated and polyunsaturated fats, omega-3 fatty acids, and limited saturated fats.
              </p>
            </div>
          </div>
        </div>

        {/* Activity Levels */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Activity Levels and Calorie Needs</h3>
          <p className="text-gray-600 mb-6">
            Your activity level significantly impacts your daily calorie needs and macronutrient requirements. The calculator uses activity multipliers to estimate your Total Daily Energy Expenditure (TDEE).
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Sedentary (little or no exercise) - Multiplier: 1.2</li>
            <li>Lightly active (light exercise/sports 1-3 days/week) - Multiplier: 1.375</li>
            <li>Moderately active (moderate exercise/sports 3-5 days/week) - Multiplier: 1.55</li>
            <li>Very active (hard exercise/sports 6-7 days a week) - Multiplier: 1.725</li>
            <li>Extra active (very hard exercise/job, physical job) - Multiplier: 1.9</li>
          </ul>
          <p className="text-gray-600 mt-4">
            More active individuals generally require higher calorie intake to support their energy needs, while sedentary individuals need fewer calories to maintain weight.
          </p>
        </div>

        {/* Fitness Goals */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fitness Goals and Macronutrient Distribution</h3>
          <p className="text-gray-600 mb-6">
            Your fitness goals determine the optimal macronutrient distribution for your needs. The calculator provides personalized macronutrient ratios based on your specific goals.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>
              <strong className="text-gray-900">Weight Loss:</strong>
              Protein: 40% | Carbs: 40% | Fat: 20%
            </li>
            <li>
              <strong className="text-gray-900">Weight Maintenance:</strong>
              Protein: 30% | Carbs: 50% | Fat: 20%
            </li>
            <li>
              <strong className="text-gray-900">Weight Gain:</strong>
              Protein: 25% | Carbs: 55% | Fat: 20%
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            These ratios are based on widely accepted nutritional guidelines and can be adjusted based on personal preferences and dietary needs.
          </p>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h3>
          <p className="text-center text-gray-600 mb-8">Comprehensive answers about macronutrients and their importance in your diet.</p>
          <div className="space-y-6">
            {[
              {
                question: "What are macronutrients?",
                answer: "Macronutrients are the essential nutrients that provide bulk energy for the human body. They include carbohydrates, proteins, and fats. Each plays a crucial role in maintaining health and supporting bodily functions."
              },
              {
                question: "How does the calculator determine my macronutrient needs?",
                answer: "The calculator uses the Mifflin-St Jeor Equation and Katch-McArdle Formula to estimate your Basal Metabolic Rate (BMR) or Resting Daily Energy Expenditure (RDEE). It then adjusts for your activity level and fitness goals to provide personalized macronutrient recommendations."
              },
              {
                question: "How important are macronutrient ratios?",
                answer: "Macronutrient ratios are crucial for achieving specific fitness goals. Different ratios affect energy levels, muscle growth, and weight management. The right balance depends on your individual needs and lifestyle."
              },
              {
                question: "What are healthy sources of macronutrients?",
                answer: "Healthy protein sources include soy, beans, nuts, and lean meats. Complex carbohydrates come from vegetables, fruits, and whole grains. Healthy fats include monounsaturated, polyunsaturated fats, and omega-3 fatty acids."
              },
              {
                question: "How accurate is this calculator?",
                answer: "The calculator provides estimates based on widely accepted nutritional guidelines. Individual needs may vary based on factors like metabolism, genetics, and specific health conditions. Consult with a healthcare professional for personalized advice."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <summary className="text-lg font-semibold text-blue-600 cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-blue-50 rounded-md">
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
                <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticContent;