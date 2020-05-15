import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext } from '../component/context';

export function DrawerContent(props){

    const {signOut} = React.useContext(AuthContext);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () =>
    {
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View styles={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}><Avatar.Image 
                                source={{
                                    uri: 'https://st2.depositphotos.com/3687485/10818/v/950/depositphotos_108186392-stock-illustration-flat-vector-avatar-face-character.jpg'
                                }}
                                size={50}
                            />
                            <View style={{flexDirection: 'column', marginLeft: 15}}>
                                <Title style={styles.title}>Marcos Santos</Title>
                            </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Friends</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                            <Caption style={styles.caption}>Subjects</Caption>
                        </View>
                    </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({color, size}) => 
                         (<Icon name="home-outline" color={color} size={size}/> )}
                          label="Home"
                          onPress={() => {props.navigation.navigate('Home')}}/>
                        <DrawerItem icon={({color, size}) => 
                         (<Icon name="account-outline" color={color} size={size}/> )}
                          label="Profile"
                          onPress={() => {props.navigation.navigate('ProfileScreen')}}/>
                        <DrawerItem icon={({color, size}) => 
                         (<Icon name="bookmark-outline" color={color} size={size}/> )}
                          label="Subjects"
                          onPress={() => {}}/>
                        <DrawerItem icon={({color, size}) => 
                         (<Icon name="settings-outline" color={color} size={size}/> )}
                          label="Settings"
                          onPress={() => {}}/>
                        <DrawerItem icon={({color, size}) => 
                         (<Icon name="account-check-outline" color={color} size={size}/> )}
                          label="Support"
                          onPress={() => {}}/>
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                   <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color, size}) => 
                (<Icon name="exit-to-app" color={color} size={size}/> )}
                 label="Sign out"
                 onPress={() => {signOut()}}/>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });