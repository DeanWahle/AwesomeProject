import React from 'react';
import {Button, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {useEffect} from 'react';
import SearchScreen from './screens/SearchScreen';
import EmployeeScreen from './screens/EmployeeScreen';

function LoginApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login to get started</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

const Login = () => {
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
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

  const logOff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
      <LoginApp />

      <Button title="Log In" onPress={signIn}></Button>
      <Button title="Log Off" onPress={logOff}></Button>
    </View>
  );
};
export default Login;
