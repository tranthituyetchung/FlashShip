import React, { Component } from 'react';
import {
    Text, View, ScrollView, StyleSheet
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
    render() {
            return(
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.icon}><IcMapPin fill="#CFEEFE"/></Text>
                        <Text style={styles.headerTitle}>227 nguyen van cu</Text>
                        <Text style={styles.icon}><IcHeart fill="#EB5757"/></Text>
                        <Text style={styles.icon}><IcNote fill="#CFEEFE"/></Text>
                    </View>
                    <View style={styles.search}>
                        <SearchBar
                            searchIcon={
                                <Icon name="search1" color={'#646464'} size={16} />
                            }
                            placeholder="Nhập tìm kiếm"
                            // onChangeText={this.updateSearch}
                            // onClear={this.clearSearch}
                            // value={this.state.searchValue}
                            containerStyle={styles.searchBarContainer}
                            inputContainerStyle={styles.searchBarInputContainer}
                            inputStyle={styles.searchBarInput}
                        />
                    </View>
                    <ScrollView 
                        //nestedScrollEnabled={true}
                        showsVerticalScrollIndicator ={false}
                        showsHorizontalScrollIndicator={false}
                    >
                        <SafeAreaView>
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
        //justifyContent: 'center',
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
        marginTop: 8,
        height: 40,
        width: wp('100%')-130,
        color: colors.dark_blue,
        fontSize: 16,
        fontFamily: 'Nunito-Bold'
        
    },
    icon:{
        marginTop: 8,
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
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.secondary_grey_light,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary_grey_light,
        borderRadius: 50,
        //paddingLeft: 5,
        height: 40,
    },
    searchBarInput: {
        color: colors.dark_blue,
        fontSize: 14,
        fontFamily: "Nunito-Regular",
        backgroundColor: colors.white,
    },
    searchBarContainer: {
        width: wp('100%')-16,
        backgroundColor: colors.white,
        //marginTop: 20,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})