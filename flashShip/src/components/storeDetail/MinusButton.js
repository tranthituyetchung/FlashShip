import React from 'react';
import styled from 'styled-components/native';
import {IcMinus} from '../../values/images';

const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-color: #86869E;
  border-width: 2px;
`;

const MinusButton = () => {
  return (
    <Button>
      <IcMinus stroke-width={2} />
    </Button>
  );
};
export default MinusButton;
