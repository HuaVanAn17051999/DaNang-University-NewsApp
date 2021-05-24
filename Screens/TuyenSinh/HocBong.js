import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {ListHocBong} from '../../Services/list';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

const HocBong = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await ListHocBong().then(res => setData(res.data));
  });

  return (
    <SafeAreaView style={{padding: 20}}>
      <ScrollView>
        {data.map(res => {
          return (
            <Card>
              <CardItem cardBody>
                <Image
                  style={{
                    // resizeMode: 'contain',
                    width: '100%',
                    height: 200,
                  }}
                  source={{
                    uri: 'http://192.168.1.4:5001/images/' + res.image,
                  }}
                />
              </CardItem>
              <CardItem footer bordered>
                <Text style={{textAlign: "justify"}}>{res.title}</Text>
                {/* <View>
                  <Image
                    style={{width: 28, resizeMode: 'contain'}}
                    source={require('../assets/home/thongbao.png')}
                  />
                  <Text style={{paddingBottom: 10, paddingLeft: 10}}>
                    {res.date}
                  </Text>
                </View> */}
              </CardItem>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HocBong;
