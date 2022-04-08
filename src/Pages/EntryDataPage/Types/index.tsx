export type ActionsType = SetListActionType | SetIsBooleanActionType |SetLanguageActionType

export interface SetListActionType {
    type: "SET_LIST",
    payload: ListType
}

export interface SetIsBooleanActionType {
    type: "SET_IS_LOADING",
    payload: boolean
}

export interface SetLanguageActionType {
    type: "SET_LANGUAGE",
    payload: string
}

export interface ListDataType {
    code: null | number
    nameEn: null | string
    nameKz: string
    nameRu: string
}

export interface ListType {
    list: ListDataType[],
    status: string
}

export interface defaultStateType {
    listData: ListType,
    isLoading: boolean
    language: string
}

