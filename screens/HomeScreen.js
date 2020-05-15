import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
  Button,
} from 'react-native';

const HomeScreen = ({ navigation }) => {

  const getDetails = () => {
    fetch('http://localhost:8080/auth/test', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       // username: username,
        //password: password,
      })
    })

      .then((response) => response.json())
      .then((responseData) => {
        //data
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to second" onPress={() => getDetails()} />
    </View>
  );
};

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#0080ff" },
      headerTintColor: '#ffffff',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25}
          backgroundColor="#0080ff" onPress={() => { navigation.openDrawer() }}></Icon.Button>)
    }} />
  </HomeStack.Navigator>
)

export default HomeStackScreen;