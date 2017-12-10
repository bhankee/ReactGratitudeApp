import React from 'react';
import Welcome from './Welcome';
import Grateful from './Grateful';

const App = props => {
  return (
    <div>
      <Welcome name="Brad" />
      <Grateful />
    </div>
  );
};

export default App;
