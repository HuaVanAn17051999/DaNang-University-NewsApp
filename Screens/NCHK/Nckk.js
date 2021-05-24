import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
} from 'react-native';
import {LinhVucNghienCuu} from '../../Services/list';
import React, {useState, useEffect} from 'react';
import {DataTable} from 'react-native-paper';
import {Card, CardItem, Body} from 'native-base';

const Nckk = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await LinhVucNghienCuu()
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
            LĨNH VỰC NGHIÊN CỨU
          </Text>
        </View>
        {data.map(res => {
          return (
            <Card>
              <CardItem header bordered>
                <Text style={{fontWeight: '700', fontSize: 18}}>
                  {res.title}
                </Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title style={{flex: 1}}>STT</DataTable.Title>
                      <DataTable.Title style={{flex: 4}}>
                        Tên lĩnh vực
                      </DataTable.Title>
                    </DataTable.Header>
                    {res.child.map(item => {
                      {
                        for (var i = 1; i <= res.child.length; i++) {
                          return (
                            <DataTable.Row>
                              <DataTable.Cell style={{flex: 1}}>
                              i
                              </DataTable.Cell>
                              <DataTable.Cell style={{flex: 4}}>
                                {item.linhVuc}
                              </DataTable.Cell>
                            </DataTable.Row>
                          );
                        }
                      }
                    })}
                  </DataTable>
                </Body>
              </CardItem>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default Nckk;
