import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import Room from './component/content/Room'
import Header from './component/layout/Header'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Post from './component/content/Post';
import Chat from './component/content/Chat';
import Statistic from './component/content/Statistic';
import Comment from './component/content/Comment';
import { MessageProvider } from './store/MessageProvider';
import Login from './component/content/Login';
import { MenuProvider } from './store/MenuProvider';
import { CounterProvider } from './store/CounterProvider';
import { LoginProvider } from './store/LoginProvider';

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <LoginProvider>
      <CounterProvider>
        <MenuProvider>
          <MessageProvider>
            <SafeAreaView style={styles.contrainer}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Room" screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Room" component={Room} />
                  <Stack.Screen name="Post" component={Post} />
                  <Stack.Screen name="Chat" component={Chat} />
                  <Stack.Screen name="Comment" component={Comment} />
                  <Stack.Screen name="Statistic" component={Statistic} />
                  <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
              </NavigationContainer>

            </SafeAreaView>
          </MessageProvider>
        </MenuProvider>
      </CounterProvider>
    </LoginProvider>


  )
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1
  },
});
