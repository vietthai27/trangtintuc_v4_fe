import axios from "axios"
import { DangKyThanhCong, DangKyThatBai, DangNhapThanhCong, DangNhapThatBai, ThayDoiDuLieuEmail, ThayDoiDuLieuMatKhauNguoiDung, ThayDoiDuLieuNhapLaiMatKhau, ThayDoiDuLieuTenNguoiDung } from "../constant/UserCostant"
import { host } from "../assets/Util/Domain"

export const thayDoiTenNguoiDungAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiDuLieuTenNguoiDung, data: inputValue })
    }
}

export const thayDoiMatKhauAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiDuLieuMatKhauNguoiDung, data: inputValue })
    }
}

export const thayDoiEmailAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiDuLieuEmail, data: inputValue })
    }
}

export const thayDoiNhapLaiMatKhauAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiDuLieuNhapLaiMatKhau, data: inputValue })
    }
}

export const dangNhapAction = (userData) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(host + "/login", userData)
            return dispatch({ type: DangNhapThanhCong, data: res.data })
        } catch (e) {
            return dispatch({ type: DangNhapThatBai, data: e.response.data.message })
        }
    }
}

export const dangKyAction = (userData) => {
    return async (dispatch) => {
        try {
            await axios.post(host + "/userSignup", userData)
            return dispatch({ type: DangKyThanhCong })
        } catch (e) {
            
            return dispatch({ type: DangKyThatBai, data: e })
        }
    }
}