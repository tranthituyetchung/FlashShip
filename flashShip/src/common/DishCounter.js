import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import MinusButton from 'common/MinusButton';
import PlusButton from 'common/PlusButton';

const QQContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 73px;
  align-items: center;
`;
const DishNum = styled.Text`
  font-size: 14px;
  font-family: 'Nunito';
  font-weight: 400;
`;
const DishCounter = ({number, addDish, removeDish}) => {
  return (
      <QQContainer>
        <TouchableOpacity onPress = {removeDish}>
            <MinusButton></MinusButton>
        </TouchableOpacity>   
        <DishNum>{number}</DishNum>
        <TouchableOpacity onPress = {addDish}>
            <PlusButton></PlusButton>
        </TouchableOpacity>
        
      </QQContainer>
  );
};
export default DishCounter;
