import React from 'react';
import styled from 'styled-components/native';
import {IcPlus} from '../values/images';

const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #52c3fc;
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
