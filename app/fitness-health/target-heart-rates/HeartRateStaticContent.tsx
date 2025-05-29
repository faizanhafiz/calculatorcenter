import React from 'react';
import AdsSection from '@/components/TopAd'; // Assuming AdsSection is for mobile ads

export default function HeartRateStaticContent() {
  return (
    <div className="space-y-6 text-gray-700"> {/* Removed p-6 padding from here */}
      {/* Mobile Ad Section 1: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Understanding Your Heart Rate Zones</h2> {/* Changed text-purple-800 to text-gray-800 */}
      <p className=" leading-relaxed">
        Understanding your target heart rate zones is important in maximizing your workouts and getting the desired fitness outcomes effectively. These are the optimal intensity levels at which your heart must be operating when exercising in order to achieve maximum cardiovascular gains
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">What is Target Heart Rate?</h3> {/* Changed text-purple-700 to text-gray-800 */}
      <p className="leading-relaxed">
        Your target heart rate (THR) is the range of heartbeats per minute that you should aim for during exercise to gain the most benefits from your aerobic workout. It's based on your maximum heart rate (MHR), which is the highest number of beats your heart can achieve during maximum exertion.
      </p>
      <p className="leading-relaxed">
        While your maximum heart rate typically decreases with age, your target heart rate zones help you gauge the effectiveness and safety of your exercise intensity.
      </p>

      {/* Mobile Ad Section 2: Visible on mobile, hidden on medium screens and up */}
      <div className="block md:hidden mt-8 mb-8">
        <AdsSection />
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Calculating Your Zones (The Basics)</h3> {/* Changed text-purple-700 to text-gray-800 */}
      <p className="leading-relaxed">
        The most common method to estimate your Maximum Heart Rate (MHR) is the simple formula:
      </p>
      <p className="text-xl font-bold text-center text-purple-800 my-4">
        220 - Your Age = Maximum Heart Rate (MHR)
      </p>
      <p className="leading-relaxed">
        Once you have your MHR, your target heart rate zones are calculated as percentages of this maximum:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Moderate-intensity Zone:</strong> Typically 50% to 70% of your MHR. In this zone, you should be able to talk but not sing. It's excellent for building endurance and is suitable for most healthy adults.
        </li>
        <li>
          <strong>Vigorous-intensity Zone:</strong> Typically 70% to 85% of your MHR. This is a higher intensity level where you'll find it difficult to say more than a few words without pausing for breath. It's great for improving cardiovascular fitness and burning more calories in less time.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Benefits of Training in Your Target Zones</h3> {/* Changed text-purple-700 to text-gray-800 */}
      <p className="leading-relaxed">
        Exercising within your target heart rate zones offers a multitude of health benefits, including:
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

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">How to Monitor Your Heart Rate</h3> {/* Changed text-purple-700 to text-gray-800 */}
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

      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Important Considerations & Abnormal Heartbeat</h3> {/* Changed text-purple-700 to text-gray-800 */}
      <p className="leading-relaxed">
        While heart rate zones are a great guide, remember that they are estimates. Factors like your current fitness level, medications, stress, and even environmental conditions can affect your heart rate.
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
