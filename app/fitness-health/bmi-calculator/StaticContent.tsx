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

      <h3 className="text-xl font-semibold text-gray-800 mt-6">FAQs about BMI</h3>
      <dl className="text-lg text-gray-700">
        <dt className="font-semibold">What is BMI and how is it calculated?</dt>
        <dd className="mb-4">BMI stands for <em>Body Mass Index</em>, a number that estimates how much body fat you have based on your height and weight. It is calculated by dividing your weight by the square of your height. In metric units: BMI = weight (kg) / [height (m)]²; in U.S. units: BMI = 703 × weight (lb) / [height (in)]². For example, a person 1.7 m tall and 70 kg in weight has a BMI of about 24.2.</dd>

        <dt className="font-semibold">What do my BMI results mean (weight categories)?</dt>
        <dd className="mb-4">
          For adults, BMI is interpreted using standard categories:
          <ul className="list-disc list-inside">
            <li><strong>Underweight:</strong> BMI less than 18.5</li>
            <li><strong>Normal (healthy) weight:</strong> BMI 18.5–24.9</li>
            <li><strong>Overweight:</strong> BMI 25.0–29.9</li>
            <li><strong>Obese:</strong> BMI 30.0 or higher</li>
          </ul>
        </dd>

        <dt className="font-semibold">Are BMI calculations different for men, women, or children?</dt>
        <dd className="mb-4">For adults, BMI is calculated and interpreted the same way for men and women. However, for children and teens (ages 2–19), BMI is interpreted using age- and sex-specific growth charts (percentiles) instead of the adult categories.</dd>

        <dt className="font-semibold">How accurate is BMI and what are its limitations?</dt>
        <dd className="mb-4">BMI is a quick, inexpensive screening tool, but it has limitations. It correlates with body fat for most people, but it is not a direct measure of fat or health. For example, a very muscular person may have a high BMI even with little body fat. In general, BMI should be used together with other measures (waist circumference, diet, activity level, etc.) for a complete health assessment.</dd>

        <dt className="font-semibold">What health risks are linked to high or low BMI?</dt>
        <dd className="mb-4">A high BMI (overweight/obese) is associated with increased risk of health problems like high blood pressure, type 2 diabetes, heart disease, stroke, and certain cancers. A low BMI (underweight) can indicate malnutrition or other issues, and is linked to problems such as weakened immunity, osteoporosis, and fatigue.</dd>

        <dt className="font-semibold">Who should or shouldn’t use a BMI calculator?</dt>
        <dd className="mb-4">Standard BMI calculation is designed for non-pregnant adults roughly 18–65 years old. Children and teens should use BMI-for-age percentile charts instead of the adult BMI cutoffs. Pregnant women and very elderly people should not rely on BMI alone, since pregnancy and age-related changes can affect weight. People with any health concerns should consult a healthcare provider for personalized advice.</dd>
      </dl>
    </section>
  );
};

export default StaticContent;
