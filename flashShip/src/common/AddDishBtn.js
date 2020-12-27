import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import PlusButton from 'common/PlusButton';


const AddDishButton = ({addDish}) => {
  return (
        <TouchableOpacity onPress = {addDish}>
            <PlusButton></PlusButton>
        </TouchableOpacity>        
  );
};
export default AddDishButton;
