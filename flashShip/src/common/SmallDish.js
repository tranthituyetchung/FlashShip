import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTag, IcGiftVoucher} from '../values/images';
import AddDishButton from 'common/AddDishBtn';
import DishCounter from 'common/DishCounter';
import colors from '../values/color';
const DishContainer = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: white;
  margin-bottom: 16px;
  flex-direction: row;
`;
const DishName = styled.Text`
  font-size: 14px;
  font-family: Nunito-SemiBold;
  color: ${colors.dark_blue};
`;
const DishPrice = styled.Text`
  font-size: 14px;
  font-family: Nunito-Bold;
  margin-vertical: 4px;
  color: ${colors.dark_blue};
`;
const QQContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 4px;
  right: 0px;
  align-items: center;
`;
const DishNum = styled.Text`
  font-size: 14px;
  font-family: Nunito-Regular;
`;
const TextContainer = styled.View``;
const PriceContainer = styled.View`
  margin-left: auto;
  align-items: flex-end;
  margin-top: 4px;
  color: ${colors.dark_blue};
`;
const DiscountPrice = styled.Text`
  text-decoration-line: line-through;
  font-family: Nunito-Regular;
  font-size: 11px;
  color: ${colors.dark_blue};
`;
const SoldNum = styled.Text`
  font-family: Nunito-Regular;
  font-size: 12px;
  margin-top: 6px;
  color: ${colors.dark_blue};
`;
const IconContainer = styled.Text`
  margin-right: 5px;
`;
const DishNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;
const SmallDish = ({addDish, removeDish, dish, number}) => {
  return (
    <DishContainer disabled>
      <Image
        style={{width: 100, height: 100, marginRight: 8}}
        source={dish.imageUrl}
      />
      <TextContainer>
        <DishNameContainer>
          {dish.discount ? (
            <IconContainer>
              <IcPriceTag width="16" height="16" stroke={'#52C3FC'} />
            </IconContainer>
          ) : null}
          <DishName
          // style={{fontFamily:"Nunito-SemiBold"}}
          >
            {dish.name}
          </DishName>
        </DishNameContainer>
        <SoldNum>{dish.sold}+ đã bán</SoldNum>
      </TextContainer>
      <PriceContainer>
        <DishPrice>{dish.price}</DishPrice>
        {dish.discount ? <DiscountPrice>{dish.discount}</DiscountPrice> : null}
      </PriceContainer>
      <QQContainer>
        {number ? (
          <DishCounter
            number={number}
            addDish={addDish}
            removeDish={removeDish}
          />
        ) : (
          <AddDishButton
            addDish={addDish}
          />
        )}
      </QQContainer>
    </DishContainer>
  );
};
export default SmallDish;
