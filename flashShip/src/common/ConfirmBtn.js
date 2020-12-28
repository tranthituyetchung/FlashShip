import React, { Component } from 'react';
import {
    Text, View, Image, StyleSheet
}from 'react-native'
import strings from 'values/strings'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import colors from 'values/color'
import Icon from 'react-native-vector-icons/Feather'

class ConfirmBtn extends Component {
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
                        onPress={this.props.onPress}    
                    >
                        <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        </View>
                    </TouchableOpacity>
                   
                </View>
            )
    }
}

export default ConfirmBtn;

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        width: wp('100%'),
        height: 78,
        position: 'absolute',
        left: 0,
        bottom: 0,
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
        height: 54,
        width: wp('100%') - 32,
        marginLeft: 16,
        justifyContent: 'center',
        //backgroundColor: colors.red,
    },
    titleContainer: {
        height: 54, 
        borderRadius: 4,
        width: wp('100%') - 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary_blue,
    },
    titleText:{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Nunito-Bold',
        color: colors.white,
    }
})