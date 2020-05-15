import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
} from 'react-native';

const ProfileScreen = () => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const ProfileScreenStack = createStackNavigator();

const ProfileScreenStackScreen = ({navigation}) => (
  <ProfileScreenStack.Navigator
      screenOptions={{
        headerStyle:  {backgroundColor: "#0080ff"},
        headerTintColor: '#ffffff',
        headerTitleStyle: {fontWeight: 'bold'}
      }}>
  <ProfileScreenStack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'ProfileScreen',
headerLeft: () => (
  <Icon.Button name="ios-menu" size={25} 
  backgroundColor="#0080ff" onPress={ () => {navigation.openDrawer()}}></Icon.Button>)
  }}/>
  </ProfileScreenStack.Navigator>
)

export default ProfileScreenStackScreen;