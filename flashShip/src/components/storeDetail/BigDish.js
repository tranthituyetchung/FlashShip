import React from 'react';
import {Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {IcMapPin, IcPriceTag, IcGiftVoucher} from '../../values/images';
import MinusButton from '../../common/MinusButton';
import PlusButton from '../../common/PlusButton';

const DishContainer = styled.TouchableOpacity`
  width: 48%;
  border-radius: 8px;
  background-color: white;
  margin-bottom: 16px;
`;
const DishName = styled.Text`
  font-size: 14px;
  font-family: 'Nunito';
  font-weight: 400;
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
  bottom: 0px;
  right: 0px;
  align-items: center;
`;
const DishNum = styled.Text`
  font-size: 14px;
  font-family: 'Nunito';
  font-weight: 400;
`;
const DishImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;
const BigDish = () => {
  return (
    <DishContainer>
      <DishImage
        // style={{width: 164, height: 164}}
        source={require('../../assets/images/DishImage.png')}
      />
      <DishName>Bánh mì sốt bơ</DishName>
      <DishPrice>55.000</DishPrice>
      <QQContainer>
        <MinusButton></MinusButton>
        <DishNum>1</DishNum>
        <PlusButton></PlusButton>
      </QQContainer>
    </DishContainer>
  );
};
export default BigDish;
