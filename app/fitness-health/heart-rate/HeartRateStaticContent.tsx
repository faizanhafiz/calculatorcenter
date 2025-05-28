import React from 'react';
import AdsSection from '@/components/TopAd'; // Assuming AdsSection is for mobile ads

 export default function HeartRateStaticContent() {
  return (
    <div className="space-y-6 text-gray-700">
      {/* Mobile Ad Section 1: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Your Heart Rate</h2>
      <p className="text-lg leading-relaxed">
        Your heart rate is the number of times your heart beats per minute (BPM). It specifically refers to the number of contractions of the ventricles (the lower chambers of the heart). It is a vital sign that provides insight into your cardiovascular health and fitness level.
      </p>

      <p className="leading-relaxed">
        The heart rate can be too fast (tachycardia) or too slow (bradycardia), which are types of Heart Arrhythmias. The pulse rate, often taken at the wrist, is a bulge of an artery from waves of blood that course through the blood vessels each time the heart beats, and it's used to estimate heart rate.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Normal Resting Heart Rate (RHR)</h3>
      <p className="leading-relaxed">
        Normal resting heart rate (RHR) is a key indicator of both general and physical health. For most healthy adults, normal values typically range from 60 to 100 beats per minute (bpm). It's common for the RHR value to decrease as cardiovascular fitness increases; for example, athletes often have lower resting heart rates.
      </p>

      {/* Mobile Ad Section 2: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

     
      

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Benefits of Training in Your Target Zones</h3>
      <p className="leading-relaxed">
        Exercising within your target heart rate zones offers significant health benefits, including:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Improved cardiovascular health and endurance</li>
        <li>More efficient calorie burning and weight management</li>
        <li>Reduced risk of chronic diseases like heart disease, stroke, and type 2 diabetes</li>
        <li>Lower blood pressure and cholesterol levels</li>
        <li>Enhanced mood and reduced stress</li>
        <li>Better sleep quality</li>
        <li>Stronger bones and muscles (especially with vigorous activity)</li>
      </ul>

      {/* Mobile Ad Section 3: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">How to Monitor Your Heart Rate</h3>
      <p className="leading-relaxed">
        To ensure you're training in your desired zone, you can monitor your heart rate using several methods:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Manual Pulse Check:</strong> Place two fingers (not your thumb) on your radial artery (thumb side of your wrist) or carotid artery (side of your neck). Count your heartbeats for 15 seconds and multiply by four to get your beats per minute (BPM).
        </li>
        <li>
          <strong>Wearable Devices:</strong> Fitness trackers, smartwatches, and chest strap monitors provide real-time heart rate data, making it easier to stay in your target zone.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Important Considerations & Abnormal Heartbeat</h3>
      <p className="leading-relaxed">
        While heart rate calculations provide valuable guidance, remember they are estimates. Factors like your current fitness level, medications, stress, and even environmental conditions can affect your heart rate.
      </p>
      <p className="leading-relaxed">
        It's particularly important to pay attention to your body and heart rate during exercise. If you experience an <strong className="text-red-600">abnormal heartbeat</strong>, such as a sudden flutter, skipped beats, or a racing heart that doesn't align with your exertion level, stop exercising immediately. Other warning signs include chest pain, dizziness, extreme shortness of breath, or feeling faint.
      </p>
      <p className="leading-relaxed">
        If you frequently notice an abnormal heartbeat or any concerning symptoms, it is crucial to consult with a healthcare professional. They can provide a proper diagnosis and recommend the safest and most effective exercise plan for your specific health condition.
      </p>
      <p className="leading-relaxed">
        For personalized advice and to determine the safest and most effective exercise plan for you, it's highly recommended to consult with a healthcare professional or a certified fitness expert.
      </p>
    </div>
  );
}
