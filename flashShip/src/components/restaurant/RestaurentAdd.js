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
import {connect} from 'react-redux';
import {addItem} from '../../action/cart/action';
function RestaurentAdd(props) {
  const height = useWindowDimensions().height;
  const [screenHeight, setScreenHeight] = useState(0);
  const [text, setValue] = useState('');
  const dish = props.route.params.dish;
  const bonus = dish.options;
  const options = dish.options.reduce((option, bonus) => {
    option[bonus.id] = 0; 
    return option;
  }, {});
  const [bonusMap, setBonusMap] = useState(options);
  const addBonus = (id) => {
    bonusMap[id] = !bonusMap[id];
    setBonusMap({...bonusMap})
  }
  const onContentSizeChange = (contentWidth, contentHeight) => {
   setScreenHeight(contentHeight)
  };
  
  const scrollEnabled = screenHeight > height/2;
  const onBackPress = () => {
    props.navigation.goBack();
  };
  const completeAddDish = () => {
    props.addDish(dish.id, props.route.params.shopId, text, bonusMap);
    props.navigation.goBack();
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
            <SmallDish dish = {dish}/> 
            </View>
            <ExtraFood title="Món ăn kèm" extraFoods={bonus} addBonus = {addBonus} options = {bonusMap} />
            <View style={styles.RestaurantAddNote}>
              <View style={styles.RestaurantAddIconNote}>
                <IcNote />
              </View>
              <TextInput
                style={styles.inputText}
                placeholder={strings.RestaurantNote}
                onChange={(data) => setValue(data)}
              />
              </View>
              <View style={styles.blank}/>
          </View>
        
      </ScrollView>
      
      <ConfirmBtn title={strings.RestaurantAddBtn} onPress={completeAddDish} />

  </View>
  );
}
const mapDispatchToProps = {
  addDish: addItem,
};

export default connect(null, mapDispatchToProps)(RestaurentAdd);
