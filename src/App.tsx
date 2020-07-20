import React, { useEffect } from "react";
import { hotjar } from 'react-hotjar'
import "./App.css";

import Routes from './routes'

function App() {
  useEffect(() => {
    hotjar.initialize(1909963, 6)
  }, [])

  return <Routes />;
}

export default App;
