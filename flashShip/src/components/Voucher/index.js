import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Header from '../../common/Header';
import strings from '../../values/strings';
import styles from './style';
import VoucherImg from '../../assets/images/voucher.svg';
import colors from '../../values/color';
import { ScrollView } from 'react-native-gesture-handler';

const TITLE_CONST = 'Nhập “FLASHDAN40”: Giảm 40k trên tổng hóa đơn đồ ăn nhanh';

function Voucher() {
  const [isActive, setIsActive] = useState(0);
  const vouchers = [
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
    {image: <VoucherImg />, title: TITLE_CONST, hour: 10},
  ];
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <Header 
        title={strings.VoucherTitle} 
        onBackPress={onBackPress()}/>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputText}
          placeholder={strings.VoucherPlaceHolder}
        />
        <TouchableOpacity>
          <View>
            <Text style={styles.applyBtn}>{strings.VoucherTitleBtn}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView 
          style={styles.mainContainer} 
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator={false}>
        {vouchers.map((voucher, i) => (
          <View key={i} onPress={() => setIsActive(i)}>
            <View style={styles.section}>
              <View>{voucher.image}</View>
              <View style={styles.title}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={styles.subTitle}>
                  {voucher.title}
                </Text>
                <Text style={styles.hour}>HSD: Còn lại {voucher.hour} giờ </Text>
              </View>
              <View style={styles.selectBtn}>
                <RadioButton
                  value={i}
                  status={isActive === i ? 'checked' : 'unchecked'}
                  onPress={() => setIsActive(i)}
                  color={colors.main_blue}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* <ConfirmBtn title={strings.VoucherTitleBtn} /> */}
    </View>
  );
}

export default Voucher;
