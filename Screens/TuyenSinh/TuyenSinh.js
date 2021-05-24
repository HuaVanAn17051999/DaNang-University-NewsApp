import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {
  Container,
  Content,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';

import HocBong from '../../Screens/TuyenSinh/HocBong';
import TrangTuVanVTuyenSinhs from '../../Screens/TuyenSinh/TrangTuVanVTuyenSinh';

function myTheme() {
  <Text>hello</Text>
}
const TuyenSinh = () => {
  return (
    <Container>
      <Content>
        <View style={{backgroundColor: '#5c6dc1'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 20,
              paddingTop: 20,
              paddingBottom: 20,
            }}>
            THÔNG TIN TUYỂN SINH
          </Text>
        </View>
        <Tabs>
          <Tab tabStyle={{backgroundColor: '#fff'}} heading="Tư vấn tuyển sinh">
            <TrangTuVanVTuyenSinhs />
          </Tab>
          <Tab heading="Học bổng" tabStyle={{backgroundColor: '#fff'}}>
            <HocBong />
          </Tab>
        </Tabs>
      </Content>
    </Container>
  );
};

export default TuyenSinh;
