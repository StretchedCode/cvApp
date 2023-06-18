import React, { Component } from 'react';
import Header from './components/header';
import './stylesheets/App.scss';

class App extends Component{

  constructor(props){
    super(props)
  }

  render(){

    return (
      <Header></Header>
    )
  }
}

export default App;
