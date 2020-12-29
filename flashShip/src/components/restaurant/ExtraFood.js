import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import colors from '../../values/color';
import styles from './style';

function ExtraFood(props) {
  const {title, extraFoods} = props;
  const isActive = props.options;

  return (
    <View style={styles.extraFoodContainer}>
      <Text style={styles.extraFoodTitle}>{title}</Text>

      {extraFoods.map((food, i) => (
        <TouchableOpacity key={i} onPress={() => props.addBonus(food.id)}>
          <View style={styles.extraFoodSection}>
            <View style={styles.extraFoodSubTitle}>
              <View style={styles.extraFoodCenter}>
                <RadioButton
                  style={styles.extraFoodAuto}
                  value={isActive[food.id]}
                  status={isActive[food.id] ? 'checked' : 'unchecked'}
                  onPress={() => props.addBonus(food.id)}
                  uncheckedColor={colors.primary_grey_light}
                  color={colors.primary_blue}
                />
              </View>
              <View style={styles.extraFoodCenter}>
                <Text
                  style={
                    isActive[food.id]
                      ? styles.extraFoodSelected
                      : styles.extraFoodAuto
                  }>
                  {food.content}
                </Text>
              </View>
            </View>
            <View style={styles.extraFoodCenter}>
              <Text style={styles.extraFoodPrice}>{food.price}đ</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default ExtraFood;
