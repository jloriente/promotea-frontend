import React from 'react';
import RedirectList from './components/RedirectList';
import RedirectForm from './components/RedirectForm';

function App() {
  return (
    <div>
      <h1>Manage NFC Redirections</h1>
      <RedirectForm />
      <RedirectList />
    </div>
  );
}

export default App;
