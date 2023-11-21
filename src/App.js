import React from 'react';
import AppView from './layouts/AppView';
import AppSideBar from './layouts/AppSideBar';

function App() {
  return (
    <div className="App-container">
      <AppSideBar/>
      <AppView/>
    </div>
  );
}

export default App;