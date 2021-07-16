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

  export default class Login extends React.Component {

    render(){
        return(
        <SafeAreaView>
          <ImageBackground
            style={{height, justifyContent:'center', alignItems:'center', flexDirection:'column'}}
            imageStyle={{}}
            source={require('../assets/images/fondo7.jpg')}
          >
            <View>
                    <Text style={styles.text}>
                        Login screen in construction
                    </Text>
            </View>
          </ImageBackground>        
        </SafeAreaView>
        )}
  }

  const styles = StyleSheet.create({
    text: {
      fontSize:30,
      fontWeight:'bold',
      color:'white',
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
  