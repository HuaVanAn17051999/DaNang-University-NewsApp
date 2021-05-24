import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import {Image} from 'react-native';
import {ChiTietSVViCongDong} from '../../Services/list';
import {Content, Card, CardItem, Body} from 'native-base';

const ChiTietSinhVienViCongDong = ({route}) => {
  const {id} = route.params;
  const [data, setData] = useState([]);

  useEffect(async () => {
    await ChiTietSVViCongDong(id).then(res => setData(res.data));
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
            CHI TIẾT SINH VIÊN VÌ CỘNG ĐỒNG
          </Text>
          {data.map(res => {
            if (res.title != null) {
              return (
                <Card>
                  <CardItem>
                    <Body>
                      <Text
                        style={{
                          textAlign: 'justify',
                          fontSize: 18,
                          paddingBottom: 10,
                          color: 'blue',
                        }}>
                        {res.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          paddingBottom: 10,
                        }}>
                        {res.noiDung}
                      </Text>
                      <Image
                        style={{height: 200, width: '100%'}}
                        source={{
                          uri: 'http://192.168.1.8:5001/images/' + res.image,
                        }}
                      />
                        <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          paddingBottom: 10,
                        }}>
                        {res.noiDung}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            } else {
              return (
                <Card>
                  <CardItem>
                    <Body>
                      <Image
                        style={{height: 200, width: '100%'}}
                        source={{
                          uri: 'http://192.168.1.8:5001/images/' + res.image,
                        }}
                      />
                      {/* <Text style={{textAlign: 'center'}}>
                        {res.description}
                      </Text> */}
                      <Text style={{textAlign: 'justify', fontSize: 16, paddingTop: 10}}>
                        {res.noiDung}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            }
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChiTietSinhVienViCongDong;
