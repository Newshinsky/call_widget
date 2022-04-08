import { ActionsType, defaultStateType, ListType, SetIsBooleanActionType, SetLanguageActionType, SetListActionType } from '../Types'

export const defaultState = {
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
    isLoading: false,
    language: "ru"
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
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload
            }
        default: return state
    }
}
export const setList = (list: ListType): SetListActionType => ({ type: "SET_LIST", payload: list })
export const setIsLoading = (isLoading: boolean): SetIsBooleanActionType => ({ type: "SET_IS_LOADING", payload: isLoading })
export const setLanguage = (language: string): SetLanguageActionType => ({ type: "SET_LANGUAGE", payload: language })

