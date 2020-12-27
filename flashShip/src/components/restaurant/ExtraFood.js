import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import colors from '../../values/color';
import styles from './style';

function ExtraFood(props) {
  const {title, extraFoods} = props;

  const [isActive, setIsActive] = useState(0);

  return (
    <View style={styles.extraFoodContainer}>
      <Text style={styles.extraFoodTitle}>{title}</Text>

      {extraFoods.map((food, i) => (
        <TouchableOpacity key={i}>
          <View style={styles.extraFoodSection}>
            <View style={styles.extraFoodSubTitle}>
              <RadioButton
                style={styles.extraFoodAuto}
                value={i}
                status={isActive === i ? 'checked' : 'unchecked'}
                onPress={() => setIsActive(i)}
                uncheckedColor={colors.primary_grey_light}
                color={colors.primary_blue}
              />
              <Text
                style={
                  isActive ? styles.extraFoodSelected : styles.extraFoodAuto
                }>
                {food.name}
              </Text>
            </View>
            <Text style={styles.extraFoodPrice}>{food.price}đ</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default ExtraFood;
