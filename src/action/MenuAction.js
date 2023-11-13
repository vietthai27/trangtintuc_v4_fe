import axios from "axios"
import { host } from "../assets/Util/Domain"
import { LayDuLieuMenuConThanhCong, LayDuLieuMenuConThatBai, LayDuLieuMenuThanhCong, LayDuLieuMenuThatBai } from "../constant/MenuConstant"

export const layDuLieuMenuAction = () => {
    return async (dispatch) => {
        try {
            let res = await axios.get(host + "/danhmuc/get/getAllDanhMucBaiBao")
            return dispatch({ type: LayDuLieuMenuThanhCong, data: res.data })
        } catch (e) {
            return dispatch({ type: LayDuLieuMenuThatBai, data: e })
        }
    }
}

export const layDuLieuMenuConAction = (id) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(host + "/danhmuccon/get/getAllDanhMucConByIdCha/" + id)
            return dispatch({ type: LayDuLieuMenuConThanhCong, data: res.data })
        } catch (e) {
            return dispatch({ type: LayDuLieuMenuConThatBai, data: e })
        }
    }
}