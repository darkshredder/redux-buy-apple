import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Apple from './appleContainer'

function App() {
  return (
    <Provider store = {store} >
    <div className="App">
      <Apple/>
    </div>
    </Provider>
  );
}

export default App;
