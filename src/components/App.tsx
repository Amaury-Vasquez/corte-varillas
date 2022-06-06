import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dp } from '../pages/Dp';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dynamic-programming" element={<Dp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
