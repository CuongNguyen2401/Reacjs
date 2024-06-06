
import React from 'react';
import { store } from './store/Store';


import ParentRoute from './Routes/ParentRoute';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ParentRoute />
    </Provider>
  );
}



export default App;
