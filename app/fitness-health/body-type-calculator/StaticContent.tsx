import katex from 'katex';
import 'katex/dist/katex.min.css';
import Image from 'next/image';

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
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Body Shape?</h2>

      <p className="text-gray-700 mb-4">
        Body shape refers to the natural structure of your body—determined by the distribution of fat, muscle, and bone. It’s how your body is proportioned, and it plays a key role in how clothes fit and look on you. While every woman has a unique figure, most body shapes fall into a few common categories, such as pear, apple, hourglass, rectangle, and inverted triangle.
        Understanding your body shape isn’t about fitting into a certain standard—it’s about embracing your natural form. Knowing your body type helps you make smarter fashion choices that highlight your best features and boost your confidence
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Is a Body Type Calculator</h3>
      <p className="text-gray-700 mb-4">A body type calculator assesses your body shape, bone structure, and fat distribution to classify you into one of three primary body types:</p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><span className="font-semibold">Ectomorph  –  </span>  Lean, slender, with a fast metabolism and difficulty gaining muscle or fat.</li>
        <li><span className="font-semibold">Mesomorph – </span> Naturally muscular, athletic, and gains or loses weight relatively easily.</li>
        <li><span className="font-semibold">Endomorph –  </span> Higher body fat percentage, gains weight easily, and struggles with fat loss.</li>
      </ul>

      <p className="text-gray-700">
        Some people have a combination of these types (e.g., ecto-mesomorph or endo-mesomorph).
      </p>
      <br />

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Types of Body Shapes Of Women?</h3>
      <p className="text-gray-700 mb-4">Women’s bodies come in a variety of shapes, each with its own unique features. The most common body shapes include:</p>

      <div className="space-y-8 text-gray-800">
        {/* Rounded (Apple) Body Shape */}
        <div>
          <h2 className="font-semibold  text-gray-700">Rounded (Apple) Body Shape :</h2>
          <p className="mt-1">
            Carries weight around the midsection with a fuller bust and slimmer hips. Often has little waist definition.
          </p>
          <div className="flex justify-center mt-3">
            <Image
              src="/images/roundimg.jpg"
              alt="Rounded Body Shape"
              width={200}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Hourglass Body Shape */}
        <div>
          <h2 className="font-semibold  text-gray-700">Hourglass Body Shape :</h2>
          <p className="mt-1">
            Balanced bust and hips with a well-defined waist. This shape is often considered proportional and curvy.
          </p>
          <div className="flex justify-center mt-3">
            <Image
              src="/images/hourglass.jpg"
              alt="Hourglass Body Shape"
              width={200}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Pear Body Shape */}
        <div>
          <h2 className="font-semibold  text-gray-700">Pear Body Shape :</h2>
          <p className="mt-1">
            Hips are wider than the bust. Weight tends to accumulate in the lower body, especially thighs and hips.
          </p>
          <div className="flex justify-center mt-3">
            <Image
              src="/images/pearimg.jpg"
              alt="Pear Body Shape"
              width={200}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Rectangle Body Shape */}
        <div>
          <h2 className="font-semibold  text-gray-700">Rectangle Body Shape :</h2>
          <p className="mt-1">
            Similar width across bust, waist, and hips. The waist is not well-defined, giving a straight silhouette.
          </p>
          <div className="flex justify-center mt-3">
            <Image
              src="/images/rectangularimg.jpg"
              alt="Rectangle Body Shape"
              width={200}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Inverted Triangle Body Shape */}
        <div>
          <h2 className="font-semibold  text-gray-700">Inverted Triangle Body Shape :</h2>
          <p className="mt-1  ">
            Broad shoulders and bust with narrower hips. This shape gives a strong upper body appearance.
          </p>
          <div className="flex justify-center mt-3">
            <Image
              src="/images/invertedimg.jpg"
              alt="Inverted Triangle Body Shape"
              width={200}
              height={300}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Add here */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Knowing Your Body Shape Matters</h2>
        <br/>
        <div className="flex justify-center mt-3">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/bodyshape.png"
              alt="Body Shape"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
        <br/>

        <ul className="list-disc pl-6 text-gray-700 space-y-3">
          <li>
            <strong>Dressing for Your Shape:</strong> Understanding your body shape lets you pick clothes that highlight your best features and balance your proportions. This makes you look and feel more confident and put-together.
          </li>
          <li>
            <strong>Improved Fit and Comfort:</strong> When you know your shape, you can choose styles and cuts that fit your body well, making clothes more comfortable and flattering.
          </li>
          <li>
            <strong>Guiding Fitness Goals:</strong> Knowing your body shape can help tailor your fitness routine to focus on areas you want to enhance or tone, making workouts more effective.
          </li>
          <li>
            <strong>Boosting Self-Acceptance:</strong> Recognizing your natural shape encourages body positivity and self-love, shifting focus from unrealistic ideals to embracing your unique form.
          </li>
          <li>
            <strong>Making Shopping Easier:</strong> Instead of randomly trying on clothes, knowing your shape narrows down choices, saving time and reducing frustration.
          </li>
          <li>
            <strong>Enhancing Your Style:</strong> When you understand what styles suit your shape, you develop a personal style that feels authentic and flattering.
          </li>
        </ul>
         
      </section>

      <h2 className="text-3xl font-bold text-center mt-12 mb-6 text-blue-800">FAQs about Body Shape</h2>
<p className="text-center text-gray-600 mb-8">Explore common questions about body shape, how it's classified, and its role in fitness and health.</p>

<div className="space-y-4 max-w-4xl mx-auto">
  {[
    {
      question: "Which shape is best for body shape?",
      answer: <> There isn’t one "best" body shape—each shape is beautiful in its own way. However, the hourglass figure is often considered the most balanced and traditionally ideal body shape. This shape features a well-proportioned bust and hips with a naturally narrow waist, creating a defined silhouette.</>,
    },
    {
      question: "What is the body shape questionnaire?",
      answer: <>A body shape questionnaire is a tool that collects measurements (such as bust, waist, and hips) and compares them to help determine your body shape. It's often used in fashion, fitness, and health assessments.</>,
    },
    {
      question: "Why is it important to know your body shape?",
      answer: <>Knowing your body shape can help you make better choices in clothing, fitness routines, and health management. It allows for a personalized approach to style, workouts, and goal setting.</>,
    },
    {
      question: "What determines a person's body shape?",
      answer: <>Body shape is influenced by a combination of genetics, bone structure, fat distribution, muscle mass, and hormonal balance. Lifestyle factors such as diet and exercise also play a role over time.</>,
    },
    {
      question: "Which body type is most common?",
      answer: <>The most common body types vary by population, but the <strong>rectangle</strong> and <strong>pear-shaped</strong> bodies are frequently observed among women, while men often have <strong>rectangle</strong> or <strong>inverted triangle</strong> types.</>,
    },
    {
      question: "Which shape is good for face?",
      answer: <>When referring to face shapes, common types include oval, round, square, heart, and diamond. The <strong>oval face shape</strong> is often considered the most versatile and “ideal” because it suits many hairstyles and glasses. However, every shape has its own charm!</>,
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
