import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Header from '../../common/Header';
import {IcCash, IcZaloPay} from '../../values/images';
import IcMomo from '../../assets/images/ic_momo.png';
import strings from '../../values/strings';
import styles from './style';
import colors from '../../values/color';

function PaymentMethod(props) {
  const [isActive, setIsActive] = useState(0);
  const methods = [
    {icon: <IcCash style={styles.icon} />, title: strings.CashMethod},
    {icon: <IcZaloPay style={styles.icon} />, title: strings.ZaloPayMethod},
    {
      icon: <Image style={styles.icon} source={IcMomo} />,
      title: strings.MomoMethod,
    },
  ];

  return (
    <View>
      <Header title={strings.PaymentMethodTitle} />
      <View style={styles.mainContainer}>
        {methods.map((method, i) => (
          <TouchableOpacity key={i} onPress={() => setIsActive(i)}>
            <View style={styles.section}>
              <View style={styles.title}>
                <View style={styles.icon}>{method.icon}</View>
                <View style={styles.subtitle}>
                  <Text>{method.title}</Text>
                </View>
              </View>
              <View>
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
      </View>
      {/* <ConfirmBtn title={strings.PaymentMethodTitleBtn} /> */}
    </View>
  );
}

export default PaymentMethod;
