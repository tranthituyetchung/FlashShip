import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import PlusButton from 'common/PlusButton';
import * as RootNavigation from "navigation/RootNavigation";
const ButtonContainer = styled.TouchableOpacity`
  margin-left: auto;
`;
const AddDishButton = ({addDish, navigation}) => {
  return (
        <ButtonContainer onPress = {()=>{RootNavigation.navigate("RestaurantAdd");console.log("ABCXYZ")}}>
            <PlusButton></PlusButton>
        </ButtonContainer>        
  );
};
export default AddDishButton;
