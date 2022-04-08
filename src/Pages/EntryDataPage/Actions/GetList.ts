import axios from 'axios'
import { Dispatch } from 'react'
import { setIsLoading, setList } from '../Reducer/ListReducer'

import { ActionsType } from '../Types'

export const getListData = () => {

    const login = "videoBank"
    const password = "HfyLjvyStCbvdjKs"
    const url = "https://videobank-dev.t2m.kz/broker-hb/call/getReasons"

    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(setIsLoading(true))
        const response = await axios.post(url, {}, {
            auth: {
                username: login,
                password: password
            }
        })
        dispatch(setList(response.data))
        console.log("fetch")
    }
}

