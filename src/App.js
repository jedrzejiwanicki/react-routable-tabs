import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Tabs} path="/x" />
      </BrowserRouter>
    );
  }
}

export default App;
