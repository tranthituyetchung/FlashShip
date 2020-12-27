import React from 'react';
import {View, TextInput} from 'react-native';
import Header from 'common/Header';
import strings from 'values/strings';
import colors from 'values/color';
import styles from './style';
import ExtraFood from './ExtraFood';
import {IcNote} from 'values/images';
import ConfirmBtn from 'common/ConfirmBtn'

function RestaurentAdd() {
  const Canh = [
    {name: 'Canh bí đỏ', price: 10000},
    {name: 'Canh bí đỏ', price: 10000},
    {name: 'Canh bí đỏ', price: 10000},
    {name: 'Canh bí đỏ', price: 10000},
  ];

  const MonAnKem = [
    {name: 'Rau xào', price: 10000},
    {name: 'Rau xào', price: 10000},
    {name: 'Rau xào', price: 10000},
    {name: 'Rau xào', price: 10000},
  ];

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Header title={strings.RestaurantAdd} />
      {/* Component mon an */}
      <View style={styles.tmp}></View>
      <ExtraFood title="Món ăn kèm" extraFoods={MonAnKem} />
      {/* <ExtraFood title="Món canh" extraFoods={Canh} /> */}
      <View style={styles.RestaurantAddNote}>
        <View style={styles.RestaurantAddIconNote}>
          <IcNote />
        </View>

        <TextInput
          style={styles.inputText}
          placeholder={strings.RestaurantNote}
        />
      </View>

      <ConfirmBtn title={strings.RestaurantAddBtn} />
    </View>
  );
}

export default RestaurentAdd;
