import { toast } from "react-toastify";
import { DangKyThanhCong, DangKyThatBai, DangNhapThanhCong, DangNhapThatBai, ThayDoiDuLieuEmail, ThayDoiDuLieuMatKhauNguoiDung, ThayDoiDuLieuNhapLaiMatKhau, ThayDoiDuLieuTenNguoiDung } from "../constant/UserCostant";

const initialState = {
    userData: {
        username: "",
        password: "",
        email: ""
    },
    retypePassword: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ThayDoiDuLieuTenNguoiDung:
            state.userData.username = action.data
            break
        case ThayDoiDuLieuMatKhauNguoiDung:
            state.userData.password = action.data;
            break
        case DangNhapThanhCong:
            localStorage.setItem("User Token", action.data)
            toast.success("Đăng nhập thành công")
            break
        case DangNhapThatBai:
            toast.error(action.data)
            break
        case ThayDoiDuLieuEmail:
            state.userData.email = action.data;
            break
        case ThayDoiDuLieuNhapLaiMatKhau:
            state.retypePassword = action.data
            break
        case DangKyThanhCong:
            toast.success("Tạo tài khoản thành công")
        case DangKyThatBai:
            toast.error(action.data)
        default:
            break
    }
    return { ...state }

}

export default userReducer