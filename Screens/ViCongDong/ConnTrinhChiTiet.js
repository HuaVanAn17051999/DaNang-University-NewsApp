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
import {Congtrinhchitiet} from '../../Services/list';
import {Dimensions} from 'react-native';
import details from '../Screens/Details';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';

const ConnTrinhChiTiet = ({route}) => {
  const {itemId} = route.params;
  const [data, setData] = useState([]);

  useEffect(async () => {
    await Congtrinhchitiet(itemId)
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          <CardItem>
            <Body>
              {data.map(res => {
                if (res.title != null) {
                  return (
                    <View>
                      <Text
                        style={{
                          textAlign: 'justify',
                          color: 'blue',
                          paddingBottom: 10,
                        }}>
                        {res.title}
                      </Text>
                      <Text>{res.date}</Text>
                    </View>
                  );
                } else {
                  if(res.image != null) {
                    return (
                        <View style={{paddingTop: 10, paddingBottom: 10}}>
                          <Text style={{textAlign: 'justify'}}>{res.noiDung}</Text>
                          <View style={{paddingTop: 10}}>
                            <Image
                              style={{
                                height: 200,
                              }}
                              source={{
                                uri: 'http://192.168.1.20:5001/images/' + res.image,
                              }}
                            />
                          </View>
    
                          <Text style={{textAlign: 'center', color: '#6c757d'}}>
                            {res.description}
                          </Text>
                        </View>
                      );
                  }
                  
                }
              })}
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConnTrinhChiTiet;
