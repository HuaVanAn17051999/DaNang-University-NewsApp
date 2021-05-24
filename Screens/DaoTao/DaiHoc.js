import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
} from 'react-native';
import {ChuyenNganhDaoTao} from '../../Services/list';
import React, {useState, useEffect} from 'react';
import {DataTable} from 'react-native-paper';
import {Card, CardItem, Body} from 'native-base';

const DaiHoc = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await ChuyenNganhDaoTao().then(res => setData(res.data));
  });

  return (
    <SafeAreaView>
      <ScrollView>
        {data.map(res => {
          return (
            <Card>
              <CardItem header bordered>
                <Text style={{fontWeight: "700", fontSize: 18}}>{res.tenTruong}</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title style={{flex: 1}}>Trình độ</DataTable.Title>
                      <DataTable.Title style={{flex: 4}}>Chuyên ngành</DataTable.Title>
                      <DataTable.Title style={{flex: 1}}>Mã ngành</DataTable.Title>
                    </DataTable.Header>
                    {res.child.map(item => {
                      return(
                        <DataTable.Row>
                        <DataTable.Cell style={{flex: 1}}>{item.trinhDo}</DataTable.Cell>
                        <DataTable.Cell style={{flex: 4}}>{item.tenChuyenNganh}</DataTable.Cell>
                        <DataTable.Cell  style={{flex: 1}}>{item.maNganh}</DataTable.Cell>
                      </DataTable.Row>
                      )
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
const styles = StyleSheet.create({
  a : {
    textAlign: "center",

    color: "red"
  }
});
export default DaiHoc;
