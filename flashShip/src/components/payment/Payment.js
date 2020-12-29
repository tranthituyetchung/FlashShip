import React, {Component} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';
import {IcEdit, IcMapPin, IcNote, IcGiftVoucher, IcLogout, IcUser, IcSettings } from 'values/images'
import Icon from 'react-native-vector-icons/Feather'
import Header from 'common/Header'
import { IcCash } from '../../values/images';
import ConfirmBtn from '../../common/ConfirmBtn';
import {setPayment, applyPromotion} from '../../action/cart/action';
import {data1} from '../home/Home';
import {connect} from 'react-redux';
class Payment extends Component {
  constructor(props) {
    super(props);
    this.listDishes = null;
    for(let item of data1) {
      if(item.id == this.props.cart.shopId) this.listDish = item.dishes;
    }
  }
  renderItem = ({item}) => {
    let current = null;
    for(let dish of this.listDish) {
      if(item.id == dish.id) current = dish;
    }
    return (
      <View style={styles.card}>
    <TouchableOpacity
         style={styles.cardContainer}
    >
        <Text style={styles.number}>{item.number}x</Text>
        <Image 
            style={styles.couseImg} 
            source={current.imageUrl}/>
        <Text style={styles.cardTitle} numberOfLines={2}>{current.name}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceDiscount}>{item.discount}</Text>
        </View>
    </TouchableOpacity>
    <View style={styles.sectionLine}></View> 
    </View>
  )}
  componentDidMount() {
    //this.props.getSearchHistory()
  }
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  setPayment = () => {
    this.props.navigation.navigate("SelectPayment", {setPayment: (paymentId) => this.props.setPayment(paymentId)})
  }
  setPromotion = () => {
    this.props.navigation.navigate("Voucher", {setPromotion: (promotionItem) => this.applyPromotion(promotionItem)})
  }
  caculatePromotion = (price) => {
    console.log("debuggg", this.props.cart.promotion);
    if(!this.props.cart.promotion) return 0;
    if(this.props.cart.promotion.min > price) {
      //show popup warnin
      return 0;
    } else {
      const max = this.props.cart.promotion.max;
      const reduce = this.props.cart.promotion.reduce*price;
      return (max > reduce) ? reduce : max;
    }
  }
  render() {
    const reducedMoney = this.caculatePromotion(this.props.cart.totalPrice);
    const listInCart = Object.keys(this.props.cart.listItem).reduce((list, key) => {
      const item = this.props.cart.listItem[key];
      list.concat(item.map((ins) => ins.id = key));
      return list
    }, [])
    return (
      <View style={styles.container}>
        <Header 
            title={"Thanh toán"}
            onPress={this.onBackPress} />
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.content}>
            <View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Giao hàng đến</Text>
                    <View style={styles.locationContainer}>
                        <IcMapPin fill="#CFEEFE"/>
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
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator = {false}
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
                        <View style={styles.totalLine}>
                            <Text style={styles.totalTitle}>Cần trả</Text>
                            <Text style={styles.totalPrice}>{this.props.cart.totalPrice + 20000 - reducedMoney}đ</Text>
                        </View>
                    </View>
                    <View style={styles.sectionLine}></View>   
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
                    <View style={styles.paymentContainer}>
                        <TouchableOpacity
                          style={styles.paymentBtn}
                          onPress  = {this.setPayment}
                        >
                            <Text style={styles.infoIcon}><IcCash/></Text>
                            <Text style={styles.infoText}>Tiền mặt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.paymentBtn}
                          onPress = {this.setPromotion}
                        >
                            <Text style={styles.infoIcon}><IcGiftVoucher/></Text>
                            <Text style={styles.infoText}>Mã khuyến mãi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blank}></View>
            </View>
        </ScrollView>
        <ConfirmBtn title={'Thanh toán'}></ConfirmBtn>
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
