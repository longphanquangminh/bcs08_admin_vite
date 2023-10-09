import { userLocalStorage } from "../api/localService";

// PrivateRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default function PrivateRoute({ children }) {
  let user = userLocalStorage.get();
  if (user?.maLoaiNguoiDung == "QuanTri") {
    return children;
  }
  window.location.href = "/login";
  //   return children;
}
