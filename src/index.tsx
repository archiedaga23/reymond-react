import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/root';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNote from './components/MyNote';
import UpdateNote from './components/UpdateNote';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/myNote' element={< MyNote/>} />
        <Route path='/update' element={< UpdateNote/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
