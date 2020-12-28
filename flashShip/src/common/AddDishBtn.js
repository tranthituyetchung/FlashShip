import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import PlusButton from './PlusButton';
import * as RootNavigation from 'navigation/RootNavigation';
const ButtonContainer = styled.TouchableOpacity`
  margin-left: auto;
`;
const AddDishButton = ({addDish}) => {
  return (
    <ButtonContainer>
      <PlusButton onPress={addDish}/>
    </ButtonContainer>
  );
};
export default AddDishButton;
