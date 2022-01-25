import React from 'react';
import {Button, View, Text} from 'react-native';

const EmployeeInterfaceScreen = ({username}) => {
  return (
    <View>
      <Text>Welcome + {username}</Text>
    </View>
  );
};

export default EmployeeInterfaceScreen;
