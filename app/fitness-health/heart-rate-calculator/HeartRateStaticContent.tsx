import React from 'react';

import AdsSection from '@/components/TopAd';

export default function HeartRateStaticContent() {
  return (
    <div className="text-gray-700 text-lg leading-relaxed space-y-6">
      {/* Introduction Section */}
      <div>
        <p className="mb-4">
          Understanding your target heart rate zones is a powerful tool for optimizing your workouts, whether you're aiming for improved endurance, effective weight management, or overall cardiovascular health. Your heart rate is a direct indicator of how hard your body is working, and by staying within specific zones, you can maximize the benefits of your exercise.
        </p>
        <p>
          This interactive calculator will help you quickly estimate your maximum heart rate (MHR) and then provide personalized ranges for moderate and vigorous intensity activities. Let's dive in and discover your optimal training zones!
        </p>
      </div>

       <div className="block md:hidden mt-8 mb-8">
            <AdsSection />
          </div>

      {/* More Static Content - Explaining Zones */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Your Heart Rate Zones</h2>
        <p className="mb-4">
          The "220 minus your age" formula is a widely used method to estimate your Maximum Heart Rate (MHR). Once you have your MHR, you can define your training zones:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <span className="font-bold text-purple-700">Moderate Intensity Zone (50-70% of MHR):</span> This zone is excellent for improving general health, endurance, and fat burning. You should be able to hold a conversation comfortably.
          </li>
          <li>
            <span className="font-bold text-purple-700">Vigorous Intensity Zone (70-85% of MHR):</span> Working in this zone significantly improves cardiovascular fitness and strength. You'll be breathing hard and likely won't be able to speak more than a few words at a time.
          </li>
        </ul>
        <p>
          Remember, these are guidelines. Factors like fitness level, medications, and environmental conditions can affect your actual heart rate response. Listening to your body is crucial.
        </p>
      </div>
    </div>
  );
}
