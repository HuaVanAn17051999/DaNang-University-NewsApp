import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {ListGuongMatTieuBieu} from '../../Services/list';
  import {Container, Content, Card, CardItem, Body} from 'native-base';
  import {Header} from 'react-native-elements';
  
  const GuongMatTieuBieu = ({navigation}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      ListGuongMatTieuBieu().then(res => setData(res.data));
    });
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#5c6dc1'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 20,
              paddingTop: 20,
              paddingBottom: 20,
            }}>
            GƯƠNG MẶT TIÊU BIỂU
          </Text>
        </View>
        {data.map(res => {
          return (
            <Card>
              <CardItem>
                <Body>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image
                        style={{
                          resizeMode: 'contain',
                          width: 150,
                          height: 200,
                        }}
                        source={{
                          uri: 'http://192.168.1.4:5001/images/' + res.image,
                        }}
                      />
                    </View>
                    <View style={{paddingLeft: 10}}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Detail', {id: res.id})
                        }>
                        <Text style={styles.name}>{res.name}</Text>
                        <Text style={styles.donvi}>Đơn vị: {res.donVi}</Text>
                        <Text style={styles.text}>
                          Địa chỉ liên hệ: {res.address}
                        </Text>
                        <Text style={styles.text}>
                          Điện thoại cơ quan: {res.dtcq}
                        </Text>
                        <Text style={styles.text}>Di động: {res.sdt}</Text>
                        <Text style={styles.text}>Email: {res.email}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          );
        })}
       
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      textAlign: 'justify',
      fontStyle: 'italic',
    },
    name: {
      color: 'blue',
      fontStyle: 'italic',
      fontSize: 20,
    },
    donvi: {
      color: 'red',
    },
    textFooter: {
      color: '#fff',
      fontWeight: '500',
      fontStyle: 'normal',
    },
  });
  
  export default GuongMatTieuBieu;
  