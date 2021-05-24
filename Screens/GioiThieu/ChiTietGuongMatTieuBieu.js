import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {ChiTietGuongMatTieuBieus} from '../../Services/list';
  import {
    Container,
    Left,
    Content,
    Thumbnail,
    Card,
    CardItem,
    Body,
  } from 'native-base';
  import {Header} from 'react-native-elements';
  
  const ChiTietGuongMatTieuBieu = ({route}) => {
    const {id} = route.params;
    const [data, setData] = useState([]);
  
    useEffect(async () => {
      await ChiTietGuongMatTieuBieus(id).then(res => setData(res.data));
    });
    return (
      <SafeAreaView>
        <ScrollView>
          {data.map(res => {
            if (res.id == 1) {
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
                        <Text>Sơ yếu lý lịch</Text>
                        <Text note>GeekyAnts</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Họ và tên</Text>:{' '}
                        {res.hoTen}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Giới tính</Text>:{' '}
                        {res.gioiTinh}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Năm sinh:</Text>{' '}
                        {res.namSinh}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Nơi sinh: </Text>
                        {res.noiSinh}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Quê quán:</Text>
                        {res.queQuan}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>
                          Tốt nghiệp ĐH chuyên ngành:
                        </Text>
                        {res.totNghiepDHChuenNganh}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Đơn vị công tác:</Text>{' '}
                        {res.donViCongTac}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Học vị:</Text> {res.hocVi}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>
                          Tốt nghiệp ĐH chuyên ngành:
                        </Text>
                        {res.totNghiepDHChuenNganh}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Chức danh KH:</Text>{' '}
                        {res.chucDanhKH}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Dạy CN: </Text>
                        {res.dayCN}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Ngoại ngữ:</Text>
                        {res.ngoaiNgu}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Địa chỉ liên hệ:</Text>
                        {res.diaChiLienHe}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Điện thoại: </Text>
                        {res.dienThoai}
                      </Text>
                      <Text style={{textAlign: "justify"}}>
                        <Text style={styles.textTitle}>Email:</Text> {res.email}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              );
            }
            if (res.id == 2) {
              return (
                <Card>
                  <CardItem header bordered>
                    <Text style={{color: 'blue', fontWeight: '500'}}>{res.title}</Text>
                  </CardItem>
                  {res.child.map(result => {
                    return (
                      <CardItem bordered>
                        <Body>
                          <Text style={{textAlign: "justify"}}>
                             {result.noiDung}
                          </Text>
                        </Body>
                      </CardItem>
                    );
                  })}
  
              
                </Card>
              );
            }
          })}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    textTitle: {
      color: 'blue',
      paddingRight: 20
    },
  });
  export default ChiTietGuongMatTieuBieu;
  