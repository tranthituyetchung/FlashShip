import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Header from '../../common/Header';
import strings from '../../values/strings';
import styles from './style';
import VoucherImg from '../../assets/images/voucher.svg';
import colors from '../../values/color';
import {ScrollView} from 'react-native-gesture-handler';
import ConfirmBtn from '../../common/ConfirmBtn';

const generateTitle = (code, percent, category) =>
  `Nhập “${code}”: Giảm ${percent * 100}% trên tổng hóa đơn ${category}`;

const generateID = () => {
  let guid = 'xyxxyx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return guid.toUpperCase();
};

const data = [
  {
    id: generateID(),
    hour: 10,
    reduce: 0.6,
    min: 150000,
    max: 40000,
    code: 'FLASHSHIP40',
    description: generateTitle('FLASHSHIP40', 0.4, 'thức ăn nhanh'),
  },
  {
    id: generateID(),
    hour: 12,
    reduce: 0.6,
    min: 2000000,
    max: 40000,
    code: 'FLASHSHIPCHILL40',
    description: generateTitle('FLASHSHIPCHILL40', 0.4, 'đồ nướng'),
  },
  {
    id: generateID(),
    hour: 8,
    reduce: 0.5,
    min: 120000,
    max: 20000,
    code: 'FLASHSHIP50',
    description: generateTitle('FLASHSHIP50', 0.5, 'thức ăn nhanh'),
  },
  {
    id: generateID(),
    hour: 9,
    reduce: 0.5,
    min: 80000,
    max: 20000,
    code: 'FLASHSHIPNUOC50',
    description: generateTitle('FLASHSHIPNUOC50', 0.5, 'thức uống'),
  },
  {
    id: generateID(),
    hour: 24,
    reduce: 0.5,
    min: 100000,
    max: 25000,
    code: 'FLASHSHIPBANHNGOT50',
    description: generateTitle('FLASHSHIPBANHNGOT50', 0.5, 'bánh ngọt'),
  },
  {
    id: generateID(),
    hour: 24,
    reduce: 0.4,
    min: 100000,
    max: 25000,
    code: 'FLASHSHIPHOT60',
    description: generateTitle('FLASHSHIPHOT60', 0.6, ''),
  },
  {
    id: generateID(),
    hour: 9,
    reduce: 0.5,
    min: 100000,
    max: 25000,
    code: 'FLASHSHIPBEST99',
    description: generateTitle('FLASHSHIPBEST99', 0.5, ''),
  },
];

function Voucher() {
  const [isActive, setIsActive] = useState(-1);
  const [code, setCode] = useState('');

  const handleAddVoucher = () => {
    const voucher =
      isActive !== -1 ? data[isActive] : data.find((d) => d.code === code);
    if (!voucher) return voucher[0]; // show pop-up: can't apply promotion
    return voucher;
  };

  return (
    <View style={styles.main}>
      <Header title={strings.VoucherTitle} onBackPress={onBackPress()} />
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputText}
          placeholder={strings.VoucherPlaceHolder}
          value={code}
          onChangeText={(text) => setCode(text)}
        />
        <TouchableOpacity onPress={handleAddVoucher}>
          <View>
            <Text style={styles.applyBtn}>{strings.VoucherTitleBtn}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainContainer}>
        {data.map((voucher, i) => (
          <TouchableOpacity key={i} onPress={() => setIsActive(i)}>
            <View style={styles.section}>
              <View>
                <VoucherImg />
              </View>
              <View style={styles.title}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={styles.subTitle}>
                  {voucher.description}
                </Text>
                <Text style={styles.hour}>
                  HSD: Còn lại {voucher.hour} giờ{' '}
                </Text>
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
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ConfirmBtn title={strings.VoucherTitleBtn} onPress={handleAddVoucher} />
    </View>
  );
}

export default Voucher;
