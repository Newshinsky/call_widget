import { Dispatch, FC, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import CloseButton from '../../../Components/CloseButton/CloseButton'
import CustomButton from '../../../Components/CustomButton/CustomButton'
import Header from '../../../Components/Header/Header'
import Videocall from '../../../Static/Imgs/videoCall.png'

import './index.scss'

type PropsType = {
    setPage: Dispatch<SetStateAction<string>>
}

const IntroductoryPage: FC<PropsType> = (props) => {

    let { setPage } = props

    const { t } = useTranslation("IntroductoryPage");
    return (
        <div className="container">
            <div className="firstConfirmHeader">
                <CloseButton />
                <Header text={t("pageTitle")} />
            </div>
            <div className="firstConfirmText">
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