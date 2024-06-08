
import React from 'react';
import { store } from './store/Store';


import ParentRoute from './Routes/ParentRoute';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <ParentRoute />
      <ToastContainer />
    </Provider>
  );
}



export default App;
