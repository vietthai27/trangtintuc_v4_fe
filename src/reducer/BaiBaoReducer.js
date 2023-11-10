import { ThayDoiDuLieuBaibao, ThayDoiNoiDungBaiBaoTrongTaoBaiBao } from "../constant/BaiBaoConstant"

const initialState = {
    dataBaibao: '',
    addBaiBao: {
        tenBaiBao: "",
        tieuDe: "",
        thumbnail: "",
        noiDung: "",
    }
}

const baiBaoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ThayDoiDuLieuBaibao:
            state.dataBaibao = action.data
            break
        case ThayDoiNoiDungBaiBaoTrongTaoBaiBao:
            state.addBaiBao.noiDung = action.data;
            break
        default:
            break
    }
    return { ...state }

}

export default baiBaoReducer