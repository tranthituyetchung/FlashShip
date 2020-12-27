import React, { Component } from 'react';
import {
    Text, View, ScrollView, StyleSheet, TouchableOpacity
}from 'react-native'
import strings from 'values/strings'
import { SliderBox } from "react-native-image-slider-box";
import colors from 'values/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import {IcMapPin, IcHeart, IcNote} from 'values/images'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
import ListCategory from 'common/ListCategory'
import ListRestaurantHorizontal from 'common/ListRestaurantHorizontal'
import ListRestaurantVertical from 'common/ListRestaurantVertical'
import ListReorder from 'common/ListReorder'

const data1 = [
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food8.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food9.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food10.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food8.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food9.png'),
    },
  ];
const data2 = [
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food10.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food9.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        rating: 5.0,
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
        imageUrl: require('assets/images/Food10.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
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
        imageUrl: require('assets/images/Food8.png'),
    },
];
const data3 = [
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
const data4 = [
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
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('assets/images/HomeSlide1.png'),
            require('assets/images/HomeSlide2.png'),
            require('assets/images/HomeSlide1.png'),
            require('assets/images/HomeSlide2.png'),
          ],
          isCourseDetailVisible: false,
        };
      }
    openSearch = () => {
        console.log(this.props.navigation.navigate)
        this.props.navigation.navigate('Search', {viewRestaurant : this.viewRestaurant})
    }
    viewRestaurant = (item) => {
        this.props.navigation.navigate('StoreDetail', {item});
    }
    render() {
            return(
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.icon}><IcMapPin fill="#CFEEFE"/></Text>
                        <Text style={styles.headerTitle}>227 Nguyễn Văn Cừ</Text>
                        <Text style={styles.icon}><IcHeart fill="#EB5757"/></Text>
                        <Text style={styles.icon}><IcNote fill="#CFEEFE"/></Text>
                    </View>
                   
                    <ScrollView 
                        //nestedScrollEnabled={true}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <SafeAreaView>
                        <View style={styles.search}>
                            <TouchableOpacity
                                style={styles.searchBarContainer}
                                onPress={this.openSearch}
                            >
                                <View style={styles.searchBarInputContainer}>
                                    <Text style={styles.searchBarInput}><Icon name="search1" color={'#646464'} size={16} /> Nhập tìm kiếm</Text>
                                </View>
                                 
                            </TouchableOpacity>
                            {/* <SearchBar
                                searchIcon={
                                   
                                }
                                placeholder="Nhập tìm kiếm"
                                // onChangeText={this.updateSearch}
                                // onClear={this.clearSearch}
                                // value={this.state.searchValue}
                                containerStyle={styles.searchBarContainer}
                                inputContainerStyle={styles.searchBarInputContainer}
                                inputStyle={styles.searchBarInput}
                            /> */}
                        </View>
                            <View style={styles.slider}>
                                    <SliderBox
                                        //sliderBoxHeight={200}
                                        dotColor={colors.dark_blue}
                                        inactiveDotColor={colors.primary_blue}
                                        resizeMethod={'resize'}
                                        resizeMode={'stretch'}
                                        paginationBoxVerticalPadding={20}
                                        disableOnPress={true}
                                        ImageComponentStyle={styles.sliderContainer}
                                        imageLoadingColor={colors.white}
                                        autoplay={true}
                                        circleLoop={true}
                                        images={this.state.images}
                                        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                                        />
                            </View>
                            <View style={styles.sectionList}>
                                    <ListCategory 
                                        />
                            </View>
                            <View styles={styles.sectionList}>
                                <ListReorder
                                    data={data4}
                                    title={'Đặt lại'}
                                    viewRestaurant = {this.viewRestaurant}
                                    />
                            </View>
                            <View style={styles.sectionList}>
                                    <ListRestaurantHorizontal 
                                        data={data1}
                                        title={'Ưu đãi khủng'}
                                        viewRestaurant = {this.viewRestaurant}
                                        />
                            </View>
                            <View style={styles.sectionList}>
                                    <ListRestaurantHorizontal 
                                        data={data2}
                                        title={'Có thể bạn thích'}
                                        viewRestaurant = {this.viewRestaurant}
                                        />
                            </View>
                            <View style={styles.tabContainer}>
                                <TouchableOpacity>
                                    <Text style={styles.tabActive}>Gần tôi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabInactive}>Bán chạy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.tabInactive}>Đánh giá</Text>
                                </TouchableOpacity>
                            </View>
                            <View >
                                    <ListRestaurantVertical 
                                        data={data3}
                                        title={'Có thể bạn thích'}
                                        viewRestaurant = {this.viewRestaurant}
                                        />
                            </View>
                             
                        </SafeAreaView>
                    </ScrollView>
                </View> 
            )
    }
}
export default Home;


const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.04)',
    },
    slider: {
        //marginTop: 64,
        backgroundColor: colors.white,
    },
    sliderContainer: {
        //borderRadius: 16, 
        width: wp('100%'),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    content:{
        //height: 300,
        alignItems: 'center',
        //marginTop: 16,
        //marginBottom: 40,
        backgroundColor: colors.white,
    },
    sectionList: {
        marginTop: 16,
        width: wp('100%'),
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    containerHeader:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        width: wp('100%'),
        height: 56,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: colors.white,
         //shadow
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 4,
         },
         shadowOpacity: 0.1,
         shadowRadius: 4.65,
         elevation: 4, 
    },
    headerTitle:{
        marginTop: 12,
        height: 40,
        width: wp('100%')-130,
        color: colors.dark_blue,
        fontSize: 16,
        fontFamily: 'Nunito-Bold'
        
    },
    icon:{
        marginTop: 12,
        height: 40,
        width: 40,
        textAlign: 'center',
    },
    search:{
        height: 64,
        marginTop: 58,
        backgroundColor: colors.white,
    },
    searchBarInputContainer: {
        width: wp('100%')-32,
        backgroundColor: colors.primary_grey,
        borderWidth: 1,
        borderColor: colors.secondary_grey_light,
        borderRadius: 50,
        justifyContent: 'center',
        //paddingLeft: 5,
        height: 40,
    },
    searchBarInput: {
        color: colors.dark_blue,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        backgroundColor: colors.primary_grey,
        marginLeft: 16,
    },
    searchBarContainer: {
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        height: 64,
        backgroundColor: colors.white,
        //marginTop: 20,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    tabContainer:{
        width: wp('100%') - 32,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#F3F5F7',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 8,
    },
    tabActive: {
        color: colors.dark_blue,
        fontSize: 14,
        fontFamily: 'Nunito-Bold'
    },
    tabInactive: {
        color: colors.dark_blue,
        fontSize: 14,
        fontFamily: 'Nunito-Regular'
    },
})