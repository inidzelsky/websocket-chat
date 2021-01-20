import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import SocketClient from './socket/socketClient';
import { setSocket } from './redux/actions';
import rootReducer from './redux/rootReducer';

import App from './App';

import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const dispatch = store.dispatch;

const socketClient = new SocketClient(dispatch);
socketClient.connect();

dispatch(setSocket(socketClient));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
