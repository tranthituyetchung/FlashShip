import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../values/color';

const wratio = wp('100%') / 375;
const hratio = hp('100%') / 812;
const styles = StyleSheet.create({
  inputArea: {
    width: wp('100%') - 40,
    height: 38,
    marginTop: hp('10%') + 10,
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    width: wp('70%') - 40,
    marginRight: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
    paddingLeft: 15,
  },
  applyBtn: {
    height: '100%',
    width: wp('40%') - 40,
    borderRadius: 8,
    borderColor: '#ddd',
    color: 'grey',
    borderWidth: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  mainContainer: {
    width: wp('100%') - 30,
    height: 72,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    height: 72,
    marginBottom: 10,
    // borderWidth: 1,
    borderRadius: 8,
    // borderColor: '#f7f7f7',
    // borderBottomWidth: 0,
    shadowColor: '#f9f9f9',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    flex: 8,
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  subTitle: {
    color: colors.dark_blue,
    flex: 1,
  },
  hour: {
    color: colors.red,
    // flex: 1,
  },
  selectBtn: {
    display: 'flex',
    marginRight: 5,
    justifyContent: 'center',
  },
});

export default styles;
