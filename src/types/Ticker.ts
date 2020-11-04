export interface UnhandledTicker {
  baseVolume: string;
  high24hr: string;
  highestBid: string;
  id: number;
  isFrozen: string;
  last: string;
  low24hr: string;
  lowestAsk: string;
  percentChange: string;
  quoteVolume: string;
}

export interface HandledTicker extends UnhandledTicker {
  ticker: string;
}

export type UnhandledTickerObj = Record<string, UnhandledTicker>;
