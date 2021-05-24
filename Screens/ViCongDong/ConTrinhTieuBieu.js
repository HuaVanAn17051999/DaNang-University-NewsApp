import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {ListCongTrinhTieuBieu} from '../../Services/list';
  import {Container, Content, Card, CardItem, Body} from 'native-base';
  import {Header} from 'react-native-elements';
  
  const ConTrinhTieuBieu = ({navigation}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      ListCongTrinhTieuBieu().then(res => setData(res.data));
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
            CÔNG TRÌNH TIỂU BIỂU
          </Text>
        </View>
        
          {data.map(res => {
            return (
              <Card>
                <CardItem bordered>
                  <Body>
                    <Image
                      source={{
                        uri: 'http://192.168.1.8:5001/images/' + res.image,
                      }}
                      style={{height: 200, width: '100%', flex: 1}}
                    />
                    <Text
                      onPress={() => navigation.navigate('ConnTrinhChiTiet', {itemId: res.id})}
                      style={{
                        paddingBottom: 10,
                        paddingTop: 10,
                        textAlign: 'justify',
                        fontWeight: '600',
                        color: '#434393',
                        fontSize: 16,
                      }}>
                      {res.title}
                    </Text>
                    <Text style={{textAlign: 'justify'}}>{res.noiDung}</Text>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ConTrinhTieuBieu;
  