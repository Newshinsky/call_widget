import { ActionsType, defaultStateType, ListDataType, ListType, SetIsBooleanActionType, SetListActionType } from "../types"

const defaultState = {
    listData: {
        list: [{
            code: null,
            nameEn: null,
            nameKz: "",
            nameRu: "",
        }],
        status: ""
    }
    ,
    isLoading: false
}

export default function listReducer(state: defaultStateType = defaultState, action: ActionsType) {
    switch (action.type) {
        case "SET_LIST":
            return {
                ...state,
                listData: action.payload,
                isLoading: false
            }
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: true
            }
        default: return state
    }
}
export const setList = (list: ListType): SetListActionType => ({ type: "SET_LIST", payload: list })
export const setIsLoading = (isLoading: boolean): SetIsBooleanActionType => ({ type: "SET_IS_LOADING", payload: isLoading })

