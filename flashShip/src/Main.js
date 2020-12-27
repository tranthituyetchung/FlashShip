import React, {Component} from 'react'
import AppNavigation from 'navigation/AppNavigation'
//import messaging from '@react-native-firebase/messaging'
import * as RootNavigation from 'navigation/RootNavigation'
import Welcome from 'components/welcome/Welcome'
import {
  Text,
} from 'react-native';

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  
  render(){
    return <AppNavigation screenName= "RestaurantAdd" /> 
  }
}

