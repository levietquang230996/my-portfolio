import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/assets/globalStyles';
import { DirectProvider } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DirectProvider>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </DirectProvider>
);
reportWebVitals();
