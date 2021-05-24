import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainDrawerNavigation from './SettingDrawer/MainDrawerNavigation'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerMode: 'screen',
        //   headerTintColor: '#404554',
        //   headerTitleStyle: {
        //     fontWeight: 'yellow',
        //   },
        //   header: (props) => {
        //     return <CustomHeader {...props} />;
        //   },
        // }}
        >
        <Stack.Screen options = {{headerShown: false}} name="MainDrawer" component={MainDrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;