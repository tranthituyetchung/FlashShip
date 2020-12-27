import React from 'react';
import styled from 'styled-components/native';
import AddDishButton from 'common/AddDishBtn';
import DishCounter from 'common/DishCounter';

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
const BigDish = ({dish}) => {
  const number = 1;
  return (
    <DishContainer>
      <DishImage
        // style={{width: 164, height: 164}}
        source={dish.imageUrl}
      />
      <DishName>{dish.name}</DishName>
      <QQContainer>
        <DishPrice>{dish.price}</DishPrice>
        {number ? <DishCounter number = {number}/> : <AddDishButton/>}
      </QQContainer>
    </DishContainer>
  );
};
export default BigDish;
