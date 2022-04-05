import { ActionsType, defaultStateType, ListDataType, SetListActionType } from "../types"

const defaultState = {
    listData:
        [{
            code: null,
            nameEn: null,
            nameKz: "",
            nameRu: "",
        }],
    isLoading: false
}

export default function listReducer(state: defaultStateType = defaultState, action: ActionsType) {
    switch (action.type) {
        case "SET_LIST":
            return {
                ...state,
                listData: action.payload.list,
                isLoading: false
            }
        default: return state
    }
}

export const setList = (list: ListDataType[]): SetListActionType => ({ type: "SET_LIST", payload: list })

