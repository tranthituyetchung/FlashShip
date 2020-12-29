import React from 'react';
import {Text, Image, Animated, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../values/color';

const Circle = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background-color: transparent;
`;

const CircleIconButton = ({name, onPress, backgroundAnim, color}) => {
  return (
    <View>
      <Animated.View
        style={[
          styles.backgroundView,
          {backgroundColor: 'rgba(0,0,0,0.3)'},
          // {backgroundColor: backgroundAnim}
          {
            zIndex: -1,
            opacity: backgroundAnim,
            // opacity: 1
          },
        ]}></Animated.View>

      <Circle onPress={onPress}>
        <Icon name={name} color={color||'white'} size={24}></Icon>
      </Circle>
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
export default CircleIconButton;
