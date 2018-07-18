import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/hello/hello';
import './common.scss';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('example'),
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
