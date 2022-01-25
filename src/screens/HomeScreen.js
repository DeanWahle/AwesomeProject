// Homescreen.js
import React from 'react';
import {Button, View, Text} from 'react-native';
import GoToButton from './GoToButton';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <GoToButton screenName="Customer"></GoToButton>
      <GoToButton screenName="Employee"></GoToButton>
    </View>
  );
};

export default HomeScreen;
