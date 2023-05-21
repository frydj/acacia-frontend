import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomThemeProvider from '../theme/ThemeContext';

import AppRoutes from '../AppRoutes';
import Viewport from '../components/Bits/Viewport/Viewport';

const App = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Viewport>
          <AppRoutes />
        </Viewport>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

export default App;
