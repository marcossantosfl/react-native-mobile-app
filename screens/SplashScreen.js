import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn" duraton="1500" source={require('../assets/logo.png')} style={styles.logo} resizeMode="stretch"/>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Stay notified and updated!</Text>
                <Text style={styles.text}>Sign in with an account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=> navigation.navigate('SignInScreen')}>
                    <LinearGradient colors={['#0080ff','#00bfff']} style={styles.signIn}>
                        <Text style={styles.textSign}>Get started</Text>
                        <MaterialIcons 
                        name="navigation"
                        color="#fff"
                        size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.24;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0080ff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});