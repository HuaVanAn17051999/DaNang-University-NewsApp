import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStackNavigator, ContactStackNavigator} from './StackNavigator';

import HomeScreen from '../Screens/Home/Home';
import DaoTaoScreen from '../Screens/DaoTao/DaoTao';
import TinTucScreen from '../Screens/TinTuc/TinTuc';
import TuyenSinhScreen from '../Screens/TuyenSinh/TuyenSinh';
import NghienCucKhoaHoc from '../Screens/NCHK/Nckk';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang Chủ',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/hoom.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DaoTao"
        component={DaoTaoScreen}
        options={{
          title: 'Dao Tao',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/daotao.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tuyen Sinh"
        component={TuyenSinhScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/t.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TinTuc"
        component={TinTucScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/newss.png')}
              />
            );
          },
        }}
      /> 
     <Tab.Screen
      name="NghienCucKhoaHoc"
      component={NghienCucKhoaHoc}
      options={{
        tabBarIcon: ({size, focused, color}) => {
          return (
            <Image
              style={{width: size, height: size}}
              source={require('../assets/newss.png')}
            />
          );
        },
      }}
    />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
