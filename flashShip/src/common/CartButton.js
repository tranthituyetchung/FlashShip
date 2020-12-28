import ActionButton from 'react-native-action-button';
import React, { Component } from 'react';
import {
    Text, View, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity
}from 'react-native'
import strings from 'values/strings'
import colors from 'values/color';
import { IcRight, IcUserFill, IcStarFill, IcClock } from 'values/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcShopingCart } from 'values/images';
import Restaurant from 'components/restaurant/Restaurant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Feather';

class CartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
    render() {
            return (
                <TouchableOpacity 
                    style={styles.button} buttonColor="rgba(231,76,60,1)">
                        <IcShopingCart width={28} height={28}/>
                </TouchableOpacity>
            )
    }
}

export default CartButton;

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    button:{
        zIndex: 999, 
        position: 'absolute',
        width: 64,
        height: 64,
        backgroundColor: colors.primary_blue,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 48,
        right: 24,
        borderWidth: 1,
        borderColor: 'rgba(256,256,256,0.8)',
        //shadow
        shadowColor: colors.dark_blue,
        shadowOffset: {
            width: 0,
            height: 16,
        },
        shadowOpacity: 1,
        shadowRadius: 6, 
        elevation: 10,
    }
})
