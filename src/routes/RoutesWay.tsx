import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstConfirmPageContainer from '../pages/first-page/containers/FirstConfirmPageContainer'
import SecondConfirmPageContainer from '../pages/second-page/container/SecondConfirmPageContainer'
import { ROUTES_NAMES } from './RoutesNames'


const RoutesWay = () => {
    return (
        <>
            <Routes>
                <Route path={ROUTES_NAMES.FIRST_PAGE} element={
                    <FirstConfirmPageContainer />
                } />
                <Route path={ROUTES_NAMES.SECOND_PAGE} element={
                    <SecondConfirmPageContainer />
                } />
            </Routes >
        </>
    )
}

export default RoutesWay