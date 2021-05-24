import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  FlatList,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import {SVViCongDong} from '../../Services/list';

import {Container, Header, Content, Card, CardItem, Body} from 'native-base';

const SinhVienViCongDong = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await SVViCongDong()
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: '#5c6dc1'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 20,
              paddingTop: 20,
              paddingBottom: 20,
            }}>
            SINH VIÊN VÌ CỘNG ĐỒNG
          </Text>
        </View>
        {data.map(res => {
          return (
            <Card>
              <CardItem>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ChiTietSVViCongDong');
                  }}>
                  <Body>
                    <Image
                      source={{
                        uri: 'http://192.168.1.8:5001/images/' + res.image,
                      }}
                      style={{height: 200, width: '100%', flex: 1}}
                    />
                    <Text style={{textAlign: 'justify', paddingTop: 10}}>
                      {res.title}
                    </Text>
                  </Body>
                </TouchableOpacity>
              </CardItem>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SinhVienViCongDong;
