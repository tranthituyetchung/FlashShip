import React, { Component } from 'react';
import {
    Text, View, Image, StyleSheet
}from 'react-native'
import strings from 'values/strings'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import colors from 'values/color'
import Icon from 'react-native-vector-icons/Feather'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }     
    }
    render() {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={this.props.onBackPress}    
                    >
                        <Icon name="chevron-left" color={colors.dark_blue} size={24} />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                       <Text style={styles.titleText}>{this.props.title}</Text>
                    </View>
                </View>
            )
    }
}

export default Header;

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        width: wp('100%'),
        height: 56,
        position: 'absolute',
        left: 0,
        top: 0,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: colors.white,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        elevation: 6, 
    },
    backButton:{
        height: 40,
        width: 40,
        marginLeft: 8,
        justifyContent: 'center',
        //backgroundColor: colors.red,
    },
    titleContainer: {
        height: 40, 
        width: wp('100%') - 112,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: colors.green,
    },
    titleText:{
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: colors.dark_blue,
    }
})