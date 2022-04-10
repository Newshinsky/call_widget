import React, { ChangeEvent, Dispatch, FC, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';
import i18n from 'i18next';

import ValidatePhone from '../../../Utils/ValidatePhone';
import BackArrow from '../../../components/BackArrow/BackArrow';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Header from '../../../components/Header/Header';
import Loader from '../../../components/Loader/Loader';
import ValidateIIN from '../../../Utils/ValidateIIN';
import { UseFormField } from '../../../Hooks/UseForm';
import { ContextApp } from '../..';
import { getListData } from '../Actions/GetList';
import { setIsLoading, setLanguage, setList } from '../Reducer/ListReducer';
import { ListDataType } from '../Types';
import PurposeAppeal from './purposeAppeal/PurposeAppeal';

import './EntryDataPage.scss';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';

type languageKeyType = {
    "ru": string,
    "kz": string,
}

type PropsType = {
    setPage: Dispatch<SetStateAction<string>>
}

const EntryDataPage: FC<PropsType> = (props) => {

    const { state, dispatch } = useContext(ContextApp);
    const { formFieldData, handleChange, setFormFieldData } = UseFormField();
    const { setPage } = props
    const { t } = useTranslation("EntryDataPage");
    const [selectedItem, setSelectedItem] = useState<null | number>()

    const onChangeSelectHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
        dispatch(setLanguage(e.target.value))
    }, [dispatch])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const loading = async () => {
        dispatch(setIsLoading(true))
        const list = await getListData()
        dispatch(setList(list.data))
    }

    const onClickFormHandler = useCallback(() => {
        setFormFieldData({
            ...formFieldData,
            isIinCorrect: ValidateIIN(formFieldData.iin),
            isPhoneCorrect: ValidatePhone(formFieldData.phone),
            formValid: ValidateIIN(formFieldData.iin) && ValidatePhone(formFieldData.phone)
        })
    }, [formFieldData, setFormFieldData])

    useEffect(() => {
        loading()
    }, [])

    if (formFieldData.formValid) {
        alert("Форма валидна")
    }

    return (state.isLoading
        ? <Loader />
        : <div className="container">
            <div className="secondConfirmHeader">
                <BackArrow onClick={() => setPage("IntroductoryPage")} />
                <Header text={t("pageTitle")} />
            </div>
            <form className="secondConfirmForm" onSubmit={handleSubmit}>
                <select
                    onChange={onChangeSelectHandler} value={state.language}>
                    <option value="ru">Русский</option>
                    <option value="kz">Казакша</option>
                </select>
                <InputMask
                    placeholder={t("phoneNumberPlaceholder")}
                    mask="+7 (999) 999-99-99"
                    onChange={event => handleChange("phone", event)}
                    value={formFieldData.phone}
                    className={!formFieldData.isPhoneCorrect ? "error" : ""}
                />
                {!formFieldData.isPhoneCorrect && <p className="errorMessage"> {t("phoneErrorMessage")}</p>}

                <input
                    placeholder={t("iinPlaceholder")}
                    maxLength={12}
                    onChange={event => handleChange("iin", event)}
                    value={formFieldData.iin}
                    className={!formFieldData.isIinCorrect ? "error" : ""}
                />
                {!formFieldData.isIinCorrect && <p className="errorMessage"> {t("innErrorMessage")}</p>}

            </form>
            <div className="secondConfirmAim">
                <h2> {t("purposeOfAppeal")}</h2>
                <div className="secondConfirmSlider">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={0}
                        pagination={{ clickable: true, }}
                        breakpoints={{ 700: { slidesPerView: 4, } }}
                        className="mySwiper"
                    >
                        {state.listData.list.map((e: ListDataType) => {
                            let languageKey: languageKeyType = {
                                "ru": "nameRu",
                                "kz": "nameKz",
                            }
                            return <SwiperSlide key={e.code} >
                                <PurposeAppeal
                                    selectedText={e.code === selectedItem ? t("itemSelected") : t("selectItem")}
                                    activeItemStyle={e.code === selectedItem ? "activeItem" : ""}
                                    selectItem={() => setSelectedItem(e.code)}
                                    // @ts-ignore
                                    purpose={e[languageKey[state.language]]} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
            <ul className="secondConfirmList">  {t("contractOfuseTitle")}
                <li>
                    <a href="https://halykbank.kz/storage/app/media/Documents%202020/Other%20FL/RUS_Dogovor.pdf" target="_blank" rel="noreferrer">
                        {t("contractOfuseLink.firstLink")}
                    </a>
                </li>
                <li>
                    <a href="https://halykbank.kz/storage/app/media/Documents%202020/Other%20FL/rusdogovor-prisoedineniya-na-predostavlenie-uslug-po-vypusku-ispolzovaniyu-i-pogasheniyu-elektronnykh-deneg-posredstvom-sistemy-ele.pdf" target="_blank" rel="noreferrer">
                        {t("contractOfuseLink.secondLink")}
                    </a>
                </li>
                <li>
                    <a href="##" target="_blank" rel="noreferrer">
                        {t("contractOfuseLink.thirdLink")}
                    </a>
                </li>
            </ul>
            <CustomButton
                onClick={onClickFormHandler}
                text="Далее"
            />
        </div >

    )
}

export default EntryDataPage

