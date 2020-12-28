import React, {useState, useRef} from 'react';
import {Text, Image, Animated, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTag, IcGiftVoucher} from '../../values/images';
import PlusButton from '../../common/PlusButton';
import MinusButton from '../../common/MinusButton';
import SmallDish from '../../common/SmallDish';
import BigDish from './BigDish';
import colors from 'values/color';
import Icon from 'react-native-vector-icons/Feather';
import CircleIconButton from '../../common/CircleIconButton';
import DishCounter from '../../common/DishCounter';
const Container = styled.View`
  background-color: transparent;
  width: 100%;
`;
const BackgroundImage = styled.Image`
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 248px;
`;
const ButtonContainer = styled.View`
  z-index: 999;
  top: 0px;
  left: 0px;
  height: 56px;
  width: 100%;
  flex-direction: row;
  padding-horizontal: 16px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;
const ButtonContainerRight = styled.View`
  background-color: transparent;
  flex-direction: row;
  width: 88px;
  justify-content: space-between;
`;
// const ScrollView = styled.ScrollView`
//   height: 500px;
//   width: 200px;
// `;
const DataContainer = styled.View`
  border-top-left-radius: 32px;
  margin-top: 143px;
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
  margin-left: 5px;
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
`;
const ScrollView = styled.ScrollView`
  height: 92%;
  background-color: transparent;
`;

const StoreDetail = (props) => {
  const [ratio, setRatio] = useState(0);
  const item = props.route.params.item;
  // console.log(item);
  const handleScroll = (e) => {
    // console.log(e.nativeEvent.contentOffset.y);
    const y = e.nativeEvent.contentOffset.y;
    if (y <= 143 && y >= 0) fadeIn(y / 143);
    else if (y < 0) fadeIn(0);
    else fadeIn(1);
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = (ratio) => {
    Animated.timing(fadeAnim, {
      toValue: Math.min(ratio, 1),
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <BackgroundImage source={item.imageUrl} />

      <ButtonContainer>
        <CircleIconButton
          name="chevron-left"
          onPress={() => props.navigation.goBack()}
        />
        <ButtonContainerRight>
          <CircleIconButton name="heart" />
          <CircleIconButton name="search" />
        </ButtonContainerRight>
      </ButtonContainer>
      <Container>
        <Animated.View
          style={[
            // {
            //   backgroundColor: `rgba(256,256,256,${fadeAnim})`,
            // },
            styles.header,
            {
              opacity: fadeAnim,
              zIndex: -1,
            },
          ]}></Animated.View>
        <ScrollView onScroll={handleScroll}>
          <DataContainer>
            <StoreName>{item.name}</StoreName>
            <DescText>{item.category}</DescText>
            <LocationContainer>
              <IcMapPin width={20} height={20} />
              <LocationText>{item.distance}</LocationText>
              <Eclipse />
              <LocationText>{item.address}</LocationText>
            </LocationContainer>
            <AllVoucherContainer>
              <VoucherContainer>
                <VoucherText>
                  <IcPriceTag width={20} height={20} stroke={'#EB5757'} />
                </VoucherText>
                <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
              </VoucherContainer>
              <VoucherContainer>
                <VoucherText>
                  <IcGiftVoucher width={20} height={20} stroke={'#EB5757'} />
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
                      props.navigation.navigate('RestaurantAdd', {dish})
                    }
                    dish={dish}
                  />
                ))}
            </DishContainer>
            <ListTitle>Món chính</ListTitle>
            {item.dishes
              .filter((dish) => dish.type === 'small')
              .map((dish) => (
                <SmallDish
                  dish={dish}
                  addDish={() =>
                    props.navigation.navigate('RestaurantAdd', {dish})
                  }
                />
              ))}
          </DataContainer>
        </ScrollView>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    height: 56,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
export default StoreDetail;
