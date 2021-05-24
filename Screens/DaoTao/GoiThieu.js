import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GioiThieuDaoTao} from '../../Services/list';
import {Container, Content, Card, CardItem, Body} from 'native-base';

const GioiThieu = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await GioiThieuDaoTao().then(res => setData(res.data));
  });
  return (
    <SafeAreaView>
      <ScrollView>
      <Card>
          <CardItem>
            <Body>
              {data.map(res => {
                return (
                  <View>
                    <Text
                      style={styles.contain}>
                      {res.description}
                    </Text>
                    <CardItem cardBody style={{paddingBottom: 10, paddingTop: 10}}>
                      <Image
                        style={{
                          // resizeMode: 'contain',
                          height: 200,
                          width: '100%',
                        }}
                        source={{
                          uri: 'http://192.168.1.4:5001/images/' + res.image,
                        }}
                      />
                    </CardItem>
                  </View>
                );
              })}
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </SafeAreaView>
     
     
  );
};


const styles = StyleSheet.create({
    contain: { 
        textAlign: 'justify',
        fontStyle: 'italic',
        fontSize: 17,
        

    }
}) 

export default GioiThieu;
