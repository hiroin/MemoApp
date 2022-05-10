import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#467FD3',
          },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',

        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <MemoListScreen />
    // <MemoDetailScreen />
    // <MemoEditScreen />
    // <MemoCreateScreen />
    // <LogInScreen />
    // <SignUpScreen />
  );
}
