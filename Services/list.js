import axios from 'axios';

const URL  = 'http://192.168.1.4:5001/';

export async function HomeService() {
  return await axios.get(URL + 'api/even')
}
export async function DetailsEven(id){
  return await axios.get(URL + 'api/DetailsEven/?id=2')
}
export function ApiImage(){
  return "http://192.168.1.4:5001/api/images/";
}
export async function GioiThieuDaoTao(){
  return await axios.get(URL + 'api/daotao')
}
export async function ChuyenNganhDaoTao(){
  return await axios.get(URL + 'api/chuyennganhdaotao')
}
export async function GetListThongTinTuyenSinh(){
  return await axios.get(URL + 'api/chuyennganhdaotao/ListThongTinTuyenSinh')
}
export async function ListHocBong(){
  return await axios.get(URL + 'api/chuyennganhdaotao/ListHocBong')
}
export async function ListTinTuc(){
  return await axios.get(URL + 'api/chuyennganhdaotao/ListTinTuc')
}
export async function ListGuongMatTieuBieu(){
  return await axios.get(URL + 'api/chuyennganhdaotao/ListGuongMatTieuBieu')
}
export async function ChiTietGuongMatTieuBieus(id){
  return await axios.get(URL + 'api/chuyennganhdaotao/ChiTietGuongMatTieuBieu/' + id);
}
export async function ListCongTrinhTieuBieu(){
  return await axios.get(URL + 'api/chuyennganhdaotao/ListCongTrinhTieuBieu');
}
export async function Congtrinhchitiet(id){
  return await axios.get(URL + 'api/chuyennganhdaotao/Congtrinhchitiet/' + id);
}
export async function SVViCongDong(){
  return await axios.get(URL + 'api/chuyennganhdaotao/SinhVienViCongDong');
}
export async function ChiTietSVViCongDong(id){
  return await axios.get(URL + 'api/chuyennganhdaotao/ChiTietSVViCongDong/' + id);
}
export async function LinhVucNghienCuu(){
  return await axios.get(URL + 'api/chuyennganhdaotao/LinhVucNghienCuu/');
}
