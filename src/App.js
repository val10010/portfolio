import React, { Component } from 'react';
import Portfolio from './components/portfolio';
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';
import './App.css';
import './reset.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <Header />
        <Portfolio />
        <Footer />
      </>
    );
  }
}

export default App;
