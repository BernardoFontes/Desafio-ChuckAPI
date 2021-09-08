import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Jokes from './components/Jokes';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={Jokes} />
    </BrowserRouter>
  </div>
  );
}

export default App;
