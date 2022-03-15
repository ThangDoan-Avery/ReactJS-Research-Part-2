import { THEM_NGUOI_DUNG } from './baiTapQuanLyNguoiDungType';

export const themNguoiDungAction = (nguoiDung) => {
  // Xử lý rất nhiều về object
  return {
    type: THEM_NGUOI_DUNG,
    // nguoiDung: nguoiDung
    nguoiDung,
  };
};
