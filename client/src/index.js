import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './containers/main/main';
import Signin from './containers/signin/signin';
import Protected from './Routes/protectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Signin />} />
          <Route path="home" element={<Protected Component={Main} />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    lineHeight: '70vh',
                  }}
                >
                  hmmm... You look Lost, There's nothing here!
                </p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();