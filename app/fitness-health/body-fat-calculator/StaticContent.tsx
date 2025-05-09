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
        A BMI calculator is a helpful tool for assessing whether your weight is appropriate for your height. BMI, or Body Mass Index, is a number derived by dividing a person&rsquo;s weight by the square of their height. While it doesn&rsquo;t directly measure body fat or muscle mass, it gives a reliable estimate of body composition and helps categorize individuals into weight classes. <br /><br />
        Using a BMI calculator, you can quickly find out if you fall into one of the standard BMI categories: underweight, normal weight, overweight, or obese. These classifications are based on widely recognized health guidelines, although slight variations may exist depending on age, region, or specific health recommendations. In some cases, the categories are more detailed, including terms like &quot;severely underweight&quot; or &quot;very severely obese.&quot; <br /><br />
        Although the BMI calculator doesn&rsquo;t replace a professional health assessment, it&apos;s widely trusted by doctors, fitness experts, and individuals for a quick check. It&rsquo;s a simple yet powerful way to understand whether your current weight might require lifestyle adjustments or further medical attention.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">History of BMI</h3>
      <p className="text-lg text-gray-700">
        The BMI or Body Mass Index, was first proposed by a Belgian mathematician and statistician, Adolphe Quetelet in the nineteenth century, wherein he called it the Quetelet Index. The purpose of developing this index was to provide a simple yet systematic method of assessing the average body composition of a given population.
        <br /><br />
        In the 1970s, the needle shifted in measuring and quantifying the body composition of individualistic populations. It was during the Seven Countries Study when several researchers noted that BMI could be an effective substitute for body fat (adiposity) and was associated with health issues stemming from excess weight or obesity. This helped in the universal acceptance of BMI as a tool in public health and clinical infrastructure.
        <br /><br />
        There is no question about the popularity, however, the BMI calculator comes with its cons. Observing it from a holistic point of view, one might miss that it only takes into consideration height and weight and ignores other important aspects like age, sex, or muscle mass which have significant relevance to body composition. Because of these factors, BMI tends to overestimate fat in athletes and underestimate in people of advanced age or those with lesser muscle mass.
        <br /><br />
        To improve reliability, BMI is often associated with other waist-measurement ratios such as waist circumference (WC), when combined offer a deeper dive regarding an individual&apos;s health risks. That being said, one must be careful since measuring waist circumference requires scientific expertise and shouldn&rsquo;t be trusted in the hands of untrained personnel.
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
        The BMI calculator follows the World Health Organization&rsquo;s (WHO) guidelines for healthy body weight.
        This is the World Health Organization&apos;s (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.
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
        it provides a quick estimate of whether an individual&apos;s weight may be in a healthy range. It is often used as an initial screening tool before more
        detailed assessments are conducted by healthcare professionals.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Why BMI Isn&apos;t the Whole Story</h3>
      <p className="text-lg text-gray-700 mb-4">
        BMI (Body Mass Index) is a convenient method to apply weight and height to categorize whether an individual is obese, overweight, normal weight, or underweight. It&apos;s simple to calculate, yet it has significant limitations. Key reasons why BMI can be deceptive and should not be the sole indicator of health are listed below:
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
        <li><strong>Muscle vs. Fat:</strong> BMI considers all weight equal. A very muscular individual can have a high BMI even with nearly no extra fat. For instance, many top athletes fall into the &quot;overweight&quot; BMI category despite being lean. Conversely, an inactive or older person may have a &quot;normal&quot; BMI but still carry a high percentage of body fat.</li>
        <li><strong>Fat Distribution:</strong> BMI does not reflect where fat is located. Abdominal fat (visceral fat) is more strongly linked to health risks like diabetes and heart disease compared to fat stored around the hips or thighs.</li>
        <li><strong>Age, Sex, and Ethnicity:</strong> BMI uses a single formula and cutoffs for all individuals. However, age, sex, and ethnicity all influence body composition. Older adults may lose muscle and gain fat without much weight change, women naturally carry more fat than men, and ethnic groups (e.g., Asians) may face health risks at lower BMIs.</li>
      </ul>

      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-blue-800">FAQs about BMI</h2>

      <p className="text-center text-gray-600 mb-8">Discover solutions to commonly asked questions about BMI and its relevance to health.</p>

      {/* The FAQ section below remains as-is, since all strings are JSX or safely inside elements */}
    </section>
  );
};

export default StaticContent;
