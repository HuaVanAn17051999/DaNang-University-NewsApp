import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import GuongMatTieuBieu from '../Screens/GioiThieu/GuongMatTieuBieu'
import LichSuHinhThanh from '../Screens/GioiThieu/LichSuHinhThanh'
import {drawerItemsMain} from '../SettingDrawer/drawerItemsMain'
import buttomTabNavigator from '../Navigation/TabNavigator'
import CustomDrawerContent from '../SettingDrawer/CustomDrawerContent'
import SinhVienViCongDong from '../Screens/ViCongDong/SinhVienViCongDong'
import ConTrinhTieuBieu from '../Screens/ViCongDong/ConTrinhTieuBieu'
import Details from '../Screens/GioiThieu/ChiTietGuongMatTieuBieu'
import ChiTietSVViCongDongs from '../Screens/ViCongDong/ChiTietSinhVienViCongDong'
import About from '../Screens/Home/About'

const MainDrawerNavigation = () => {
    return (
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => (
            <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
          )}>
          <Drawer.Screen name="Home" component={buttomTabNavigator} />
          <Drawer.Screen name="LichSuHinhThanh" component={LichSuHinhThanh} />
          <Drawer.Screen name="GuongMatTieuBieu" component={GuongMatTieuBieu} />
          <Drawer.Screen name="SinhVienViCongDong" component={SinhVienViCongDong} />
          <Drawer.Screen name="ConTrinhTieuBieu" component={ConTrinhTieuBieu} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Details" component={Details} />
          <Drawer.Screen name="ChiTietSVViCongDong" component={ChiTietSVViCongDongs} />
        </Drawer.Navigator>
      );
}

export default MainDrawerNavigation;