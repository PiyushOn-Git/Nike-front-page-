import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'; 
import Main from './Main';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Nav/> 
      <Main/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
