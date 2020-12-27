import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
}from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import styles from './style'
import strings from 'values/strings'
//import AsyncStorageKeys from 'utils/AsyncStorageKeys'
//import AsyncStorage from '@react-native-community/async-storage'
import {
  BgIntro1,
  BgIntro3,
  BgIntro2, 
} from 'values/images'

const slides = [
    {
      key: '1',
      image:  <BgIntro1/>,
    },
    {
      key: '2',
      image:  <BgIntro2/>,
    },
    {
      key: '3',
      image:  <BgIntro3/>,
    }
  ];
  
class Welcome extends Component {
    renderItem = ({ item }) => {
      return (
        <View style={styles.mainContainer}>
         {
           item.image
         }
        </View>
      );
    }
    onDone = () => {
        console.log(this)
        this.props.navigation.navigate("Home")        
    }
    render() {
            return (
                <>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{strings.WelcomeTitle}</Text>
                    <Text style={styles.headerDescription}>{strings.WelcomeAppSmallTitle}</Text>
                </View>
                <AppIntroSlider 
                    data={slides} 
                    renderItem={this.renderItem} 
                    dotStyle = {styles.sliderDotStyle}
                    activeDotStyle= {styles.activeDotStyle}
                    showDoneButton= {false}
                    showNextButton = {false}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.startButton} onPress={this.onDone} >
                        <Text style={styles.startButtonTitle}>{strings.StartButtonTitle}</Text>
                    </TouchableOpacity>
                </View>
                </>
            )
    }
}

export default Welcome;