import axios from 'axios'

const basicAuth = {
    username: "videoBank",
    password: "HfyLjvyStCbvdjKs"
}

export const getListData = () => {
    const url = "https://videobank-dev.t2m.kz/broker-hb/call/getReasons"
    return axios.post(url, {},
        {
            auth: basicAuth
        }
    )
}

