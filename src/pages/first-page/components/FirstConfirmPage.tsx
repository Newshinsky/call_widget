
import React from 'react'
import CloseButton from '../../../components/CloseButton/CloseButton'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Header from '../../../components/Header/Header'
import { ROUTES_NAMES } from '../../../routes/RoutesNames'
import Videocall from "../../../static/imgs/VideoCall.png"
import "./FirstConfirmPage.scss"


const FirstConfirmPage = () => {

    return (
        <div className="container">

            <div className="firstConfirm__header">
                <CloseButton />
                <Header text="Видеозвонок" />

            </div>
            <div className="firstConfirm__text">
                <img src={Videocall} alt="" />
                <h1> Видеозвонок с менеджером Банка </h1>
                <p>Нажимая кнопку «Далее», Вы соглашаетесь на проведение видеозвонка с менеджером Банка </p>
            </div>
            <CustomButton
                route={ROUTES_NAMES.SECOND_PAGE}
                text="Далее"
            />
        </div>
    )
}

export default FirstConfirmPage