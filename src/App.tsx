/**
 * The main component that renders in place of the #root div when react populates the DOM
 */

import { StyledEngineProvider } from '@mui/material/styles';

import './App.sass';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

/**
 * The app component contains the header, navbar and dashboard.
 */
const App = () =>
  <>
    {/**
     * Using the StyledEngineProvider is necessary here to inject SASS modules before default styles. (Style Library Interoperability - Material UI, n.d.)
     * Removing the need for !important markers on all style declarations.
     */}
    <StyledEngineProvider injectFirst>
      <Header />
      <Navbar />
    </StyledEngineProvider>
  </>
;

export default App;
