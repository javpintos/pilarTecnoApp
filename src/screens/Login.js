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
import { Button } from 'react-native-elements'
import auth from 'react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { connect } from 'react-redux';
import { actions } from '../store';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

GoogleSignin.configure({
  webClientId: '940268151968-vnjucjkv4bcoj0p0log8ttpioqoaivk7.apps.googleusercontent.com'
})

export default class Login extends React.Component {

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  render(){
      return(
      <SafeAreaView style={{flex:1}}>
        <ImageBackground style={styles.backImage}
          source={require('../assets/images/fondo7.jpg')}
        >
          <View style={styles.content}>
            <ImageBackground style={styles.backImage} source={require('../assets/images/fondo1.jpg')}>
                <View>
                  <Text style={styles.text}>Ingresa con tu redes sociales</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button style={styles.button} title='Continuar con Google...' onPress={()=>this.onGoogleButtonPress()
                    .then(() => console.log('Signed with Google'))}
                    />
                    <Button style={styles.button} title='Continuar con Facebook...'/>
                </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </SafeAreaView>
      )}

      const mapDispatchToProps = dispatch => ({
        setUser: (data) =>
          dispatch(actions.user.setUser(data)),
      })
      const mapStateToProps = state => ({
        user: state.user.user
      })
      
      onPress = {()=> this.onGoogleButtonPress()
        .then(async (data) => {
        console.log('Signed in with Google!')
        if (data) {
          console.log('res login: ' + JSON.stringify(data.user))
          try {
            await AsyncStorage.setItem('islogged', JSON.stringify(data.user))
          } catch (e) {
            console.log('Hubo un error :' + e)
          }
          this.props.setUser(data.user)
        }
      })}

}

export default connect(mapStateToProps, mapDispatchToProps)((Login))

const styles = StyleSheet.create({
  content:{
    flex:1
  },
  backImage:{
    height,
    width,
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center'
  },
  button: {
    margin:width/20,
    width:width/1.5,
    borderRadius:15,
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1
  },
  buttonsContainer:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:20
  }
})
