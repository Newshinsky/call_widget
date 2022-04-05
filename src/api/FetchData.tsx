import axios from 'axios'
import React, { useState } from 'react'




const FetchData = async () => {


    
    const login = 'videoBank'
    const password = 'HfyLjvyStCbvdjKs'
    const url = 'https://videobank-dev.t2m.kz/broker-hb/call/getReasons'

    const data = await axios.post(url, {}, {
        auth: {
            username: login,
            password: password
        }
    }
    ).then(promise => {
        return promise.data;
    })
        .catch(e => {
            console.error(e);
        })
    return data;
}


export default FetchData