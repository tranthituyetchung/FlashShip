import React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'

const Circle = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    background-color: rgba(0,0,0,0.3);
`;

const CircleIconButton = ({name, onPress})=>{
    return (<Circle onPress={onPress}>
        <Icon name={name} color={"white"} size={24}></Icon>
    </Circle>)
}
export default CircleIconButton;