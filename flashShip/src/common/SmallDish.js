import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTag, IcGiftVoucher} from '../values/images';
import AddDishButton from 'common/AddDishBtn';
import DishCounter from 'common/DishCounter';
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
const SmallDish = ({dish}) => {
  const number = 0;
  return (
    <DishContainer>
      <Image
        style={{width: 100, height: 100, marginRight: 6}}
        source={dish.imageUrl}
      />
      <TextContainer>
        <DishName>
          {dish.discount ? (<IcPriceTag  width="16" height="16" stroke={'#52C3FC'} />) : null}
          {dish.name}
        </DishName>
        <SoldNum>{dish.sold}+ đã bán</SoldNum>
      </TextContainer>
      <PriceContainer>
        <DishPrice>{dish.price}</DishPrice>
        {dish.discount ? <DiscountPrice>{dish.discount}</DiscountPrice> : null}
      </PriceContainer>
      <QQContainer>
        {number ? <DishCounter number = {number}/> : <AddDishButton/>}
      </QQContainer>
    </DishContainer>
  );
};
export default SmallDish;
