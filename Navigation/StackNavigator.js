import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Text, View} from 'react-native';
import About from '../Screens/Home/About'
const Stack = createStackNavigator();

const screenOptionStyle = { 
  headerStyle: {
    backgroundColor: "#415a93",
    justifycontent :"center",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
function Home() {
    return (
     <Text>Home</Text>
    );
  }
  function Contact() {
    return (
     <Text>Contact</Text>
    );
  }

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="Home" component={Home} options = {{headerShown: false}}  />
      <Stack.Screen name="About" component={About} />
   
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };