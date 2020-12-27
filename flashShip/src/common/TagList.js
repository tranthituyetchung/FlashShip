import React, { Component } from 'react';
import {
    Text, View, FlatList, Image, StyleSheet
}from 'react-native'
import strings from 'values/strings'
import colors from 'values/color';
import { IcRight, IcUserFill, IcStarFill, Category1, Category2, Category3, Category4, } from 'values/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TagList extends Component {
    constructor(props) {
        super(props);
    }
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.updateSearchView(item.content)}>
            <View style={styles.tagItem}>
                <Text style={styles.tagTitle} numberOfLines={2}>{item.content}</Text>
            </View>
        </TouchableOpacity>        
    );

    render() {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.listTitle}>Tìm kiếm phổ biến</Text>
                    </View>  
                    
                    <View style={styles.content}>
                      <FlatList
                        contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
                        nestedScrollEnabled
                        horizontal={false}
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}>
                      </FlatList>
                    </View>
                    
                </View>
            )
    }
}

export default TagList;

const wratio = wp('100%')/375
const hratio = hp('100%')/812
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: colors.white,
        justifyContent: 'center',
        marginTop: 8,
        
    },
    header: {
        width: wp('100%') -32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listTitle: {
        color: colors.secondary_grey,
        marginLeft: 16,
        width: wp('100%')-112,
        fontSize: 14,
        fontFamily: 'Nunito-SemiBold',
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
        width: wp('100%')-32,
        marginLeft: 16,
        //height: 300,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    tagItem: {
        //width: 100,
        height: 32, 
        //marginRight: 8,
        paddingHorizontal: 12,
        marginTop: 8,
        marginRight: 8,
        borderRadius: 16,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.primary_grey,
    },
    tagTitle:{
        fontSize: 14,
        color: colors.secondary_grey,
        fontFamily: 'Nunito-Regular',
        //alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
})
