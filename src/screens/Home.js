import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    useColorScheme,
    View,
    Alert
  } from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

  export default class Home extends React.Component {

    _onHomePress = () => {
        Alert.alert(
            "Hi!",
            "You are already there",
            [
                { text: "OK", onPress: () => console.log("OK pressed") }
            ]
        );
    }

    render(){
        return(
        <SafeAreaView>
          <ImageBackground
            style={{height, justifyContent:'center', alignItems:'center', flexDirection:'column'}}
            imageStyle={{}}
            source={require('../assets/images/fondo7.jpg')}
          >
          <View style={{flexDirection:'row'}}>

            <View style={{}}>
                <TouchableOpacity
                    onPress={() => this._onHomePress()}
                >
                    <ImageBackground
                        style={[styles.button, {backgroundColor:'transparent'}]}
                        imageStyle={{borderRadius:15}}
                        source={require('../assets/patterns/pattern1.jpg')}
                    >
                        <Text style={styles.text}>
                        Main
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Profile")}
                >
                    <ImageBackground
                        style={[styles.button, {backgroundColor:'transparent'}]}
                        imageStyle={{borderRadius:15}}
                        source={require('../assets/patterns/pattern2.jpg')}
                    >
                        <Text style={styles.text}>
                        Profile
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

          </View>

          <View style={{flexDirection:'row'}}>
            
            <View style={{}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Posts")}
                >
                    <ImageBackground
                        style={[styles.button, {backgroundColor:'transparent'}]}
                        imageStyle={{borderRadius:15}}
                        source={require('../assets/patterns/pattern3.jpg')}
                    >
                        <Text style={styles.text}>
                        Posts
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Map")}
                >
                    <ImageBackground
                        style={[styles.button, {backgroundColor:'transparent'}]}
                        imageStyle={{borderRadius:15}}
                        source={require('../assets/patterns/pattern4.jpg')}
                    >
                        <Text style={styles.text}>
                        Map
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

          </View>
          
          </ImageBackground>        
        </SafeAreaView>
        )}
  }

  const styles = StyleSheet.create({
    text: {
      fontSize:30,
      fontWeight:'bold',
      color:'red',
      textAlign:'center'
    },
    button: {
      margin: width/20,
      height:width/2.5,
      width:width/2.5,
      borderRadius:15,
      justifyContent:'center',
      backgroundColor:'#fff',
      zIndex:1
    }
  })