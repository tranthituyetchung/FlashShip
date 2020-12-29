import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../values/color';

const Rect = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background-color: transparent;
`;

const IconWithNumber = ({name, onPress, backgroundAnim}) => {
  return (
      <Rect onPress={onPress}>
        <Icon name={name} color={'red'} size={24}></Icon>
      </Rect>
  );
};
const styles = StyleSheet.create({
  backgroundView: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: colors.dark_blue,
    position: 'absolute',
    left: 0,
  },
});
export default IconWithNumber;
