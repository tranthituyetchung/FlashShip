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
const data = [
  {
    name: 'Fruit for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food6.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food7.png'),
  },
  {
    name: 'Fruit for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food1.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food2.png'),
  },
  {
    name: 'Fruit for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food3.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food15.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food6.png'),
  },
  {
    name: 'Fruits for life - Lê Đại Hành',
    category: 'Thức ăn tốt cho sức khỏe',
    rating: '5.0',
    time: '10 phút',
    distance: '0.6km',
    imageUrl: require('assets/images/Food5.png'),
  },
];
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      filteredData: [],
    };
  }

  componentDidMount() {
    //this.props.getSearchHistory()
  }
  searchText = (text, list) => {
    return list.filter((item) => {
      if (item.name.toLowerCase().includes(text)) return true;
      else return false;
    });
  };
  updateSearch = (searchValue) => {
    if (searchValue != '' || searchValue != null) {
      this.setState({
        searchValue,
        filteredData: this.searchText(searchValue.trim().toLowerCase(), data),
      });
    }
    console.log('on change ' + this.state.searchValue);
    console.log('on change data ');
  };
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
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={this.onBackPress}>
            <IconBack name="chevron-left" color={colors.dark_blue} size={24} />
          </TouchableOpacity>
          <SearchBar
            searchIcon={<Icon name="search1" color={'#646464'} size={16} />}
            placeholder="Nhập tìm kiếm"
            onChangeText={this.updateSearch}
            //onClear={this.clearSearch}
            value={this.state.searchValue}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.searchBarInputContainer}
            inputStyle={styles.searchBarInput}
          />
        </View>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.content}>
          <SafeAreaView>
            <View style={styles.listItem}>
              {
                this.state.searchValue 
                ? (
                    this.state.filteredData.length 
                    ? (<>
                     <Text style={styles.resultText}>
                       Tìm thấy {this.state.filteredData.length} quán ăn
                     </Text>
                     <ListRestaurantVertical data={this.state.filteredData} viewRestaurant = {this.props.route.params.viewRestaurant}/>
                     </>) 
                    : (<Text style={styles.resultText}>
                        Không tìm thấy quán ăn nào với từ khóa trên
                      </Text>)
                  ) 
                : <TagList data={history} updateSearchView = {this.updateSearch} />
              }                     
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

export default Search;
