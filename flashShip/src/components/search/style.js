import {
    StyleSheet
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import colors from 'values/color'

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    header: {
        zIndex: 10,
        width: wp('100%'),
        height: 64,
        position: 'absolute',
        left: 0,
        top: 0,
        alignItems: "center",
        //justifyContent: 'center',
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
    content:{
        //height: 300,
        alignItems: 'center',
        marginTop: 64,
        paddingBottom: 64,
        //marginBottom: 40,
        backgroundColor: colors.white,
    },
    backButton:{
        height: 32,
        width: 32,
        marginLeft: 16,
        justifyContent: 'center',
        //backgroundColor: colors.red,
    },
    searchBarContainer: {
        width: wp('100%')-64,
        backgroundColor: colors.white,
        //marginTop: 20,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    searchBarInputContainer: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.secondary_grey_light,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary_grey_light,
        borderRadius: 50,
        //paddingLeft: 5,
        height: 40,
    },
    searchBarInput: {
        color: colors.dark_blue,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        backgroundColor: colors.white,
    },
    listItem:{
        marginTop: 8,
    },
    card: {
        width: wp('100%') -32,
        height: 100, 
        marginRight: 16,
        marginBottom: 8,
        marginLeft: 16,
        marginTop: 2,
        borderRadius: 8,
        flexDirection: 'row',
        //alignItems: 'center',
        backgroundColor: colors.white,
        //shadow
        shadowColor: colors.light_grey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65, 
        elevation: 4,
    },
    cardContainer:{
      margin: 4,
      flexDirection: 'column',
    },
    couseImg:{
        borderRadius: 16,
        width: 100,
        height: 84,
        resizeMode: 'cover',
        marginLeft: 8, 
        alignSelf: 'center',
    },
    cardTitle: {
        width: wp('100%') -192,
        fontFamily: 'Nunito-Bold',
        fontSize: 14,
        marginTop: 4,
        marginHorizontal: 8,
        color: colors.dark_blue,
    },
    cardAuthor: {
        fontFamily: 'Nunito-Regular',
        fontSize: 13,
        marginHorizontal: 8,
        color: colors.dark_blue,
    },
    infoContainer:{
        width: wp('100%') - 192,
        marginTop: 4,
        marginHorizontal: 8,
        flexDirection: 'row',
    },
    infoItem: {
        height: 12,
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoIcon:{
    },
    infoText: {
        fontFamily: 'Nunito-Bold',
        color: colors.dark_blue,
        fontSize: 12,
        marginLeft: 2,
    },
    icRight: {
      marginTop: 8,
    },
    resultText:{
        width: wp('100%')-32,
        fontSize: 12,
        marginLeft: 16,
        fontFamily: 'Nunito-Bold',
        color: colors.dark_blue,
        
    },
  
})
export default styles