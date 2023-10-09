import { https } from "./config";

// export let getUserListServ = () => {
//   https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung");
// };

export let userServ = {
  getList: () => {
    return https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00");
  },
  deleteUser: taiKhoan => https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`),
};
