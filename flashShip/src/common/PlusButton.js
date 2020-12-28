import React from 'react';
import styled from 'styled-components/native';
import colors from '../values/color';
import {IcPlus} from '../values/images';

const Button = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 24px;
  background-color: ${colors.primary_blue};
  align-items: center;
  justify-content: center;
`;

const PlusButton = ({onPress}) => {
  return (
    <Button onPress={onPress}>
      <IcPlus stroke-width={2} />
    </Button>
  );
};
export default PlusButton;
