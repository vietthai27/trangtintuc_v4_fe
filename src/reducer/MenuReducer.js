import { LayDuLieuMenuConThanhCong, LayDuLieuMenuConThatBai, LayDuLieuMenuThanhCong, LayDuLieuMenuThatBai } from "../constant/MenuConstant"

const initialState = {
    menuData: [],
    menuCon: []
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case LayDuLieuMenuThanhCong:
            state.menuData = action.data
            break
        case LayDuLieuMenuThatBai:
            state.menuData = action.data
            break
        case LayDuLieuMenuConThanhCong:
            state.menuCon = action.data
            break
        case LayDuLieuMenuConThatBai:
            state.menuCon = action.data
            break
        default:
            break
    }
    return { ...state }

}

export default menuReducer