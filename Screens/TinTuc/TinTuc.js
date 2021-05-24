import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {ListTinTuc} from '../../Services/list';
  import {
    Container,
    Thumbnail,
    Left,
    Content,
    Card,
    CardItem,
    Body,
  } from 'native-base';
  import {Header} from 'react-native-elements'
  
  const TinTuc = () => {
    const [data, setData] = useState([]);
    useEffect(async () => {
      await ListTinTuc().then(res => setData(res.data));
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
            THÔNG TIN TIN TỨC 
          </Text>
        </View>
          {data.map(res => {
            return (
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: 'http://192.168.1.4:5001/images/' + res.image,
                      }}
                    />
                    <Body>
                      <Text style={{textAlign: 'justify'}}>{res.title}</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                {res.child.map(a => {
                  return (
                    <CardItem>
                      <Body>
                        <Image
                          source={{
                            uri: 'http://192.168.1.4:5001/images/' + a.image,
                          }}
                          style={{height: 200, width: '100%', flex: 1}}
                        />
                        <Text style={{textAlign: 'justify', paddingTop: 10}}>
                          {a.title}
                        </Text>
                      </Body>
                    </CardItem>
                  );
                })}
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default TinTuc;
  