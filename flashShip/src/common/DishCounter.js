import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import MinusButton from 'common/MinusButton';
import PlusButton from 'common/PlusButton';
import colors from '../values/color';

const QQContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  align-items: center;
`;
const DishNum = styled.Text`
  font-size: 14px;
  font-family: Nunito-Regular;
  color:${colors.dark_blue};  
`;
const DishCounter = ({number, addDish, removeDish}) => {
  return (
    <QQContainer>
      <MinusButton onPress={removeDish}></MinusButton>
      <DishNum>{number}</DishNum>
      {/* <TouchableOpacity onPress = {()=>{console.log("addDish")}}> */}
      <PlusButton onPress={addDish}></PlusButton>
      {/* </TouchableOpacity> */}
    </QQContainer>
  );
};
export default DishCounter;
