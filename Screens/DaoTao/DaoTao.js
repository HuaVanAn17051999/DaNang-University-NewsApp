import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Header} from 'react-native-elements';
import DaiHoc from '../../Screens/DaoTao/DaiHoc';
import GoiThieu from '../../Screens/DaoTao/GoiThieu';
import {Container, Content, Tab, Tabs} from 'native-base';

const DaoTao = () => {
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
            THÔNG TIN ĐÀO TẠO
          </Text>
        </View>
        <Tabs>
          <Tab tabStyle={{backgroundColor: '#fff'}} heading="ĐẠI HỌC">
            <DaiHoc />
          </Tab>
          <Tab heading="GIỚI THIỆU" tabStyle={{backgroundColor: '#fff'}}>
            <GoiThieu />
          </Tab>
        </Tabs>
      </Content>
    </Container>
  );
};

export default DaoTao;
