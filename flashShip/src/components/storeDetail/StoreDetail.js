import React, {useState, useRef} from 'react';
import {Text, Image, Animated, View, StyleSheet, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTagRed, IcGiftVoucherRed, IcPlus} from 'values/images';
import PlusButton from '../../common/PlusButton';
import MinusButton from '../../common/MinusButton';
import SmallDish from '../../common/SmallDish';
import BigDish from './BigDish';
import colors from 'values/color';
import Icon from 'react-native-vector-icons/Feather';
import CircleIconButton from '../../common/CircleIconButton';
import DishCounter from '../../common/DishCounter';
import {Modalize} from 'react-native-modalize';
import SmallDishWithOption from '../../common/SmallDishWithOption';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import Header from 'common/Header';
import IconWithNumber from './IconWithNumber';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';
import {quickAdd, removeItem} from '../../action/cart/action';

const Container = styled.View`
  background-color: transparent;
  width: 100%;
  z-index: 0;
`;
const BackgroundImage = styled.Image`
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 248px;
`;
const ButtonContainer = styled.View`
  top: 0px;
  left: 0px;
  height: 56px;
  width: ${wp('100%')}px;
  flex-direction: row;
  padding-horizontal: 8px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;
const ButtonContainerRight = styled.View`
  background-color: transparent;
  flex-direction: row;
  width: 86px;
  justify-content: space-between;
`;
// const ScrollView = styled.ScrollView`
//   height: 500px;
//   width: 200px;
// `;
const DataContainer = styled.View`
  border-top-left-radius: 32px;
  margin-top: 199px;
  background: white;
  padding-horizontal: 16px;
  padding-top: 16px;
`;
const StoreName = styled.Text`
  font-size: 24px;
  font-family: Nunito-ExtraBold;
  color: ${colors.dark_blue};
`;
const DescText = styled.Text`
  font-size: 14px;
  font-family: Nunito-Regular;
  color: ${colors.secondary_grey};
`;
const IconMap = styled.Image`
  height: 16px;
  width: 16px;
`;
const LocationContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 19px;
  margin-top: 8px;
  margin-bottom: 16px;
`;
const LocationText = styled.Text`
  font-family: Nunito-Regular;
  font-size: 14px;
  color: ${colors.dark_blue};
`;
const Eclipse = styled.View`
  width: 4px;
  height: 4px;
  background-color: black;
  border-radius: 4px;
  margin-horizontal: 4px;
`;
const AllVoucherContainer = styled.View`
  margin-bottom: 4px;
`;
const VoucherContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;
const SeeAll = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  top: 0px;
  justify-content: center;
`;
const TextMore = styled.Text`
  font-family: Nunito-Regular;
  color: ${colors.primary_blue};
`;
const VoucherText = styled.Text`
  color: ${colors.red};
  font-family: Nunito-Regular;
  margin-right: 5px;
`;
const DishContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
const ListTitle = styled.Text`
  font-family: Nunito-Bold;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 20px;
  color: ${colors.dark_blue};
`;
const ScrollView = styled.ScrollView`
  height: ${hp('100%') - 60 - StatusBar.currentHeight}px;
  background-color: transparent;
`;
const IconVoucherText = styled.Text`
  color: ${colors.red};
`;
const StoreDetail = (props) => {
  const item = props.route.params.item;
  const handleScroll = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const from = 50;
    const to = 143;
    if (y <= to && y >= from) fadeIn((y - from) / (to - from));
    else if (y < from) fadeIn(0);
    else fadeIn(1);
  };
  const [selectDish, setSelectDish] = useState(item.dishes[0]);
  //Open Modal
  const modalizeRef = useRef(null);

  const onOpenPopup = (dish) => {
    setSelectDish(dish);
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };
  const addDish = (instancesCount, dish) => {
    if (instancesCount > 1) {
      onOpenPopup(dish);
    } else props.navigation.navigate('RestaurantAdd', {dish, shopId: item.id});
  };
  const controlledRemoveDish = (instancesCount, dish, hashId) => {
    if (instancesCount > 1) {
      onOpenPopup(dish);
    } else {
      if (hashId) props.removeDish(dish.id, hashId);
    }
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const backgroundAnim = useRef(new Animated.Value(1)).current;
  const fadeIn = (ratio) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: Math.min(ratio, 1),
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundAnim, {
        toValue: 1 - Math.min(ratio, 1),
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
    // Animated.timing(fadeAnim, {
    //   toValue: Math.min(ratio, 1),
    //   duration: 0,
    //   useNativeDriver: true,
    // }).start();
  };

  return (
    <>
      <BackgroundImage source={item.imageUrl} />

      <View style={{position: 'absolute', zIndex: 2}}>
        <ButtonContainer>
          <CircleIconButton
            name="chevron-left"
            onPress={() => props.navigation.goBack()}
            backgroundAnim={backgroundAnim}
          />
          <ButtonContainerRight>
            <CircleIconButton
              name="heart"
              backgroundAnim={backgroundAnim}
              //Set onpress thì nhớ kéo xuống dưới thêm 1 cái on press của thằng này ở dưới nữa
            />
            <CircleIconButton
              name="search"
              backgroundAnim={backgroundAnim}
              //Set onpress thì nhớ kéo xuống dưới thêm 1 cái on press của thằng này ở dưới nữa
            />
          </ButtonContainerRight>
        </ButtonContainer>
      </View>

      <View
        style={{
          position: 'absolute',
          zIndex: 3,
          flexDirection: 'row',
          // backgroundColor: 'red',
          height: 56,
          width: wp('100%'),
        }}>
        <Animated.View style={{opacity: fadeAnim}}>
          <ButtonContainer>
            <CircleIconButton
              name="chevron-left"
              onPress={() => props.navigation.goBack()}
              backgroundAnim={0}
              color={colors.dark_blue}
            />
            <ButtonContainerRight>
              <CircleIconButton
                name="heart"
                color={colors.dark_blue}
                backgroundAnim={0}
                //Thêm chỗ này cho con tim yếu đuối
              />
              <CircleIconButton
                name="search"
                color={colors.dark_blue}
                backgroundAnim={0}
                //Thêm đây cho thằng search tìm kiếm chân lý
              />
            </ButtonContainerRight>
          </ButtonContainer>
          <Text
            style={styles.headerStoreName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.name}
          </Text>
        </Animated.View>
      </View>

      <View style={{width: wp('100%'), zIndex: 1}}>
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
            },
          ]}></Animated.View>
      </View>
      <Container>
        <View style={{height: '100%'}}>
          <ScrollView onScroll={handleScroll}>
            <DataContainer>
              <StoreName>{item.name}</StoreName>
              <DescText>{item.category}</DescText>
              <LocationContainer>
                <Text style={{marginRight: 5}}>
                  <IcMapPin width={20} height={20} />
                </Text>
                <LocationText>{item.distance}</LocationText>
                <Eclipse />
                <LocationText>{item.address}</LocationText>
              </LocationContainer>
              <AllVoucherContainer>
                <VoucherContainer>
                  <VoucherText>
                    <IcPriceTagRed width={20} height={20} />
                  </VoucherText>
                  <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
                </VoucherContainer>
                <VoucherContainer>
                  <VoucherText>
                    <IcGiftVoucherRed width={'20'} height={'20'} />
                  </VoucherText>

                  <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
                  <SeeAll>
                    <TextMore>Xem thêm</TextMore>
                  </SeeAll>
                </VoucherContainer>
              </AllVoucherContainer>
              <ListTitle>Bán chạy</ListTitle>
              <DishContainer>
                {item.dishes
                  .filter((dish) => dish.type === 'big')
                  .map((dish) => (
                    <BigDish
                      addDish={() =>
                        addDish(
                          props.cart.listItem[dish.id]
                            ? Object.keys(props.cart.listItem[dish.id]).length
                            : 0,
                          dish,
                        )
                      }
                      dish={dish}
                      number={
                        props.cart.listItem[dish.id]
                          ? Object.keys(props.cart.listItem[dish.id]).reduce(
                              (total, key) => (total += props.cart.listItem[dish.id][key].number),
                              0,
                            )
                          : 0
                      }
                      removeDish={() =>
                        controlledRemoveDish(
                          props.cart.listItem[dish.id]
                            ? Object.keys(props.cart.listItem[dish.id]).length
                            : 0,
                          dish,
                          props.cart.listItem[dish.id]
                            ? Object.keys(props.cart.listItem[dish.id])[0]
                            : null,
                        )
                      }
                    />
                  ))}
              </DishContainer>
              <ListTitle>Món chính</ListTitle>
              {item.dishes
                .filter((dish) => dish.type === 'small')
                .map((dish) => (
                  <SmallDish
                    dish={dish}
                    number={
                      props.cart.listItem[dish.id]
                          ? Object.keys(props.cart.listItem[dish.id]).reduce(
                              (total, key) => (total += props.cart.listItem[dish.id][key].number),
                              0,
                            )
                          : 0
                    }
                    addDish={() =>
                      addDish(
                        props.cart.listItem[dish.id]
                          ? Object.keys(props.cart.listItem[dish.id]).length
                          : 0,
                        dish,
                      )
                    }
                    removeDish={() =>
                      controlledRemoveDish(
                        props.cart.listItem[dish.id]
                          ? Object.keys(props.cart.listItem[dish.id]).length
                          : 0,
                        dish,
                        props.cart.listItem[dish.id]
                          ? Object.keys(props.cart.listItem[dish.id])[0]
                          : null,
                      )
                    }
                  />
                ))}
            </DataContainer>
          </ScrollView>
          {props.cart.totalItem && props.cart.shopId === item.id ? (
            <View style={styles.thanhToanBar}>
              <View style={styles.thanhToanPrices}>
                <IconWithNumber
                  number={props.cart.totalItem}
                  onPress={() => {}}></IconWithNumber>
                <View style={{marginLeft: 8}}>
                  <Text style={{fontFamily:'Nunito-Bold', fontSize: 16, color:colors.dark_blue,}}>{props.cart.totalPrice}đ</Text>
                  <Text style={{fontFamily:'Nunito-Regular', fontSize: 13, color:colors.dark_blue,textDecorationLine:'line-through'}} >{props.cart.totalDiscount}đ</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.thanhToanButton}
                onPress={() => props.navigation.navigate('Payment')}>
                <Text style={{fontFamily:'Nunito-Bold', fontSize: 14, color:colors.white,}}>Thanh toán</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <Modalize
          adjustToContentHeight={true}
          ref={modalizeRef}
          closeOnOverlayTap={true}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => onClose()}>
              <Icon name="x" color={colors.dark_blue} size={24} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Chỉnh sửa món ăn</Text>
            </View>
          </View>
          <ScrollView style={{height: 500}}>
            <View style={{marginHorizontal: 16, marginTop: 56}}>
              <TouchableOpacity
                style={styles.btnAdd}
                onPress={() =>
                  props.navigation.navigate('RestaurantAdd', {
                    dish: selectDish,
                    shopId: item.id,
                  })
                }>
                <Text style={styles.btnInfo}>
                  <IcPlus width={16} height={16} />
                </Text>
                <Text style={styles.btnText}>Thêm món mới</Text>
              </TouchableOpacity>
              {props.cart.listItem[selectDish.id]
                ? Object.keys(props.cart.listItem[selectDish.id]).map((key) => {
                  const item = props.cart.listItem[selectDish.id][key];
                  return (
                    <SmallDishWithOption
                      dish={selectDish}
                      addDish={() => props.quickAdd(selectDish.id, key)}
                      removeDish={() =>
                        props.removeDish(selectDish.id, key)
                      }
                      options={item.options}
                      notes={item.note}
                      number={item.number}
                    />
                  )})
                : null}
            </View>
            <View style={{height: 100}}></View>
          </ScrollView>
        </Modalize>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 56,
    shadowColor: '#000',
    width: wp('100%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
    position: 'absolute',
  },
  headerContainer: {
    //zIndex: 10,
    width: wp('100%'),
    height: 56,
    position: 'absolute',
    left: 0,
    top: 0,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
  backButton: {
    height: 40,
    width: 40,
    marginLeft: 24,
    justifyContent: 'center',
    //backgroundColor: colors.red,
  },
  titleContainer: {
    height: 40,
    height: 40,
    height: 40,
    height: 40,
    height: 40,
    width: wp('100%') - 128,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.green,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: colors.dark_blue,
  },
  btnAdd: {
    width: widthPercentageToDP('50%'),
    alignSelf: 'center',
    height: 44,
    // borderColor: colors.red,
    // borderWidth: 1,
    backgroundColor: colors.primary_blue,
    borderRadius: 8,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnInfo: {
    width: 16,
    height: 16,
    color: colors.red,
    //backgroundColor: 'red',
    marginRight: 6,
  },
  btnText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: colors.white,
  },
  headerStoreName: {
    color: colors.dark_blue,
    // backgroundColor: 'red',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: wp('40%'),
    height: 56,
    marginHorizontal: wp('30%'),
  },
  thanhToanButton: {
    borderRadius: 8,
    // padding: 8,
    height: 40,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary_blue,
  },
  thanhToanPrices: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  thanhToanBar: {
    backgroundColor: colors.white,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
     //shadow
     shadowColor: '#000',
     shadowOffset: {
       width: 4,
       height: -16,
     },
     shadowOpacity: 0.5,
     shadowRadius: 4.65,
     elevation: 8,
  },
});
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  quickAdd,
  removeDish: removeItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(StoreDetail);
