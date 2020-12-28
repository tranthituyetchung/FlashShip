import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Header from 'common/Header';
import strings from 'values/strings';
import colors from 'values/color';
import styles from './style';
import ExtraFood from './ExtraFood';
import {IcNote} from 'values/images';
import ConfirmBtn from 'common/ConfirmBtn'
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import SmallDish from "../../common/SmallDish";
function RestaurentAdd(props) {
  const height = useWindowDimensions().height;
  const [screenHeight, setScreenHeight] = useState(0);
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
  const onContentSizeChange = (contentWidth, contentHeight) => {
   setScreenHeight(contentHeight)
  };
  
  const scrollEnabled = screenHeight > height/2;
  const onBackPress = () => {
    props.navigation.goBack();
  };
  const openPayment = () => {
    props.navigation.navigate('Payment');
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
    
      <Header title={strings.RestaurantAdd} onBackPress={onBackPress} />
      {/* Component mon an */}
      
      <ScrollView 
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChange}
       >
          <View style={styles.container}>
            {/* <View style={styles.tmp}></View> */}
            <View style={{paddingHorizontal:16}}>
            <SmallDish dish ={{
                name: 'Bánh mì chả lụa',
                price: 55000,
                sold: 999,
                type: 'big',
                discount: 75000,
                imageUrl: require('../../assets/images/DishImage.png')
            }}/> 
            </View>
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
              <View style={styles.blank}/>
          </View>
        
      </ScrollView>
      
      <ConfirmBtn title={strings.RestaurantAddBtn} onPress={openPayment} />

  </View>
  );
}

export default RestaurentAdd;
