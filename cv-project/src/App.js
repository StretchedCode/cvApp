import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import './stylesheets/App.scss';

class App extends Component{

  constructor(props){
    super(props)
  }

  render(){
  
    return (
      <div>
        <Header></Header>
        <Form></Form>
      </div>
    )
  }
}

export default App;
