import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';

const App = () => {
  const demo = () => (
    <div className="App" style={{ flex: '1' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
        <BrowserRouter>
        <Layout>
          { demo() }
        </Layout>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
