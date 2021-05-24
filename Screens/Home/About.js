import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView,ScrollView} from "react-native";
import {Image} from 'react-native'
import { DetailsEven } from '../../Services/list'

const About = ({ route }) => {

  const { itemId } = route.params;
  const [data, setData] = useState([]);

  useEffect(async () => {
    await DetailsEven(itemId)
      .then((res) => setData(res.data))
  });

  return (
    <SafeAreaView style={styles.container}>
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
            THÔNG TIN CHI TIẾT 
          </Text>
        </View>
        <View style={{padding: 10}}>
        {data.map((res) => {
        if (res.id == 1) {
          return (
            <View>
              <Text style={{
                fontFamily: "Cochin",
                color: '#2e5c85',
                fontSize: 20
              }}>{res.description}</Text>
              <Text style={{ paddingTop: 20 }}>
                <Image style={{ width: 28, resizeMode: "contain", }}
                  source={require('../../assets/lock.png')}
                />
                {res.date}
              </Text>
            </View>
          )
        }
        else {
          return (
            <View>
              <Text style={styles.text}>{res.description}</Text>
              <Image style={{
                    
                        width: '100%',
                        height: 200,
                        
                      }} source={{ uri: 'http://192.168.1.8:5001/images/' + res.image }} />
            </View>
          )
        }
      })}
        </View>
   
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
    fontFamily: '"Times New Roman", Georgia, Serif',
    paddingBottom: 20,
    textAlign: 'justify'
  },

  container: {
 
    backgroundColor: '#fff',
    fontFamily: "Cochin",
    color: '#2e5c85',

  }
});

export default About;