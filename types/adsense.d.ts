declare global {
  interface Window {
    adsbygoogle: Array<{
      push(args: any): void;
    }>;
  }
}

export {};
