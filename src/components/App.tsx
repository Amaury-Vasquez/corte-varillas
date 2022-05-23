import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyles } from '../styles/GlobalStyles';
import { Home } from '../pages/Home';

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Home />
    </HelmetProvider>
  );
};

export default App;
