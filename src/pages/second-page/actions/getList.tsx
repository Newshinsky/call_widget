import axios from "axios"
import { Dispatch } from "react"
import { setIsLoading, setList } from "../reducer/ListReducer"
import { ActionsType } from "../types"

export const getListData = () => {

    const login = 'videoBank'
    const password = 'HfyLjvyStCbvdjKs'
    const url = 'https://videobank-dev.t2m.kz/broker-hb/call/getReasons'

    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsLoading(true))
        const response = await axios.post(url, {}, {
            auth: {
                username: login,
                password: password
            }
        })
        dispatch(setList(response.data))
    }
}

