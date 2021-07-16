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
import AppStack from '../routs/app';
import { NavigationContainer } from '@react-navigation/native';

  const App = (props) => {
    return( 
      <NavigationContainer >
        <AppStack />
      </NavigationContainer>
    )
  }

  export default App;