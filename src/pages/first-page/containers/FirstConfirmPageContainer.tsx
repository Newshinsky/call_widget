import React, { useEffect, useState } from 'react';
import FetchData from '../../../api/FetchData';
import FirstConfirmPage from '../components/FirstConfirmPage';



const FirstConfirmPageContainer = () => {
    const [state, setState] = useState<any>(null)


    useEffect(() => {
        setState(FetchData());
        console.log(state)
    }, [])



    return (
        <>
            <FirstConfirmPage />
        </>
    );
};

export default FirstConfirmPageContainer;