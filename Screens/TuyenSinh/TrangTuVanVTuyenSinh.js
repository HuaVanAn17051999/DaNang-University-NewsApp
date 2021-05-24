import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {GetListThongTinTuyenSinh} from '../../Services/list';

const TrangTuVanVTuyenSinh = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await GetListThongTinTuyenSinh().then(res => setData(res.data));
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map(res => {
          if (res.id == 1) {
            return (
              <SafeAreaView>
                <View style={styles.cssTitle}>
                  <Text style={styles.title}>{res.title}</Text>
                </View>
                {res.child.map(result => {
                  return (
                    <SafeAreaView
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#ddceca',
                      }}>
                      <View style={{paddingBottom: 10}}>
                        <Text style={styles.titleThongBao}>{result.title}</Text>
                        <View style={{flexDirection: 'row', paddingTop: 5}}>
                          <Image
                            style={{width: 28, resizeMode: 'contain'}}
                            source={require('../../assets/thongbao.png')}
                          />
                          <Text style={{paddingLeft: 5}}>{result.date}</Text>
                        </View>
                      </View>
                    </SafeAreaView>
                  );
                })}
              </SafeAreaView>
            );
          }
          if (res.id == 7) {
            return (
              <SafeAreaView>
                <View style={styles.cssTitle}>
                  <Text style={styles.title}>{res.title}</Text>
                </View>
                {res.child.map(result => {
                  return (
                    <View style={styles.contentThongBao}>
                      {/* <Text>{result.kiHieu} </Text> */}
                      <View
                        style={{
                          backgroundColor: '#f3eeee',
                          width: '100%',
                          padding: 20,
                        }}>
                        <Text style={styles.titleThongBao}>{result.title}</Text>
                      </View>
                    </View>
                  );
                })}
              </SafeAreaView>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#363636',
    fontWeight: '700',
    fontFamily: 'Saira Extra Condensed',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    textTransform: 'uppercase',
  },
  cssTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  titleThongBao: {
    textAlign: 'justify',

    fontStyle: 'italic',
  },
  contentThongBao: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
});
export default TrangTuVanVTuyenSinh;
