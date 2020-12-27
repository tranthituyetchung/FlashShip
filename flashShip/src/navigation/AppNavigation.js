import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from 'components/welcome/Welcome';
import Home from 'components/home/Home';
import StoreDetail from '../components/storeDetail/StoreDetail';
const Stack = createStackNavigator();
class AppNavigation extends Component {
  render() {
    return (
      <>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={this.props.screenName}
            headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="StoreDetail" component={StoreDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default AppNavigation;
