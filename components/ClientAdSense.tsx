"use client"

import AdSense from './AdSense';

interface ClientAdSenseProps {
  adSlot: string;
  adFormat: 'leaderboard' | 'medium_rectangle' | 'wide_skyscraper' | 'vertical_rectangle';
  adStyle?: React.CSSProperties;
}

export default function ClientAdSense({ adSlot, adFormat, adStyle }: ClientAdSenseProps) {
  return <AdSense adSlot={adSlot} adFormat={adFormat} adStyle={adStyle} />;
}
