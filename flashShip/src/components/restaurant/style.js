import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from 'values/color';

const wratio = wp('100%') / 375;
const hratio = hp('100%') / 812;
const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    marginTop: 72,
  },
  blank: {
    height: 200,
  },
  tmp: {
    width: wp('100%') - 32,
    height: 80,
    backgroundColor: 'red',
    marginTop: 64,
    marginLeft: 15,
    marginRight: 15,
    overflow: 'scroll',
  },
  extraFoodContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  extraFoodTitle: {
    marginLeft: 15,
    marginRight: 15,
    color: colors.dark_blue,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  extraFoodSection: {
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
  },
  extraFoodSubTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Nunito-Regular',
  },
  extraFoodAuto: {
    color: colors.dark_blue,
    textAlignVertical: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },
  extraFoodPrice: {
    color: colors.secondary_grey,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },
  extraFoodCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraFoodSelected: {
    color: colors.dark_blue,
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  RestaurantAddNote: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primary_grey,
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  RestaurantAddIconNote: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 5,
  },
  inputText: {
    height: 48,
    width: wp('100%') - 100,
    fontFamily: 'Nunito-Regular',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default styles;
