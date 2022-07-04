import {Fragment} from 'react';
import './App.css';
import Scribble from './Components/Random line/Scribble';
import Line from './Components/SImple line/Line';
function App () {
  return (
    <Fragment>
      <Line />
      <Scribble />
    </Fragment>
  );
}

export default App;
