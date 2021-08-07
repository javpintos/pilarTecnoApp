import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { actions } from '../store'
import { connect } from 'react-redux'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class PostDetail extends React.Component {

  _onPostPress = () => {
    Alert.alert(
        "Hi!",
        "You are already in Posts",
      [
        { text: "OK", onPress: () => console.log("OK pressed") }
      ]
    );
  }

  render(){
    return( 
      <SafeAreaView style={{flex:1}}>
        <ImageBackground
            style={{height}}
            source={require('../assets/images/fondo7.jpg')}
        >
         <Text>PostDetail</Text>
        </ImageBackground>
    </SafeAreaView>  
    )}
}