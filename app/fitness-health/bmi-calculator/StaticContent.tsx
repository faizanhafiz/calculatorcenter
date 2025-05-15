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
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">BMI Introduction</h2>
      <p className="text-lg text-gray-700 mb-4">
        A BMI calculator is a helpful tool for assessing whether your weight is appropriate for your height. BMI, or Body Mass Index, is a number derived by dividing a person’s weight by the square of their height. While it doesn’t directly measure body fat or muscle mass, it gives a reliable estimate of body composition and helps categorize individuals into weight classes.
        <br /><br />
        Using a BMI calculator, you can quickly find out if you fall into one of the standard BMI categories: underweight, normal weight, overweight, or obese. These classifications are based on widely recognized health guidelines, although slight variations may exist depending on age, region, or specific health recommendations. In some cases, the categories are more detailed, including terms like "severely underweight" or "very severely obese."
        <br /><br />
        Although the BMI calculator doesn’t replace a professional health assessment, it's widely trusted by doctors, fitness experts, and individuals for a quick check. It’s a simple yet powerful way to understand whether your current weight might require lifestyle adjustments or further medical attention.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">History of BMI</h3>
      <p className="text-lg text-gray-700">
        The BMI or Body Mass Index, was first proposed by a Belgian mathematician and statistician, Adolphe Quetelet in the nineteenth century, wherein he called it the Quetelet Index. The purpose of developing this index was to provide a simple yet systematic method of assessing the average body composition of a given population.
        <br /><br />
        In the 1970s, the needle shifted in measuring and quantifying the body composition of individualistic populations. It was during the Seven Countries Study when several researchers noted that BMI could be an effective substitute for body fat (adiposity) and was associated with health issues stemming from excess weight or obesity. This helped in the universal acceptance of BMI as a tool in public health and clinical infrastructure.
        <br /><br />
        There is no question about the popularity, however, the BMI calculator comes with its cons. Observing it from a holistic point of view, one might miss that it only takes into consideration height and weight and ignores other important aspects like age, sex, or muscle mass which have significant relevance to body composition. Because of these factors, BMI tends to overestimate fat in athletes and underestimate in people of advanced age or those with lesser muscle mass.
        <br /><br />
        To improve reliability, BMI is often associated with other waist-measurement ratios such as waist circumference (WC), when combined offer a deeper dive regarding an individual's health risks. That being said, one must be careful since measuring waist circumference requires scientific expertise and shouldn’t be trusted in the hands untrained personnel.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">BMI Formula:</h3>
      <p className="text-lg text-gray-700"><strong>Metric units:</strong></p>
      <div className="text-black text-center overflow-auto" dangerouslySetInnerHTML={renderLatex(`\\text{BMI} = \\frac{\\text{Weight (kg)}}{\\text{Height (m)}^2}`)} />

      <p className="text-lg text-gray-700 mt-4"><strong>US units:</strong></p>
      <div className="text-black text-center overflow-auto" dangerouslySetInnerHTML={renderLatex(`\\text{BMI} = \\frac{\\text{Weight (lbs)} \\times 703}{\\text{Height (in)}^2}`)} />

      <h3 className="text-xl font-semibold text-gray-800 mt-6">BMI Categories:</h3>
      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
        <li><strong>Underweight:</strong> BMI less than 18.5</li>
        <li><strong>Normal weight:</strong> BMI between 18.5 and 24.9</li>
        <li><strong>Overweight:</strong> BMI between 25 and 29.9</li>
        <li><strong>Obese:</strong> BMI of 30 or greater</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">BMI Table for Adults</h3>
      <p className="text-lg text-gray-700 mb-4">
        The BMI calculator follows the World Health Organization’s (WHO) guidelines for healthy body weight.
        This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.
      </p>

      <div className="w-full flex justify-center overflow-x-auto mb-6">
        <table className="table-auto border border-gray-300 text-center">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">BMI range - kg/m²</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr><td className="border border-gray-300 px-4 py-2">Severe Thinness</td><td className="border border-gray-300 px-4 py-2">&lt; 16</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Moderate Thinness</td><td className="border border-gray-300 px-4 py-2">16 - 17</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Mild Thinness</td><td className="border border-gray-300 px-4 py-2">17 - 18.5</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Normal</td><td className="border border-gray-300 px-4 py-2">18.5 - 25</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Overweight</td><td className="border border-gray-300 px-4 py-2">25 - 30</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Obese Class I</td><td className="border border-gray-300 px-4 py-2">30 - 35</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Obese Class II</td><td className="border border-gray-300 px-4 py-2">35 - 40</td></tr>
            <tr><td className="border border-gray-300 px-4 py-2">Obese Class III</td><td className="border border-gray-300 px-4 py-2">&gt; 40</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Why is BMI Important?</h3>
      <p className="text-lg text-gray-700 mb-6">
        BMI is a useful tool for identifying potential health risks related to being underweight or overweight. While it does not measure body fat directly,
        it provides a quick estimate of whether an individual's weight may be in a healthy range. It is often used as an initial screening tool before more
        detailed assessments are conducted by healthcare professionals.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Why BMI Isn't the Whole Story</h3>
      <p className="text-lg text-gray-700 mb-4">
        BMI (Body Mass Index) is a convenient method to apply weight and height to categorize whether an individual is obese, overweight, normal weight, or underweight. It's simple to calculate, yet it has significant limitations. Key reasons why BMI can be deceptive and should not be the sole indicator of health are listed below:
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
        <li><strong>Muscle vs. Fat:</strong> BMI considers all weight equal. A very muscular individual can have a high BMI even with nearly no extra fat. For instance, many top athletes fall into the "overweight" BMI category despite being lean. Conversely, an inactive or older person may have a "normal" BMI but still carry a high percentage of body fat.</li>
        <li><strong>Fat Distribution:</strong> BMI does not reflect where fat is located. Abdominal fat (visceral fat) is more strongly linked to health risks like diabetes and heart disease compared to fat stored around the hips or thighs.</li>
        <li><strong>Age, Sex, and Ethnicity:</strong> BMI uses a single formula and cutoffs for all individuals. However, age, sex, and ethnicity all influence body composition. Older adults may lose muscle and gain fat without much weight change, women naturally carry more fat than men, and ethnic groups (e.g., Asians) may face health risks at lower BMIs.</li>
      </ul>

      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-blue-800">FAQs about BMI</h2>
<p className="text-center text-gray-600 mb-8">Discover solutions to commonly asked questions about BMI and its relevance to health.</p>

<div className="space-y-4 max-w-4xl mx-auto">
  {[
    {
      question: "What is BMI and how is it calculated?",
      answer: (
        <>
          BMI stands for <em>Body Mass Index</em>, a number that estimates how much body fat you have based on your height and weight.
          <br />
          <strong>Metric:</strong> BMI = weight (kg) / [height (m)]²<br />
          <strong>US:</strong> BMI = 703 × weight (lb) / [height (in)]²<br />
          Example: A person 1.7 m tall and 70 kg in weight has a BMI of about 24.2.
        </>
      ),
    },
    {
      question: "What do my BMI results mean (weight categories)?",
      answer: (
        <>
          For adults, BMI is interpreted using standard categories:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li><strong>Underweight:</strong> BMI less than 18.5</li>
            <li><strong>Normal (healthy) weight:</strong> BMI 18.5–24.9</li>
            <li><strong>Overweight:</strong> BMI 25.0–29.9</li>
            <li><strong>Obese:</strong> BMI 30.0 or higher</li>
          </ul>
        </>
      ),
    },
    {
      question: "Are BMI calculations different for men, women, or children?",
      answer: "For adults, BMI is calculated and interpreted the same way for men and women. For children and teens (ages 2–19), BMI is interpreted using age- and sex-specific growth charts (percentiles).",
    },
    {
      question: "How accurate is BMI and what are its limitations?",
      answer: "BMI is a quick, inexpensive screening tool, but it has limitations. It does not directly measure fat or health status. For example, a muscular person may have a high BMI but low body fat. BMI should be used along with other indicators like waist circumference, diet, and activity.",
    },
    {
      question: "What health risks are linked to high or low BMI?",
      answer: "A high BMI (overweight/obese) is associated with risks like high blood pressure, type 2 diabetes, heart disease, and some cancers. A low BMI (underweight) can indicate malnutrition and may lead to issues like weakened immunity and osteoporosis.",
    },
    {
      question: "Who should or shouldn’t use a BMI calculator?",
      answer: "Standard BMI is for non-pregnant adults ages 18–65. Children and teens should use BMI-for-age charts. Pregnant women and elderly individuals should consult a healthcare provider, as BMI may not reflect their health accurately.",
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
