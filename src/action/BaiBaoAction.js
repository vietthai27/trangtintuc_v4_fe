import { ThayDoiDuLieuBaibao, ThayDoiNoiDungBaiBaoTrongTaoBaiBao } from "../constant/BaiBaoConstant"

export const changeDataBaibaoAction = (dataBaibao) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiDuLieuBaibao, data: dataBaibao })
    }
}

export const changeNoiDungBaibaoAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiNoiDungBaiBaoTrongTaoBaiBao, data: inputValue })
    }
}