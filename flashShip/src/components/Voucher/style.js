import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../values/color';

const wratio = wp('100%') / 375;
const hratio = hp('100%') / 812;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputArea: {
    width: wp('100%') - 40,
    height: 38,
    marginTop: 72,
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    width: wp('70%') - 40,
    marginRight: 10,
    backgroundColor: colors.primary_grey,
    borderRadius: 8,
    paddingLeft: 15,
    fontFamily: 'Nunito-Regular',
  },
  applyBtn: {
    height: '100%',
    width: wp('40%') - 40,
    borderRadius: 8,
    borderColor: colors.secondary_grey_light,
    color: colors.secondary_grey,
    borderWidth: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  },
  mainContainer: {
    width: wp('100%') - 30,
    height: 72,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 78,
  },
  section: {
    display: 'flex',
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 72,
    marginBottom: 10,
    // borderWidth: 1,
    borderRadius: 8,
    // borderColor: '#f7f7f7',
    // borderBottomWidth: 0,
    //shadow
    shadowColor: colors.primary_grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.01,
    shadowRadius: 4.65,
    elevation: 3,
  },
  title: {
    flex: 8,
    margin: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  subTitle: {
    fontFamily: 'Nunito-SemiBold',
    color: colors.dark_blue,
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  hour: {
    fontFamily: 'Nunito-Regular',
    color: colors.red,
    fontSize: 12,
    // flex: 1,
  },
  selectBtn: {
    display: 'flex',
    marginRight: 5,
    justifyContent: 'center',
  },
});

export default styles;
