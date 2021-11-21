import { ErrorBoundary } from 'error-boundary';
import ModalsContextProvider from 'modal-context/modal-context';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <Provider store={store}>
    <ErrorBoundary>
      <ModalsContextProvider>
        <Router>
          <App />
        </Router>
      </ModalsContextProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
