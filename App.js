// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CustomerScreen from './src/screens/CustomerScreen';
import EmployeeScreen from './src/screens/EmployeeScreen';
import EmployeeInterfaceScreen from './src/screens/EmployeeInterfaceScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">{props => <HomeScreen />}</Stack.Screen>

        <Stack.Screen name="Customer">
          {props => <CustomerScreen />}
        </Stack.Screen>
        <Stack.Screen name="Employee">
          {props => <EmployeeScreen />}
        </Stack.Screen>
        <Stack.Screen name="EmployeeInterface">
          {props => <EmployeeInterfaceScreen />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React from 'react';
// import {Button, Text, View} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {useState} from 'react';
// import {useEffect} from 'react';
// import Login from './src/Login';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Hello, world!</Text>
//       <Login />
//     </View>
//   );
// };
// export default App;
