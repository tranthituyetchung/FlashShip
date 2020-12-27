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

const data = [
  {
    name: 'Fruit for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food6.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food7.png'),
  },
  {
    name: 'Fruit for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food1.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food2.png'),
  },
];
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      filteredData: [],
    };
  }
  renderItem = ({item}) => (
      <View style={styles.card}>
    <TouchableOpacity
         style={styles.cardContainer}
    >
        <Text style={styles.number}>1x</Text>
        <Image 
            style={styles.couseImg} 
            source={require('assets/images/Food1.png')}/>
        <Text style={styles.cardTitle} numberOfLines={2}>Món ăn đặc biệt</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>55.000đ</Text>
            <Text style={styles.priceDiscount}>75.000đ</Text>
        </View>
    </TouchableOpacity>
    <View style={styles.sectionLine}></View> 
    </View>
  )
  componentDidMount() {
    //this.props.getSearchHistory()
  }
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  render() {
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
                            data={data}
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
                            <Text style={styles.totalTitle}>Tạm tính (4 phần)</Text>
                            <Text style={styles.totalPrice}>240.000đ</Text>
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
                            <Text style={styles.totalPrice}>-20.000đ</Text>
                        </View>
                    </View>
                    <View style={styles.sectionLine}></View>   
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
                    <View style={styles.paymentContainer}>
                        <TouchableOpacity
                            style={styles.paymentBtn}
                        >
                            <Text style={styles.infoIcon}><IcCash/></Text>
                            <Text style={styles.infoText}>Tiền mặt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.paymentBtn}
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

export default Payment;
