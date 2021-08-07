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
import { Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

import AsyncStorage from '@react-native-async-storage/async-storage';
import user from '../store/reducers/user';

import { connect } from 'react-redux';
import { actions } from '../store';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

GoogleSignin.configure({
  webClientId: '940268151968-vnjucjkv4bcoj0p0log8ttpioqoaivk7.apps.googleusercontent.com'
})

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      photoURL: '',
      name: '',
      password: '',      
    };
  }  

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  render() {
    const {email, photoURL, name, password} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.content}>
          <ImageBackground
            style={{width, height}}
            source={require('../assets/images/fondo7.jpg')}>
            <Text style={styles.text}> Login </Text>
            <Input
              style={styles.input}
              placeholder="Ingrese su email"
              value={email}
              onChangeText={em => this.setState({email: em})}
            />

            <Input
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}              
              onChangeText={psw => this.setState({password: psw})}
            />

            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: 'red'},
              ]}
              onPress={() => { 
                email, password ?( 
                auth().signInWithEmailAndPassword(email, password)
                .then(async data => {
                  console.log('Signed in with e-mail!');                    
                  if (data) {
                    console.log('res login: ' + JSON.stringify(data.user));
                    try {
                      await AsyncStorage.setItem(
                        'islogged',
                        JSON.stringify(data.user),
                      );
                    } catch (e) {
                      console.log('Hubo un error :' + e);
                    }
                    this.props.setUser(data.user);
                  }
                }).catch (err => {console.log(err)})
                ) : (
                  Alert. alert('complete todos los campos')
                )
              }} 
              >
              <Text style={styles.text}>Aceptar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Create')}
              style={[
                styles.button,
                {backgroundColor: 'red'},
              ]}>
              <Text style={styles.text}>Crear Usuario</Text> 
						</TouchableOpacity>
            <Text style={styles.text}>
                <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Ligth}
                onPress={() =>
                  this.onGoogleButtonPress()
                  .then(async data => {
                    console.log('Signed in with Google!');                    
                    if (data) {
                      console.log('res login: ' + JSON.stringify(data.user));
                      try {
                        await AsyncStorage.setItem(
                          'islogged',
                          JSON.stringify(data.user),
                        );
                      } catch (e) {
                        console.log('Hubo un error :' + e);
                      }
                      this.props.setUser(data.user);
                    }
                  }).catch (err => {console.log(err)})
                }
              />
            </Text>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#cc3399',
    textAlign: 'center',
    backgroundColor: '#F4ECF7',
    margin: width / 20,
  },

  button: {
    margin: width / 20,
    width: width/1.8,
    marginLeft: 90,
    borderRadius: 15,
    justifyContent: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  setUser: (data) => dispatch(actions.user.setUser(data)),
});
const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps, mapDispatchToProps)((Login));