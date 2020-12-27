import React, { Component } from 'react';
import {
    Text, View, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity
}from 'react-native'
import strings from 'values/strings'
import colors from 'values/color';
import { IcRight, IcUserFill, IcStarFill, IcClock } from 'values/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcUser } from 'values/images';
import Restaurant from 'components/restaurant/Restaurant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

class ListRestaurantVertical extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    renderItem = ({ item }) => (
        
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => this.props.viewRestaurant(item)}
          >
            <Image 
            style={styles.couseImg} 
            source={item.imageUrl}/>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.cardAuthor}>{item.category}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                    <Text style={styles.infoIcon}><IcStarFill width={16} height={16}/></Text>
                    <Text style={styles.infoTextBold}>{item.rating}</Text>
                    </View>
                    <View style={styles.infoItem}>
                    <Text style={styles.infoIcon}><IcClock  width={16} height={16} color={colors.red} /></Text>
                    <Text style={styles.infoText}>{item.time} - {item.distance}</Text>
                    </View>
                </View>
            </View>
          
        </TouchableOpacity>
    );

    render() {
            return (
                <View style={styles.container}>
                    {/* <View style={styles.header}>
                        <Text style={styles.listTitle}>{this.props.title}</Text>
                        <TouchableOpacity>
                          <Text style={styles.viewAll}>Xem tất cả <IcRight/></Text>
                        </TouchableOpacity>
                    </View>   */}
                    <View style={styles.content}>
                      <FlatList
                        nestedScrollEnabled
                        horizontal={false}
                        data={this.props.data}
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

export default ListRestaurantVertical;

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
        fontSize: 16,
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
        width: wp('100%')-32,
        height: 100, 
        //marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: colors.white,
        flexDirection: 'row',
        //shadow
        // shadowColor: colors.light_grey,
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.01,
        // shadowRadius: 4.65, 
        // elevation: 3,
    },
    cardHeader:{   
    },
    cardContainer:{
        width: wp('100%')-116,
        backgroundColor: colors.white,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    couseImg:{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: 100,
        height: 100,
        resizeMode: 'cover', 
    },
    cardTitle: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        marginTop: 4,
        marginHorizontal: 8,
        color: colors.dark_blue,
    },
    cardAuthor: {
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
        marginHorizontal: 8,
        color: colors.secondary_grey,
    },
    infoContainer:{
        marginTop: 4,
        marginLeft: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
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
    infoTextBold:{
        fontFamily: 'Nunito-Regular',
        color: colors.dark_blue,
        fontSize: 12,
        marginLeft: 2,
    },
    infoText: {
        fontFamily: 'Nunito-Regular',
        color: colors.secondary_grey,
        fontSize: 12,
        marginLeft: 2,
    }
})