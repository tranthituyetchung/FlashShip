import React, {useState} from 'react';
import styled from 'styled-components/native';
import AddDishButton from 'common/AddDishBtn';
import DishCounter from 'common/DishCounter';
import {useWindowDimensions} from 'react-native';
import colors from '../../values/color';
import * as RootNavigation from 'navigation/RootNavigation';
const DishContainer = styled.TouchableOpacity`
  width: 48%;
  border-radius: 8px;
  background-color: white;
  margin-bottom: 16px;
`;
const DishName = styled.Text`
  font-size: 14px;
  font-family: 'Nunito-SemiBold';
  color: ${colors.dark_blue}
  margin-top: 6px;
`;
const DishPrice = styled.Text`
  font-size: 14px;
  font-family: Nunito-Bold;
  margin-vertical: 4px;
  color: ${colors.dark_blue};
`;
const QQContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DishImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;
const BigDish = ({dish, addDish, navigation, number}) => {
  const width = useWindowDimensions().width;
  const qqWidth = 0.5 * (width - 32) - 8;
  return (
    <DishContainer disabled style={{width: qqWidth}}>
      <DishImage
        style={{width: qqWidth, height: qqWidth}}
        source={dish.imageUrl}
      />
      <DishName>{dish.name}</DishName>
      <QQContainer>
        <DishPrice>{dish.price}</DishPrice>
        {number ? (
          <DishCounter
            number={number}
            removeDish={null}
            addDish={addDish}
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
export default BigDish;
