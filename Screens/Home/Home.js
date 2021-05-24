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
import {HomeService} from '../../Services/list';
import {ApiImage} from '../../Services/list';

import {Container, Header, Content, Card, CardItem, Body} from 'native-base';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [url, setURL] = useState();

  useEffect(async () => {
    setURL(ApiImage());
    await HomeService()
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 10,
          }}>
          <View style={{justifyContent: 'flex-start', flex: 1}}>
            <Image
              style={{resizeMode: 'contain', height: 70, width: 70}}
              source={require('../../assets/udn.png')}
            />
          </View>
          <View style={{paddingRight: 30}}>
            <Text style={{fontSize: 30, color: '#054770', fontWeight: '700'}}>
              ĐẠI HỌC ĐÀ NẴNG
            </Text>
            <Text style={{color: '#eaea08'}}>THE UNIVERSITY OF DANANG</Text>
          </View>
        </View>
        <View>
          <Slideshow
            dataSource={[
              {url: require('../../assets/slide1.jpg')},
              {url: require('../../assets/slide3.jpg')},
              {url: require('../../assets/slide3.png')},
            ]}
          />
        </View>
        <View style={{paddingTop: 20, paddingBottom: 20}}>
          <Image
            style={styles.ts_image}
            source={require('../../assets/ts.jpg')}
          />
        </View>
        {data.map(res => {
          if (res.id == 1) {
            return (
              <Card>
                <CardItem header></CardItem>
                <CardItem>
                  <Body>
                    {res.child.map(item => {
                      return (
                        <TouchableOpacity
                          style={styles.container_tintuc}
                          onPress={() =>
                            navigation.navigate('About', {
                              itemId: item.id,
                            })
                          }>
                          <Image
                            style={{
                              resizeMode: 'contain',
                              width: 100,
                              // height: 100
                            }}
                            source={{
                              uri:
                                'http://192.168.1.4:5001/images/' + item.image,
                            }}
                          />

                          <Text style={{textAlign: 'justify'}}>
                            {item.description}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </Body>
                </CardItem>
              </Card>
            );
          }
          if (res.id == 6) {
            return (
              <Card>
                <CardItem header>
                  <Text style={styles.text_color}>{res.description}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    {res.child.map(item => {
                      return (
                        <View
                          style={{
                            paddingBottom: 10,
                            // borderBottomColor: '#c4c4c4',
                            // borderBottomWidth: 1,
                            width: '100%',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                              style={{width: 28, resizeMode: 'contain'}}
                              source={require('../../assets/thongbao.png')}
                            />
                            <Text style={{paddingBottom: 10, paddingLeft: 10}}>
                              {item.date}
                            </Text>
                          </View>
                          <Text style={{width: '100%', textAlign: 'justify'}}>
                            {item.description}
                          </Text>
                        </View>
                      );
                    })}
                  </Body>
                </CardItem>
              </Card>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  ts_image: {
    resizeMode: 'cover',
    height: 100,
    width: '100%',
  },
  text_color: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2c2c77',
    paddingBottom: 10,
  },
  imagestyle: {
    height: 500,
    width: 500,
  },
  content_sukien: {
    backgroundColor: 'white',
    margin: 10,
    // borderRadius: width * 0.05,
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  container_sukien: {
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row',
  },
  container_tintuc_border: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  container_tintuc: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default Home;
