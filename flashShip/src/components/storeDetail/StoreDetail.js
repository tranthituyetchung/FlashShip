import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTag, IcGiftVoucher} from '../../values/images';
import PlusButton from '../../common/PlusButton';
import MinusButton from '../../common/MinusButton';
import SmallDish from '../../common/SmallDish';
import BigDish from './BigDish';
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
  background-color: blue;
  width: 100%;
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
  font-family: 'Nunito-Bold';
  font-weight: 700;
`;
const DescText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #86869e;
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
  margin-vertical: 8px;
`;
const LocationText = styled.Text`
  font-family: 'Nunito-Regular';
  font-weight: 400;
  font-size: 14px;
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
  color: #52c3fc;
`;
const VoucherText = styled.Text`
  color: #eb5757;
  margin-left: 5px;
`;
const DishContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
const ListTitle = styled.Text`
  font-family: 'Nunito-SemiBold';
  font-weight: 700;
  font-size: 16px;
`;
const ScrollView = styled.ScrollView`
  height: 92%;
  background-color: transparent;
  border-width: 1px;
  border-color: red;
`;
const StoreDetail = (props) => {
  const item = props.route.params.item;
  console.log(item);
  return (
    <>
      <BackgroundImage source={item.imageUrl} />
      <Container>
        <ButtonContainer></ButtonContainer>
        <ScrollView>
          <DataContainer>
            <StoreName>{item.name}</StoreName>
            <DescText>{item.category}</DescText>
            {/* <Image source={require('../../assets/images/ic_map_pin.svg')} /> */}
            <LocationContainer>
              <IcMapPin />
              <LocationText>{item.distance}</LocationText>
              <Eclipse />
              <LocationText>
                {item.address}{' '}
              </LocationText>
            </LocationContainer>
            <AllVoucherContainer>
              <VoucherContainer>
                <IcPriceTag stroke={'#EB5757'} />
                <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
              </VoucherContainer>
              <VoucherContainer>
                <IcGiftVoucher stroke={'#EB5757'} />
                <VoucherText>Giảm 20% toàn bộ menu</VoucherText>
                <SeeAll>
                  <TextMore>Xem thêm</TextMore>
                </SeeAll>
              </VoucherContainer>
            </AllVoucherContainer>
            <ListTitle>Bán chạy</ListTitle>
            <DishContainer>
              {
                item.dishes.filter((dish) => dish.type === 'big').map((dish) => <BigDish dish = {dish} />)
              }
            </DishContainer>
            <ListTitle>Món chính</ListTitle>
              {
                item.dishes.filter((dish) => dish.type === 'small').map((dish) => <SmallDish dish = {dish} />)
              }
          </DataContainer>
        </ScrollView>
      </Container>
    </>
  );
};
export default StoreDetail;
