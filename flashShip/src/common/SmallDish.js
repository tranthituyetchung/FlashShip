import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTag, IcGiftVoucher} from '../values/images';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
const DishContainer = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: white;
  margin-bottom: 16px;
  flex-direction: row;
`;
const DishName = styled.Text`
  font-size: 14px;
  font-family: 'Nunito';
  font-weight: 600;
  margin-top: 6px;
`;
const DishPrice = styled.Text`
  font-size: 14px;
  font-family: 'Nunito';
  font-weight: 700;
  margin-vertical: 4px;
`;
const QQContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 73px;
  position: absolute;
  bottom: 4px;
  right: 0px;
  align-items: center;
`;
const DishNum = styled.Text`
  font-size: 14px;
  font-family: 'Nunito';
  font-weight: 400;
`;
const TextContainer = styled.View``;
const PriceContainer = styled.View`
  margin-left: auto;
  align-items: flex-end;
`;
const DiscountPrice = styled.Text`
  text-decoration-line: line-through;
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 10px;
  color: #86869e;
`;
const SoldNum = styled.Text`
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 12px;
  color: #86869e;
  margin-top: 6px;
`;
const SmallDish = () => {
  return (
    <DishContainer>
      <Image
        style={{width: 100, height: 100, marginRight: 6}}
        source={require('../assets/images/DishImage.png')}
      />
      <TextContainer>
        <DishName>
          {<IcPriceTag  width="16" height="16" stroke={'#52C3FC'} />}{"  "}
          Bánh mì sốt bơ
        </DishName>
        <SoldNum>1000+ đã bán</SoldNum>
      </TextContainer>
      <PriceContainer>
        <DishPrice>55.000</DishPrice>
        <DiscountPrice>75.000</DiscountPrice>
      </PriceContainer>
      <QQContainer>
        <MinusButton></MinusButton>
        <DishNum>1</DishNum>
        <PlusButton></PlusButton>
      </QQContainer>
    </DishContainer>
  );
};
export default SmallDish;
