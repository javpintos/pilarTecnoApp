import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    ImageBackground,
    useColorScheme,
    View,
  } from 'react-native';

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  export default class Home extends React.Component {
    render(){
        return(
        <SafeAreaView>
          <ImageBackground
            style={{height, justifyContent:'center', alignItems:'center', flexDirection:'column'}}
            imageStyle={{}}
            source={require('../assets/images/fondo7.jpg')}
          >
          <View style={{flexDirection:'row'}}>

            {/* <View style={[styles.button, {backgroundColor:'green'}]} */}
            <View style={{}}>
              <ImageBackground
                style={[styles.button, {backgroundColor:'transparent'}]}
                imageStyle={{borderRadius:15}}
                source={require('../assets/patterns/pattern1.jpg')}
              >
                <Text style={styles.text}>
                  Inicio
                </Text>
              </ImageBackground>
            </View>

            <View style={{}}>
              <ImageBackground
                style={[styles.button, {backgroundColor:'transparent'}]}
                imageStyle={{borderRadius:15}}
                source={require('../assets/patterns/pattern2.jpg')}
              >
                <Text style={styles.text}>
                  Nosotros
                </Text>
              </ImageBackground>
            </View>
          </View>

          <View style={{flexDirection:'row'}}>
            
          <View style={{}}>
              <ImageBackground
                style={[styles.button, {backgroundColor:'transparent'}]}
                imageStyle={{borderRadius:15}}
                source={require('../assets/patterns/pattern3.jpg')}
              >
                <Text style={styles.text}>
                  Servicios
                </Text>
              </ImageBackground>
            </View>

            <View style={{}}>
              <ImageBackground
                style={[styles.button, {backgroundColor:'transparent'}]}
                imageStyle={{borderRadius:15}}
                source={require('../assets/patterns/pattern4.jpg')}
              >
                <Text style={styles.text}>
                  Contacto
                </Text>
              </ImageBackground>
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