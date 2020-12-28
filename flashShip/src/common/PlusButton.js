import React from 'react';
import styled from 'styled-components/native';
import colors from '../values/color';
import {IcPlus} from '../values/images';

const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${colors.primary_blue};
  align-items: center;
  justify-content: center;
`;

const PlusButton = () => {
  return (
    <Button>
      <IcPlus stroke-width={2} />
    </Button>
  );
};
export default PlusButton;
