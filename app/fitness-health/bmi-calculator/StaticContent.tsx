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
        The BMI calculator is a widely used tool that helps assess whether an individual has a healthy body weight in relation to their height.
        BMI, or Body Mass Index, is a numerical value calculated using a person's weight and height, designed to estimate tissue mass and categorize weight status.
        <br /><br />
        The result from a BMI calculator helps classify a person as underweight, normal weight, overweight, or obese. These categories are based on standardized ranges,
        which may vary slightly by region, age, or specific health guidelines. In some cases, the classifications are further broken down into subcategories such as severely
        underweight or very severely obese.
        <br /><br />
        Although the BMI calculator does not directly measure body fat or take muscle mass into account, it serves as a reliable general indicator of potential health
        risks associated with being underweight or overweight. Because of its simplicity and effectiveness, the BMI calculator is commonly used in both clinical settings
        and everyday health tracking to determine whether further evaluation or lifestyle adjustments might be necessary.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">History of BMI</h3>
      <p className="text-lg text-gray-700">
        The BMI calculator is one of the most commonly used tools for assessing weight-related health risks due to its simplicity and ease of use. The concept of Body Mass Index (BMI)
        was originally developed in the 19th century by Belgian mathematician and statistician Adolphe Quetelet, who introduced it as the Quetelet Index. His goal was to establish
        a quick and consistent way to evaluate the average body composition of a population.
        <br /><br />
        In the 1970s, interest in BMI grew significantly when researchers, particularly those analyzing data from the Seven Countries Study, found that BMI served as a practical
        proxy for body fat (adiposity) and was linked to health conditions related to being overweight or obese. This led to the widespread adoption of BMI as a standard tool in
        public health and clinical settings.
        <br /><br />
        Despite its popularity, the BMI calculator is not without limitations. It only considers height and weight, without accounting for factors like age, sex, or muscle mass,
        which can affect body composition. As a result, BMI may overestimate fat levels in athletes and underestimate them in older adults or those with lower muscle mass.
        <br /><br />
        To enhance accuracy, BMI is often used alongside other measurements such as waist circumference (WC), which can offer a more complete picture of an individual's
        health risk. However, interpreting waist circumference requires scientific rigor and should be done by trained professionals.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">BMI Formula:</h3>

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

      <h3 className="text-xl font-semibold text-gray-800">Why is BMI Important?</h3>
      <p className="text-lg text-gray-700 mb-6">
        BMI is a useful tool for identifying potential health risks related to being underweight or overweight. While it does not measure body fat directly,
        it provides a quick estimate of whether an individual's weight may be in a healthy range. It is often used as an initial screening tool before more
        detailed assessments are conducted by healthcare professionals.
      </p>

      
    </section>
  );
};

export default StaticContent;
