import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const wratio = wp('100%') / 375;
const hratio = hp('100%') / 812;
const styles = StyleSheet.create({
  mainContainer: {
    width: wp('100%') - 10,
    height: hp('30%'),
    marginTop: hp('10%') + 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
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
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  subtitle: {
    marginTop: 7,
  },
});

export default styles;
