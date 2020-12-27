import React, { Component } from 'react';
import {
    Text, View, ScrollView, FlatList, VirtualizedList, Image, TouchableOpacity
}from 'react-native'
import strings from 'values/strings'
import colors from 'values/color';
import { IcRight, IcUserFill, IcStarFill, IcClock } from 'values/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcUser } from 'values/images';
import Restaurant from 'components/restaurant/Restaurant';

const slides = [
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
        time: '10 phút',
        distance: '0.6km',
        imageUrl: require('assets/images/Food1.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
        time: '10 phút',
        distance: '0.6km',
        imageUrl: require('assets/images/Food1.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
        time: '10 phút',
        distance: '0.6km',
        imageUrl: require('assets/images/Food1.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
        time: '10 phút',
        distance: '0.6km',
        imageUrl: require('assets/images/Food1.png'),
    },
    {
        name: 'Fruits for life - Lê Đại Hành',
        category:  'Thức ăn tốt cho sức khỏe',
        rating: 5.0,
        time: '10 phút',
        distance: '0.6km',
        imageUrl: require('assets/images/Food1.png'),
    },
  ];
  

class ListRestaurantHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: slides,
        };
      }
    renderItem = ({ item }) => (
        
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => this.props.openCourseDetail(item.id)}>
          <Image 
            style={styles.couseImg} 
            source={{uri: item.imageUrl}}/>
          <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.cardAuthor}>{item.category}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}><IcStarFill/></Text>
              <Text style={styles.infoText}>{parseFloat(this.min(item.formalityPoint,5)).toFixed(1)}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}><IcClock/></Text>
              <Text style={styles.infoText}>{parseFloat(item.totalHours).toFixed(3)}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );

    render() {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.listTitle}>{this.props.title}</Text>
                        <TouchableOpacity>
                          <Text style={styles.viewAll}>Xem tất cả <IcRight/></Text>
                        </TouchableOpacity>
                    </View>  
                    <View style={styles.content}>
                      <FlatList
                        nestedScrollEnabled
                        horizontal={true}
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator={false}>
                      </FlatList>
                    </View>
                   
                    
                </View>
            )
    }
}

export default ListRestaurantHorizontal;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
        
    },
    header: {
        width: wp('100%') -32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listTitle: {
        color: colors.dark_blue,
        marginLeft: 16,
        width: wp('100%')-112,
        fontSize: 14,
        fontFamily: 'Nunito-Bold',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    viewAll: {
        width: 80,
        fontSize: 12,
        fontFamily: 'Nunito-Regular',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.white,
    },
    content: {
        width: wp('100%'),
        //height: 300,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    card: {
        width: 180,
        height: 170, 
        //marginRight: 16,
        marginTop: 8,
        marginBottom: 16,
        marginLeft: 16,
        borderRadius: 8,
        backgroundColor: colors.white,
        //shadow
        shadowColor: colors.light_grey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.01,
        shadowRadius: 4.65, 
        elevation: 3,
    },
    couseImg:{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: 180,
        height: 100,
        resizeMode: 'cover', 
    },
    cardTitle: {
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        marginTop: 4,
        marginHorizontal: 8,
        color: colors.dark_blue,
    },
    cardAuthor: {
        fontFamily: 'Nunito-Regular',
        fontSize: 11,
        marginHorizontal: 8,
        color: colors.dark_blue,
    },
    infoContainer:{
        marginTop: 4,
        marginHorizontal: 8,
        flexDirection: 'row',
    },
    infoItem: {
        height: 12,
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoIcon:{
    },
    infoText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        marginLeft: 2,
    }
})