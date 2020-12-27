import React, {Component} from 'react'
import Main from './src/Main'
import { Provider } from 'react-redux'
import {
  Text,
} from 'react-native';
//import store from './src/store/store'
import Welcome from 'components/welcome/Welcome'

export default class App extends Component {
  constructor () {
    super ();
    this.state = {
      
    };
  }
  componentDidMount () {
  
  }
  
  render () {
     return (
      // <Provider store={store}>
      //   <Main/> 
      // </Provider>
      <>
      <Welcome/>
      </>
     )
  }
}

