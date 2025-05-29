import React from 'react';
import AdsSection from '@/components/TopAd'; // Assuming AdsSection is for mobile ads

export default function HeartRateStaticContent() {
  // FAQ data with questions and answers
  const faqs = [
    {
      question: "What is a normal heart rate?",
      answer: "For most healthy adults, a normal resting heart rate (RHR) ranges from 60 to 100 beats per minute (bpm). Athletes often have lower resting heart rates due to better cardiovascular fitness."
    },
    {
      question: "What factors can affect my heart rate?",
      answer: "Several factors can influence your heart rate, including age, fitness and activity levels, smoking habits, underlying cardiovascular conditions, high cholesterol or diabetes, air temperature, body position, emotional state, body size, and certain medications."
    },
    {
      question: "What is the difference between heart rate and pulse rate?",
      answer: "Your heart rate is the number of times your heart's ventricles contract per minute. The pulse rate, often measured at the wrist, is the rhythmic expansion of an artery as blood is pumped through it with each heartbeat, providing an estimate of your heart rate."
    },
    {
      question: "When should I be concerned about my heart rate?",
      answer: "You should consult a healthcare professional if you frequently experience an abnormal heartbeat, such as a sudden flutter, skipped beats, or a racing heart that doesn't match your activity level. Other warning signs include chest pain, dizziness, extreme shortness of breath, or feeling faint."
    },
    {
      question: "How can I accurately monitor my heart rate?",
      answer: "You can monitor your heart rate manually by checking your pulse at your wrist or neck, counting beats for 15 seconds and multiplying by four. Wearable devices like fitness trackers, smartwatches, and chest strap monitors provide real-time and often more convenient heart rate data."
    }
  ];

  return (
    <div className="space-y-6 text-gray-700 p-4 sm:p-6 lg:p-8 w-full md:max-w-4xl mx-auto">
      {/* Mobile Ad Section 1: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-3">Understanding Your Heart Rate</h2>
      <p className="leading-relaxed text-lg">
        Your heart rate is the number of times your heart beats per minute (BPM). It specifically refers to the number of contractions of the ventricles (the lower chambers of the heart). It is a vital sign that provides insight into your cardiovascular health and fitness level.
      </p>

      <p className="leading-relaxed text-lg">
        The heart rate can be too fast (tachycardia) or too slow (bradycardia), which are types of Heart Arrhythmias. The pulse rate, often taken at the wrist, is a bulge of an artery from waves of blood that course through the blood vessels each time the heart beats, and it's used to estimate heart rate.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3 pt-4">What's a Normal Resting Heart Rate? (RHR)</h3>
      <p className="leading-relaxed text-lg">
        Ever wondered what a "normal" heart rate really means? You're not alone! Your resting heart rate is a simple yet powerful indicator of your cardiovascular health. Let's dive into what's considered normal, why it matters, and how to check yours.       </p>
      <h1 className="text-xl px-3 font-semibold text-gray-800 mb-3 pt-4">Understanding Your Resting Heart Rate (RHR)</h1>
      <p className="px-3 leading-relaxed text-lg">For most adults, a normal resting heart rate falls between 60 and 100 beats per minute (bpm). Think of it as your heart's chill-out pace, the number of times it beats when you're relaxed and not engaging in physical activity.</p>
      {/* Mobile Ad Section 2: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

      <h1 className="text-xl px-3 font-semibold text-gray-800 mb-3 pt-4">The "Lower is Better" Rule (Generally!)</h1>
      <p className="px-3 leading-relaxed text-lg">In general, a lower resting heart rate suggests your heart is working more efficiently and you likely have better cardiovascular fitness. This is because a stronger, more efficient heart can pump more blood with each beat, requiring fewer beats per minute to meet your body's needs.

        Consider a well-trained athlete, for instance. Their resting heart rate might be as low as 40 bpm – a testament to their exceptional cardiovascular conditioning!</p>
      <h1 className="text-xl px-3 font-semibold text-gray-800 mb-3 pt-4">Factors That Influence Your Heart Rate</h1>
      <p className="px-3 leading-relaxed text-lg">It's important to remember that your heart rate isn't a static number. Many factors can influence it, including:</p>
      <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
        <li><strong>Age: </strong>Heart rate can naturally change with age.</li>
        <li><strong>Fitness and Activity Levels:</strong> Regular exercise strengthens your heart, leading to a lower resting rate.</li>
        <li><strong>Smoking Status:</strong> Smokers often have higher resting heart rates.</li>
        <li><strong>Underlying Health Conditions:</strong> Conditions like cardiovascular disease, high cholesterol, or diabetes can impact your heart rate.</li>
        <li><strong>Air Temperature:</strong> Extreme temperatures can affect your heart's workload.
        </li>
        <li><strong>Body Position:</strong> Standing up versus lying down can cause slight variations.
        </li>
        <li><strong>Emotions:</strong> Stress, anxiety, or excitement can temporarily elevate your heart rate.</li>
        <li><strong>Body Size:</strong> Larger individuals may have slightly different heart rates.
        </li>
        <li><strong>Medications:</strong> Some medications can influence heart rate.</li>
      </ul>


      {/* Mobile Ad Section 3: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
       < AdsSection />
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3 pt-4">How to Monitor Your Heart Rate</h3>
      <p className="leading-relaxed text-lg">
        To ensure you're training in your desired zone, you can monitor your heart rate using several methods:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
        <li>
          <strong>Manual Pulse Check:</strong> Place two fingers (not your thumb) on your radial artery (thumb side of your wrist) or carotid artery (side of your neck). Count your heartbeats for 15 seconds and multiply by four to get your beats per minute (BPM).
        </li>
        <li>
          <strong>Wearable Devices:</strong> Fitness trackers, smartwatches, and chest strap monitors provide real-time heart rate data, making it easier to stay in your target zone.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3 pt-4">Important Considerations & Abnormal Heartbeat</h3>
      <p className="leading-relaxed text-lg">
        While heart rate calculations provide valuable guidance, remember they are estimates. Factors like your current fitness level, medications, stress, and even environmental conditions can affect your heart rate.
      </p>
      <p className="leading-relaxed text-lg">
        It's particularly important to pay attention to your body and heart rate during exercise. If you experience an <strong className="text-red-600">abnormal heartbeat</strong>, such as a sudden flutter, skipped beats, or a racing heart that doesn't align with your exertion level, stop exercising immediately. Other warning signs include chest pain, dizziness, extreme shortness of breath, or feeling faint.
      </p>
      <p className="leading-relaxed text-lg">
        If you frequently notice an abnormal heartbeat or any concerning symptoms, it is crucial to consult with a healthcare professional. They can provide a proper diagnosis and recommend the safest and most effective exercise plan for your specific health condition.
      </p>
      <p className="leading-relaxed text-lg">
        For personalized advice and to determine the safest and most effective exercise plan for you, it's highly recommended to consult with a healthcare professional or a certified fitness expert.
      </p>

      {/* FAQ Section using <details> and <summary> */}
      <div className="mt-10 pt-4 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
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
      </div>
    </div>
  );
}