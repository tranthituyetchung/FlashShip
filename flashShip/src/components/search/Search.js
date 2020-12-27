import React, { Component } from 'react'
import {
    Text, View, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator
}from 'react-native'
import styles from './style'
import strings from 'values/strings'
import colors from 'values/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import { IcRight, IcUserFill, IcStarFill, IcMoreVertical, IcClock } from 'values/images';
import { SearchBar } from 'react-native-elements'
import IconBack from 'react-native-vector-icons/Feather'
import TagList from 'common/TagList'

const history = [
    {
        content: 'Cơm gà',
    },
    {
        content: 'Cơm bò',
    },
    {
        content: 'Cơm bún đậu mắm tôm',
    },
    {
        content: 'Bún thịt nướng',
    },
    {
        content: 'Bánh xèo',
    },
    {
        content: 'Mì ý',
    },
    {
        content: 'Cơm gà',
    },
    {
        content: 'Cơm bò',
    },
    {
        content: 'Cơm bún đậu mắm tôm',
    },
    {
        content: 'Bún thịt nướng',
    },
    {
        content: 'Bánh xèo',
    },
    {
        content: 'Mì ý',
    },
    
];
class Search extends Component {
    constructor(props)
    {
        super(props)
        this.state = {         
            searchValue: '',
            filteredData: [],                  
        }
    }

    componentDidMount() {
        //this.props.getSearchHistory()
    }
    // updateSearch = (searchValue) => {
    //     this.setState({
    //         searchValue: searchValue,
    //         });
    //     if (searchValue != '' || searchValue != null) {
    //         this.props.getSearchResult(searchValue, this.state.limit, this.state.page);
    //     }
    //     console.log("on change " + this.state.searchValue)
    //     console.log("on change data ") 
    // };
    // clearSearch = () => { 
    //     this.setState ({
    //         searchValue: '',
    //         filteredData: [],
    //     });
    // };
    // clearSearch = () => {
    //     /* Hide keyboard */
    //     Keyboard.dismiss();
    //     //this.props.pendingLoginRequests();
    // }

    // handleLoadMore = () => {
    //     if (this.props.totalCourse >= 10) {
    //         let newPage = this.state.page + 1
    //         this.setState(
    //             {page: newPage},
    //             //this.props.loadMoreSearchRequest(newPage)
    //         )
    //     }
    // }
    // onRefresh() {
    //     // this.setState({page: 1});
    //     // this.setState({isFetching: true,},() => {this.props.pendingLoginRequests(), this.setState({isFetching : false})});
    // }
    // renderActivityIndicator = () => {
    //     return <ActivityIndicator animating={this.props.isLoading} color={colors.secondary_grey} />
    // }    
    onBackPress = () => {
        this.props.navigation.goback()
    }
    render() { 
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={this.onBackPress}    
                        >
                            <IconBack name="chevron-left" color={colors.dark_blue} size={24} />
                        </TouchableOpacity>
                        <SearchBar
                            searchIcon={
                                <Icon name="search1" color={'#646464'} size={16} />
                            }
                            placeholder="Nhập tìm kiếm"
                            //onChangeText={this.updateSearch}
                            //onClear={this.clearSearch}
                            value={this.state.searchValue}
                            containerStyle={styles.searchBarContainer}
                            inputContainerStyle={styles.searchBarInputContainer}
                            inputStyle={styles.searchBarInput}
                        />
                    </View>
                    <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.content}>
                        <SafeAreaView>
                            {/* <View style={styles.listItem}> 
                            {(this.props.totalInstructor === undefined) || (this.props.totalInstructor === '') || (this.props.totalInstructor === null)
                            ? null : <Text style={styles.resultText}>Tìm thấy {this.props.totalInstructor} giảng viên</Text>}
                                
                                <LisRestaurantVertival
                                    data={}
                                />
                            </View>          */}
                            <TagList
                                data={history}
                                />
                        </SafeAreaView>
                    </ScrollView> 
                </View>
            )
    }
}

export default Search;