import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const promo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promo={promo} />
  </React.StrictMode>,
);
