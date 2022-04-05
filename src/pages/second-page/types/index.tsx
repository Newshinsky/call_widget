export type ActionsType = SetListActionType

export interface SetListActionType {
    type: "SET_LIST",
    payload: any
}

export interface ListDataType {
    code: null | number
    nameEn: null | string
    nameKz: string
    nameRu: string
}

export interface defaultStateType {
    listData: ListDataType[],
    isLoading: boolean
}

