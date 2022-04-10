import { Dispatch, FC, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import CloseButton from '../../../components/CloseButton/CloseButton'
import CustomButton from '../../../components/CustomButton/CustomButton'
import Header from '../../../components/Header/Header'
import Videocall from '../../../static/imgs/VideoCall.png'

import './IntroductoryPage.scss'

type PropsType = {
    setPage: Dispatch<SetStateAction<string>>
}

const IntroductoryPage: FC<PropsType> = (props) => {

    let { setPage } = props

    const { t } = useTranslation("IntroductoryPage");
    return (
        <div className="container">
            <div className="introductoryHeader">
                <CloseButton />
                <Header text={t("pageTitle")} />
            </div>
            <div className="introductoryText">
                <img src={Videocall} alt="VideocallImage" />
                <h1> {t("mainText")} </h1>
                <p>{t("additionalText")}</p>
            </div>
            <CustomButton
                onClick={() => setPage("EntryDataPage")}
                text="Далее"
            />
        </div>
    )
}

export default IntroductoryPage