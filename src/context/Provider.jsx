import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PortfolioContext } from './PortfolioContext';

function Provider({ children }) {
  const [gitConnected, setGitConnected] = useState();

  useEffect(() => {
    axios.get(
      'https://gitconnected.com/v1/portfolio/clayton1805',
    )
      .then(({ data }) => {
        setGitConnected(data);
      })
      .catch((error) => console.log({ error }));
  }, []);

  const contextValue = {
    gitConnected,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default Provider;
