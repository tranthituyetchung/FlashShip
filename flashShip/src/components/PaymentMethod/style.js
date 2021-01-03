import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from 'values/color'

const wratio = wp('100%') / 375;
const hratio = hp('100%') / 812;
const styles = StyleSheet.create({
  mainContainer: {
    width: wp('100%') - 10,
    height: hp('30%'),
    marginTop: 64,
    marginLeft: 5,
    marginBottom: 20,
    //borderTopColor: colors.primary_grey,
    //borderTopWidth: 1,
    backgroundColor: colors.white,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
    marginTop: 3,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.primary_grey,
    borderBottomWidth: 1,
    padding: 5,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  methodTitle:{
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: colors.dark_blue,
  },
  subtitle: {
    marginTop: 7, 
  },
});

export default styles;
