// Homescreen.js
import React, {useState, useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const EmployeeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [user, setUser] = useState();
  const navigation = useNavigation();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => navigation.navigate('EmployeeInterface'))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const loginSubmit = () => {
    if (username === '') {
      console.log('username empty');
    }
    if (password === '') {
      console.log('password empty');
    }
    if (username !== '' && password !== '') {
      signIn();
    }
  };

  return (
    <View>
      <Text>Employee Login</Text>
      <SearchBar
        term={username}
        onTermChange={newTerm => setUsername(newTerm)}
        placeholder="username"
      />
      <SearchBar
        term={password}
        onTermChange={newTerm => setPassword(newTerm)}
        placeholder="password"
      />
      <Button title="ye" onPress={loginSubmit}></Button>
    </View>
  );
};

export default EmployeeScreen;
