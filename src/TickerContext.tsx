import React from 'react';
import TickerStore from './TickerStore';

const TickerContext = React.createContext<TickerStore | null>(null);

interface TickerProviderProps {
  children: React.ReactNode;
}

export const TickerProvider = ({children}: TickerProviderProps) => {
  const tickerStore = new TickerStore();
  return (
    <TickerContext.Provider value={tickerStore}>
      {children}
    </TickerContext.Provider>
  );
};

export const useTickerStore = () => React.useContext(TickerContext);
