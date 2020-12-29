import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../values/color';

const Rect = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${colors.primary_blue};
`;

const NumberContainer = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 1px;
  border-color: white;
  background-color: ${colors.dark_blue};
  position: absolute;
  right: -9px;
  top: -9px;
  z-index: 1;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;
const Number = styled.Text`
  font-family: Nunito-Regular;
  font-size: 10px;
  color: ${colors.white};
`;
const IconWithNumber = ({number, onPress, backgroundAnim}) => {
  return (
    <View style={{width: 50, height:50, alignItems:"center", justifyContent:"center", paddingRight: 5}}>
      <Rect onPress={onPress}>
        <Icon name={'shopping-cart'} color={colors.white} size={24}></Icon>
        <NumberContainer>
          <Number>{number || '1'}</Number>
        </NumberContainer>
      </Rect>
    </View>
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
