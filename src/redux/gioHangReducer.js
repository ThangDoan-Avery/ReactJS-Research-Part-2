const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: 'Iphone',
      giaBan: 1000,
      soLuong: 3,
      hinhAnh: 'https://picsum.photos/200',
    },
  ],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'THEM_GIO_HANG': {
      let gioHang = [...state.gioHang];
      let spGioHang = { ...action.sanPham, soLuong: 1 };
      let sp = gioHang.find((sanPham) => sanPham.maSP === spGioHang.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(spGioHang);
      }

      state.gioHang = gioHang;
      return { ...state };
    }
    default:
      return state;
  }
};
