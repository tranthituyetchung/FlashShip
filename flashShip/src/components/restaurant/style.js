import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../values/color';

const wratio = wp('100%') / 375;
const hratio = hp('100%') / 812;
const styles = StyleSheet.create({
  tmp: {
    width: wp('100%') - 30,
    height: 80,
    backgroundColor: 'red',
    marginTop: hp('10%') + 10,
    marginLeft: 15,
    marginRight: 15,
  },
  extraFoodContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  extraFoodTitle: {
    marginLeft: 15,
    marginRight: 15,
    color: colors.dark_blue,
    fontFamily: 'Nutito-Bold',
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
  },
  extraFoodSubTitle: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Nutito-Regular',
  },
  extraFoodAuto: {
    textAlignVertical: 'center',
    fontFamily: 'Nutito-Regular',
    fontSize: 14,
  },
  extraFoodPrice: {
    color: colors.light_black,
    fontFamily: 'Nutito-Regular',
    fontSize: 14,
  },
  extraFoodSelected: {
    color: colors.dark_blue,
    fontFamily: 'Nutito-Bold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  RestaurantAddNote: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ddd',
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
});

export default styles;
