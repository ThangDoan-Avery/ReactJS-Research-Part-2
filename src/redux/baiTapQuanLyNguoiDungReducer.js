const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: 'abc',
      hoTen: 'A',
      soDienThoai: '0999999999',
      email: 'nguyenvana@gmail.com',
      matKhau: '123123123',
      loaiNguoiDung: '1',
    },
    {
      taiKhoan: 'xyz',
      hoTen: 'B',
      soDienThoai: '0999999989',
      email: 'nguyenvanb@gmail.com',
      matKhau: '1231231124',
      loaiNguoiDung: '2',
    },
  ],
  nguoiDungSua: {
    taiKhoan: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
    matKhau: '',
    loaiNguoiDung: '',
  },
};
export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'THEM_NGUOI_DUNG': {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }
    case 'XOA_NGUOI_DUNG': {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];

      mangNguoiDungUpdate = mangNguoiDungUpdate.filter(
        (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan,
      );

      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    case 'SUA_NGUOI_DUNG': {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }
    default:
      return state;
  }
};
