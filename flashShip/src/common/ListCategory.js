import React, { Component } from 'react';
import {
    Text, View, FlatList, Image, StyleSheet
}from 'react-native'
import strings from 'values/strings'
import colors from 'values/color';
import { IcRight, IcUserFill, IcStarFill, } from 'values/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';

const slides = [
    {
      title: 'Ăn vặt',
      image:  require('assets/images/category1.png'),
    },
    {
      title: 'Rau củ',
      image:  require('assets/images/category2.png'),
    },
    {
        title: 'Nước ép',
      image:  require('assets/images/category3.png'),
    },
    {
    title: 'Ăn vặt',
    image:  require('assets/images/category1.png'),
    },
    {
    title: 'Rau củ',
    image:  require('assets/images/category2.png'),
    },
    {
    title: 'Nước ép',
    image:  require('assets/images/category3.png'),
    },
    {
    title: 'Rau củ',
    image:  require('assets/images/category2.png'),
    },
    {
    title: 'Nước ép',
    image:  require('assets/images/category3.png'),
    }
  ];
  

class ListCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: slides
        };
      }

    renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.categoryItem}
            //onPress={()=> this.props.openCourseByCategory(item)}
            >
                <View>
                    <Image style={styles.categoryImage} source={item.image}/>
                    <Text style={styles.categoryTitle} numberOfLines={1}>{item.title}</Text> 
                </View>
        </TouchableOpacity>
    );

    render() {
            return (
                <View style={styles.container}>
                    <View style={styles.content}>
                      <FlatList
                        nestedScrollEnabled
                        horizontal={false}
                        data={this.state.data}
                        renderItem={this.renderItem}
                        numColumns={4}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}>
                      </FlatList>
                    </View>              
                </View>
            )
    }
}

export default ListCategory;

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
        
    },
    content: {
        width: wp('100%'),
        //height: 300,
        marginLeft:8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    categoryItem: {
        width: (wp('100%')-56)/4,
        height: 80, 
        //marginRight: 16,
        marginTop: 0,
        marginBottom: 8,
        marginRight: 8,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        //backgroundColor: colors.red,
        //shadow
        // shadowColor: colors.light_grey,
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 4.65, 
        // elevation: 4,
    },
    categoryTitle:{
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.dark_blue,
        marginHorizontal: 4,
    },
    categoryImage:{
        width: 54, 
        height: 54,
    }
})
