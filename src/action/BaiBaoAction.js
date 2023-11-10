import { changeDataBaibao } from "../constant/BaiBaoConstant"

export const changeDataBaibaoAction = (dataBaibao) => {
    return (dispatch) => {
        return dispatch({ type: changeDataBaibao, data: dataBaibao })
    }
}