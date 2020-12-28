import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { IcMapPin, IcPriceTag, IcGiftVoucher } from '../../values/images';
import PlusButton from '../../common/PlusButton';
import MinusButton from '../../common/MinusButton';
import SmallDish from '../../common/SmallDish';
import BigDish from './BigDish';
import colors from 'values/color';
import Icon from 'react-native-vector-icons/Feather'
import CircleIconButton from '../../common/CircleIconButton';
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
  height: 8%;
  width: 100%;
  flex-direction: row;
  padding-horizontal: 16px;
  justify-content: space-between;
  align-items: center;
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
  color:${colors.dark_blue}
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
  align-items: flex-start;
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
  margin-left: 5px;
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
  console.log(item);
  const handleScroll = (e) => {
    // console.log(e.nativeEvent.contentOffset.y);
    const y = e.nativeEvent.contentOffset.y;
    if (y <= 143)
      setRatio(y / 140);
  }
  return (
    <>
      <BackgroundImage source={item.imageUrl} />
      <Container>
        <ButtonContainer style={{ backgroundColor: `rgba(256,256,256,${ratio})` }}>
          <CircleIconButton name="chevron-left" onPress={()=>props.navigation.goBack()} />
          <ButtonContainerRight>
            <CircleIconButton name="heart" />
            <CircleIconButton name="search" />
          </ButtonContainerRight>
        </ButtonContainer>
        <ScrollView onScroll={handleScroll}>
          <DataContainer>
            <StoreName>{item.name}</StoreName>
            <DescText>{item.category}</DescText>
            <LocationContainer>
              <IcMapPin width={20} height={20} />
              <LocationText>{item.distance}</LocationText>
              <Eclipse />
              <LocationText>
                {item.address}
              </LocationText>
            </LocationContainer>
            <AllVoucherContainer>
              <VoucherContainer>
                <IcPriceTag width={20} height={20} stroke={'#EB5757'} />
                <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
              </VoucherContainer>
              <VoucherContainer>
                <IcGiftVoucher width={20} height={20} stroke={'#EB5757'} />
                <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
                <SeeAll>
                  <TextMore>Xem thêm</TextMore>
                </SeeAll>
              </VoucherContainer>
            </AllVoucherContainer>
            <ListTitle>Bán chạy</ListTitle>
            <DishContainer>
              {
                item.dishes.filter((dish) => dish.type === 'big').map((dish) => <BigDish onAddPress={()=>props.navigation.navigate("RestaurantAdd",{dish})} dish={dish} />)
              }
            </DishContainer>
            <ListTitle>Món chính</ListTitle>
            {
              item.dishes.filter((dish) => dish.type === 'small').map((dish) => <SmallDish dish={dish} />)
            }
          </DataContainer>
        </ScrollView>
      </Container>
    </>
  );
};
export default StoreDetail;
