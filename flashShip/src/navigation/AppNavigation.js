import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from 'components/welcome/Welcome';
import Home from 'components/home/Home';
import StoreDetail from 'components/storeDetail/StoreDetail';
import Search from 'components/search/Search';
import RestaurantAdd from 'components/restaurant/RestaurentAdd'
import Payment from 'components/payment/Payment'
import Voucher from 'components/Voucher/index'

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
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="StoreDetail" component={StoreDetail} />
            <Stack.Screen name="RestaurantAdd" component={RestaurantAdd} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Voucher" component={Voucher} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default AppNavigation;
