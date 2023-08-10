import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const updateBasket = (newBasket) => {
    setBasket(newBasket);
  };

  return (
    <BasketContext.Provider value={{ basket, updateBasket }}>
      {children}
    </BasketContext.Provider>
  );
}