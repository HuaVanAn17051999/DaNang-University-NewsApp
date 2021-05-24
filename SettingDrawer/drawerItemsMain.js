export const drawerItemsMain = [
    {
      key: 'Home',
      title: 'Home',
      routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
    },
    {
      key: 'GioiThieu',
      title: 'Giới thiệu',
      routes: [
        {nav: 'MainDrawer', routeName: 'LichSuHinhThanh', title: 'Lịch sử hình thành'},
        {nav: 'MainDrawer', routeName: 'GuongMatTieuBieu', title: 'Gương mặt tiêu biểu'},
      ],
    },
    {
      key: 'ViCongDong',
      title: 'Vì cộng đồng',
      routes: [
        {nav: 'MainDrawer', routeName: 'SinhVienViCongDong', title: 'Sinh viên vì cộng đồng '},
        {nav: 'MainDrawer', routeName: 'ConTrinhTieuBieu', title: 'Công trình tiêu biểu'},
      ],
    },
  ];