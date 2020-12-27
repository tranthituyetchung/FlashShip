import {
    StyleSheet
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import colors from 'values/color'

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    mainContainer: {
        width: wp('100%'),
        height: hp('30%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('10%'),
        //backgroundColor: colors.black,
    },
    header: {
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('10%'),
    },
    headerTitle: {
        color: colors.dark_blue,
        fontSize: 30,
        fontFamily: 'Nunito-Regular',
    },
    headerDescription: {
        color: colors.dark_blue,
        fontSize: 15,
        paddingTop: 15,   
        fontFamily: 'Nunito-Regular'
    },
    buttonContainer: {
        width: '100%', 
        height: hp('20%'), 
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'flex-end',
        //backgroundColor: colors.black
    },
    startButton :{
        backgroundColor: colors.primary_blue,
        width: wp('100%')-80,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    },
    startButtonTitle: {
        fontSize: 15,
        color: colors.dark_blue,
        fontFamily: 'Nunito-Bold'
    },
    sliderDotStyle: {
        backgroundColor: colors.primary_blue,
    },
    activeDotStyle: {
        backgroundColor: colors.dark_blue,
    }

})
export default styles