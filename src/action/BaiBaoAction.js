import axios from "axios"
import { LayBaiBaoThanhCong, TaoBaiBaoThanhCong, TaoBaiBaoThatBai, ThayDoiNoiDungBaiBaoTrongTaoBaiBao, ThayDoiTenBaiBaoTrongTaoBaiBao, ThayDoiThumbnailTrongTaoBaiBao, ThayDoiTieuDeBaiBaoTrongTaoBaiBao } from "../constant/BaiBaoConstant"
import { host } from "../assets/Util/Domain"

export const changeNoiDungBaibaoAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiNoiDungBaiBaoTrongTaoBaiBao, data: inputValue })
    }
}

export const changeTenBaibaoAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiTenBaiBaoTrongTaoBaiBao, data: inputValue })
    }
}

export const changeTieuDeBaibaoAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiTieuDeBaiBaoTrongTaoBaiBao, data: inputValue })
    }
}

export const changeThumbnailBaibaoAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiThumbnailTrongTaoBaiBao, data: inputValue })
    }
}

export const taoBaibaoAction = (addBaiBao) => {
    return async (dispatch) => {
        try {
            await axios({
                method: 'post',
                url: host + "/baibao/modify/addBaiBao",
                data: addBaiBao,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("User Token")
                }
            });
            return dispatch({ type: TaoBaiBaoThanhCong })
        } catch (e) {
            return dispatch({ type: TaoBaiBaoThatBai, data: e })
        }
    }
}

export const layBaibaoAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(host + "/baibao/get/getBaiBaoById/" + id)
            return dispatch({ type: LayBaiBaoThanhCong, data: res.data })
        } catch (e) {
            return dispatch({ type: LayBaiBaoThanhCong, data: e })
        }
    }
}

