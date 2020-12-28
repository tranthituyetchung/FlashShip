import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import strings from 'values/strings';
import colors from 'values/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  IcRight,
  IcUserFill,
  IcStarFill,
  IcMoreVertical,
  IcClock,
} from 'values/images';
import {SearchBar} from 'react-native-elements';
import IconBack from 'react-native-vector-icons/Feather';
import TagList from 'common/TagList';
import ListRestaurantVertical from 'common/ListRestaurantVertical';
import Header from 'common/Header';

const data = [
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating: '5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food6.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating: '5.0' ,
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food7.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating: '5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food1.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating:'5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food2.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating: '5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food3.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating: '5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food15.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating:'5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food6.png'),
  },
  {
      name: 'Fruits for life - Lê Đại Hành',
      category:  'Thức ăn tốt cho sức khỏe',
      rating: '5.0',
      time: '10 phút',
      distance: '0.6km', address: '10 Nguyễn Tri Phương , Quận 5, TP HCM',
      dishes: [
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'big',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },
          {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: null,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },            {
              name: 'Bánh mì chả lụa',
              price: 55000,
              sold: 999,
              type: 'small',
              discount: 75000,
              imageUrl: require('../../assets/images/DishImage.png')
          },                        
      ],
      imageUrl: require('assets/images/Food5.png'),
  },
];

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      filteredData: [],
      title: '',
    };
  }

  componentDidMount() {
    const {item} = this.props.route.params;
    this.setState({title: item.title})
  }
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={ styles.container}>
        <Header
            title={this.state.title}
            onBackPress={this.onBackPress}
        />
            
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.content}>
          <SafeAreaView>
            <View style={styles.listItem}>
                <ListRestaurantVertical data={data} viewRestaurant = {this.props.route.params.viewRestaurant}/>             
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

export default FoodList;
