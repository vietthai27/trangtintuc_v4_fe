import { ThayDoiDuLieuBaibao, ThayDoiNoiDungBaiBaoTrongTaoBaiBao } from "../constant/BaiBaoConstant"

export const changeNoiDungBaibaoAction = (inputValue) => {
    return (dispatch) => {
        return dispatch({ type: ThayDoiNoiDungBaiBaoTrongTaoBaiBao, data: inputValue })
    }
}