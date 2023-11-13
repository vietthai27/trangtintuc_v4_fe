import { toast } from "react-toastify";
import { LayBaiBaoMoiNhatThanhCong, LayBaiBaoMoiNhatThatBai, LayBaiBaoThanhCong, LayBaiBaoThatBai, TaoBaiBaoThanhCong, TaoBaiBaoThatBai, ThayDoiNoiDungBaiBaoTrongTaoBaiBao, ThayDoiTenBaiBaoTrongTaoBaiBao, ThayDoiThumbnailTrongTaoBaiBao, ThayDoiTieuDeBaiBaoTrongTaoBaiBao } from "../constant/BaiBaoConstant"

const initialState = {
    addBaiBao: {
        tenBaiBao: "",
        tieuDe: "",
        thumbnail: "",
        noiDung: "",
    },
    baiBao: {
        tenBaiBao: "",
        tieuDe: "",
        thumbnail: "",
        noiDung: "",
        ngayDang: "",
        luotXem: 0
    },
    danhSachBaiBao:[]
}

const baiBaoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ThayDoiNoiDungBaiBaoTrongTaoBaiBao:
            state.addBaiBao.noiDung = action.data;
            break
        case ThayDoiTenBaiBaoTrongTaoBaiBao:
            state.addBaiBao.tenBaiBao = action.data;
            break
        case ThayDoiTieuDeBaiBaoTrongTaoBaiBao:
            state.addBaiBao.tieuDe = action.data;
            break
        case ThayDoiThumbnailTrongTaoBaiBao:
            state.addBaiBao.thumbnail = action.data;
            break
        case TaoBaiBaoThanhCong:
            toast.success("Tạo bài báo thành công")
            break
        case TaoBaiBaoThatBai:
            toast.error(action.data)
            break
        case LayBaiBaoThanhCong:
            state.baiBao = action.data
            break
        case LayBaiBaoThatBai:
            state.baiBao = action.data
            break
        case LayBaiBaoMoiNhatThatBai:
            state.danhSachBaiBao = action.data
            break
        case LayBaiBaoMoiNhatThanhCong:
            state.danhSachBaiBao = action.data
            break
        default:
            break
    }
    return { ...state }

}

export default baiBaoReducer