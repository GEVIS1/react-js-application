/**
 * The main component that renders in place of the #root div when react populates the DOM
 */

import { StyledEngineProvider } from '@mui/material/styles';
import { useState } from 'react';

import './App.sass';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import { Category } from './utils/endpoints';

/**
 * The app component contains the header, navbar and dashboard.
 * It uses a Styled Engine Provider to make sure my css takes priority without the !important directive
 */
const App = () => {
  const [category, setCategory] = useState<Category>('Trending');
  return (
    <>
      {/**
       * Using the StyledEngineProvider is necessary here to inject SASS modules before default styles. (Style Library Interoperability - Material UI, n.d.)
       * Removing the need for !important markers on all style declarations.
       */}
      <StyledEngineProvider injectFirst>
        <Header />
        <Navbar category={category} setCategory={setCategory} />
        <Dashboard category={category} />
      </StyledEngineProvider>
    </>
  );
};
export default App;
