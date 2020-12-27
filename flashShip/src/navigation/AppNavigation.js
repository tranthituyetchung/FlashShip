import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './RootNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from 'components/welcome/Welcome'


const Stack = createStackNavigator();
class AppNavigation extends Component{
  render(){
      return (
        <>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={this.props.screenName}
            headerMode="none">
                <Stack.Screen name="welcome" component={Welcome} />
          </Stack.Navigator>
        </NavigationContainer>
        </>
      )
  }
}

export default AppNavigation