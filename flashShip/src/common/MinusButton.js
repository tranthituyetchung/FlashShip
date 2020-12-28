import React from 'react';
import styled from 'styled-components/native';
import colors from '../values/color';
import {IcMinus} from '../values/images';

const Button = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-color: ${colors.secondary_grey};
  border-width: 1px;
`;

const MinusButton = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <IcMinus stroke-width={2} />
    </Button>
  );
};
export default MinusButton;
