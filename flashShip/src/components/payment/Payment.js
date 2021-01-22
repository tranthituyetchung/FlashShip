import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput
} from 'react-native';
import styles from './style';
import strings from 'values/strings';
import colors from 'values/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcEdit, IcMapPin, IcNote, IcGiftVoucher, IcLogout, IcUser, IcSettings, IcCash } from 'values/images'
import Icon from 'react-native-vector-icons/Feather'
import Header from 'common/Header'
import ConfirmBtn from '../../common/ConfirmBtn';
import { setPayment, applyPromotion } from '../../action/cart/action';
import { data1, data2, data3, data4 } from '../home/Home';
import { connect } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
class Payment extends Component {
  constructor(props) {
    super(props);
    this.listDishes = null;
  }
  findData = () => {
    if (!this.listDishes) {
      for (let item of data1) {
        if (item.id == this.props.cart.shopId) this.listDishes = item.dishes;
      }
      if (!this.listDishes) {
        for (let item of data2) {
          if (item.id == this.props.cart.shopId) this.listDishes = item.dishes;
        }
        if (!this.listDishes) {
          for (let item of data3) {
            if (item.id == this.props.cart.shopId) this.listDishes = item.dishes;
          }
          if (!this.listDishes) {
            for (let item of data4) {
              if (item.id == this.props.cart.shopId) this.listDishes = item.dishes;
            }
          }
        }
      }
    }
  }
  renderItem = ({ item }) => {
    let current = null;
    for (let dish of this.listDishes) {
      if (item.key == dish.id) current = dish;
    }
    const mapOptionsName = current.options.reduce((result, item) => {
      result[item.id] = item.content;
      return result
    }, {});
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.cardContainer}
        >
          <Text style={styles.number}>{item.number}x</Text>
          <Image
            style={styles.couseImg}
            source={current.imageUrl} />
          <View>
            <Text style={styles.cardTitle} numberOfLines={2}>{current.name}</Text>
            {
              item.options ? 
              <Text style={styles.cardDesc} numberOfLines={2}>{Object.keys(item.options).reduce((all, key, i) => {
                if(item.options[key]) {
                  const data = mapOptionsName[key];
                  if(!all.firstTime){
                    all.string += `${data}, `;
                    all.firstTime = true;
                  } else all.string += `${data.toLowerCase()}, `
                }
                return all;
              } ,{string: '', firstTime: false}).string.replace(/, $/,'.')}</Text> : null
            }
            {item.note !== '' ? <Text style={styles.cardOption} numberOfLines={2}>{item.note || 'Không có note'}</Text>: null}
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Text style={styles.price}>{item.price}đ</Text>
            <Text style={styles.priceDiscount}>{item.discount}đ</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.sectionLine}></View>
      </View>
    )
  }
  componentDidMount() {
    //this.props.getSearchHistory()
  }
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  setPayment = () => {
    this.props.navigation.navigate("SelectPayment", { setPayment: (paymentId) => this.props.setPayment(paymentId) })
  }
  setPromotion = () => {
    this.props.navigation.navigate("Voucher", { setPromotion: (promotionItem) => this.props.applyPromotion(promotionItem) })
  }
  caculatePromotion = (price) => {
    console.log("debuggg", this.props.cart.promotion);
    if (!this.props.cart.promotion) return 0;
    if (this.props.cart.promotion.min > price) {
      //show popup warnin
      return 0;
    } else {
      const max = this.props.cart.promotion.max;
      const reduce = this.props.cart.promotion.reduce * price;
      return (max > reduce) ? reduce : max;
    }
  }
  render() {
    this.findData();
    const reducedMoney = this.caculatePromotion(this.props.cart.totalPrice);
    console.log("debuggg", reducedMoney);
    const listInCart = Object.keys(this.props.cart.listItem).reduce((list, key) => {
      const listIns = Object.keys(this.props.cart.listItem[key]).map((keyIns) => {
        const item = this.props.cart.listItem[key][keyIns];
        item.key = key;
        item.keyIns = keyIns;
        return item;
      });
      list = list.concat(listIns);
      return list;
    }, []);
    console.log(listInCart)
    return (
      <View style={styles.container}>
        <Header
          title={"Thanh toán"}
          onBackPress={this.onBackPress} />
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.content}>
          <View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Giao hàng đến</Text>
              <View style={styles.locationContainer}>
                <IcMapPin fill="#CFEEFE" />
                <View style={styles.locationContent}>
                  <Text style={styles.location} numberOfLines={1}>227 Nguyễn Văn Cừ</Text>
                  <Text style={styles.locationDetail} numberOfLines={1}>227 Nguyễn Văn Cừ, Phường 1, Quận 5, Thành phố Hồ Chí Minh</Text>
                </View>
                <Icon name="chevron-right" color={colors.dark_blue} size={24} />
              </View>
              <View style={styles.RestaurantAddNote}>
                <View style={styles.RestaurantAddIconNote}>
                  <IcNote />
                </View>
                <TextInput
                  style={styles.inputText}
                  placeholder={strings.RestaurantNote}
                />
              </View>
              <View style={styles.sectionLine}></View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Đơn hàng của bạn</Text>
              <View style={styles.orderContainer}>
                <FlatList
                  nestedScrollEnabled
                  horizontal={false}
                  data={listInCart}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.keyIns}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.totalContainer}>
                <View style={styles.totalLine}>
                  <Text style={styles.totalTitle}>Tạm tính ({this.props.cart.totalItem} phần)</Text>
                  <Text style={styles.totalPrice}>{this.props.cart.totalDiscount}đ</Text>
                </View>
                <View style={styles.totalLine}>
                  <Text style={styles.totalTitle}>Phí giao hàng</Text>
                  <Text style={styles.totalPrice}>15.000đ</Text>
                </View>
                <View style={styles.totalLine}>
                  <Text style={styles.totalTitle}>Phí dịch vụ</Text>
                  <Text style={styles.totalPrice}>5.000đ</Text>
                </View>
                <View style={styles.totalLine}>
                  <Text style={styles.totalTitle}>Giảm giá</Text>
                  <Text style={styles.totalPrice}>-{this.props.cart.totalDiscount - this.props.cart.totalPrice + reducedMoney}đ</Text>
                </View>
              </View>
              <View style={styles.sectionLine}></View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
              <View style={styles.paymentContainer}>
                <TouchableOpacity
                  style={styles.paymentBtn}
                  onPress={this.setPayment}
                >
                  <Text style={styles.infoIcon}>{this.props.cart.payment ? this.props.cart.payment.icon : <IcCash />}</Text>
                  <Text style={styles.infoText}>{this.props.cart.payment ? this.props.cart.payment.title : 'Tiền mặt'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.paymentBtn}
                  onPress={this.setPromotion}
                >
                  <Text style={styles.infoIcon}><IcGiftVoucher /></Text>
                  <Text style={styles.infoText}>{this.props.cart.promotion ? this.props.cart.promotion.code : 'Mã khuyến mãi'}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.blank}></View>
          </View>
        </ScrollView>
        <ConfirmBtn title={'Thanh toán'} onPress={() => this.props.navigation.navigate('Home')}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: widthPercentageToDP('100%')-32, marginTop: 8,}}>
            <Text style={{fontFamily: 'Nunito-Regular', fontSize: 16, color: colors.dark_blue}}>Thanh Toán</Text>
            <Text style={{fontFamily: 'Nunito-Bold', fontSize: 20, color: colors.dark_blue}}>{this.props.cart.totalPrice + 20000 - reducedMoney}đ</Text>
          </View>
        </ConfirmBtn>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  setPayment, applyPromotion
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
