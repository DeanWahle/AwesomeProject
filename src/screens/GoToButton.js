// Aboutscreen.js
import React from 'react';
import {Button, View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {useNavigation} from '@react-navigation/native';

function GoToButton({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

export default GoToButton;
