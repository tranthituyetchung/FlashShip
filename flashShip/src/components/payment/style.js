import {
    StyleSheet
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import colors from 'values/color'

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container:{
        //height: hp('100%'),
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    content: {
        marginTop: 64,
        //height: hp('100%') -100,
    },
    blank:{
        height: 180
    },
    section:{
        width: wp('100%')-32,
        marginLeft: 16,
    },
    sectionTitle:{
        fontFamily:'Nunito-Bold',
        color: colors.secondary_grey,
        fontSize: 16,
        width: wp('100%')-32,
        marginBottom: 8,
    },
    locationContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    locationContent:{
        marginHorizontal: 8,
        width: wp('100%')-96,
        flexDirection: 'column',
    },
    location:{
        fontFamily:'Nunito-Bold',
        color: colors.dark_blue,
        fontSize: 20,
        width: wp('100%')-96,
    },
    locationDetail:{
        fontFamily:'Nunito-Regular',
        color: colors.secondary_grey,
        fontSize: 14,
        width: wp('100%')-96,
    },
    RestaurantAddNote: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.primary_grey,
        borderRadius: 8,
        marginLeft: 24,
        marginVertical: 8,
      },
      RestaurantAddIconNote: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 5,
      },
      inputText:{
        height: 40,
        width: wp('100%')-56,
        fontFamily: 'Nunito-Regular',
      },
    sectionLine:{
        height: 1,
        width: wp('100%')-32,
        backgroundColor: colors.primary_grey,
        marginVertical: 8,
    },
    orderContainer:{
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    card:{

        flexDirection: 'column',
        marginTop: 0,
        marginBottom: 0,
    },
    cardContainer:{
        flexDirection: 'row',
        height: 64,
    },
    cardTitle:{
        width: wp('100%')-200,
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        marginHorizontal: 8,
        color: colors.dark_blue,
    },
    cardDesc:{
        width: wp('100%')-200,
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        marginHorizontal: 8,
        color: colors.secondary_grey,
    },
    cardOption:{
        width: wp('100%')-200,
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        marginHorizontal: 8,
        color: colors.secondary_grey,
    },
    couseImg:{
        borderRadius: 8,
        width: 64,
        height: 64,
        resizeMode: 'cover', 
    },
    price:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: colors.dark_blue,
    },
    priceDiscount:{
        textDecorationLine: 'line-through',
        fontFamily: 'Nunito-Regular',
        fontSize: 11,
        color: colors.dark_blue,
        alignSelf: 'flex-end'
    },
    number:{
        width: 24,
        height: 24,
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
        color: colors.secondary_grey,
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 8,
        borderColor: colors.primary_grey_light,
        textAlign: 'center',
    },
    totalContainer:{
        flexDirection: 'column',
    },
    totalLine:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    totalTitle:{
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: colors.dark_blue,
    },
    totalPrice:{
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: colors.dark_blue,
    },
    infoIcon:{
    },
    totalContainer:{
        flexDirection: 'column'
    },
    paymentContainer:{
        flexDirection: 'row'
    },
    paymentBtn:{
        width: (wp('100%')-32)/2,
        height: 54,
        flexDirection:'row',
        borderWidth: 1,
        borderColor: colors.primary_grey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        marginLeft: 4,
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: colors.dark_blue,
    }
})
export default styles