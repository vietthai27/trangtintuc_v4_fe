import { changeDataBaibao } from "../constant/BaiBaoConstant"



const initialState = {
    dataBaibao:''
}

const baiBaoReducer = (state = initialState, action) => {
    switch (action.type) {
        case changeDataBaibao:
            state.dataBaibao = action.data
            break
        default:
            break
    }
    return { ...state }

}

export default baiBaoReducer