import React, { ChangeEvent, FC, memo } from 'react';
import InputMask from "react-input-mask";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import BackArrow from '../../../components/BackArrow/BackArrow';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Header from '../../../components/Header/Header';
import { UseFormField } from '../../../hooks/UseForm';
import { ROUTES_NAMES } from '../../../routes/RoutesNames';
import ValidateIIN from '../../../utils/ValidateIIN';
import ValidatePhone from '../../../utils/ValidatePhone';
import { ListDataType } from '../types';
import PurposeAppeal from './PurposeAppeal/PurposeAppeal';
import "./SecondConfirmPage.scss";


type PropsType = {
    listData: ListDataType[]
}

const SecondConfirmPage: FC<PropsType> = memo((props) => {
    let { listData } = props

    const { obj, handleChange, setObj } = UseFormField();

    const error = !ValidateIIN(obj.inn)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };


    return (
        <div className="container">
            <div className="secondConfirm__header">
                <BackArrow />
                <Header text="Видеозвонок" />
            </div>
            <form className="secondConfirm__form" onSubmit={handleSubmit}>
                <select onChange={(e: ChangeEvent<HTMLSelectElement>) => { setObj({ ...obj, language: e.target.value }) }} value={obj.language}>
                    <option value="russian">Русский</option>
                    <option value="kazakh">Казахский</option>
                </select>

                <InputMask
                    placeholder={obj.language === "russian" ? "Номер телефона" : "Телефон нөмірі"}
                    mask="+7 (999) 999-99-99"
                    onChange={event => handleChange('phone', event)}
                    value={obj.phone}
                    className={ValidatePhone(obj.phone) < 11 ? "error" : ""}
                />
                {ValidatePhone(obj.phone) < 11 && <p className="errorMessage"> Введите коррентный номер </p>}
                <input
                    placeholder={obj.language === "russian" ? "ИНН" : "СТТН"}
                    maxLength={12}
                    onChange={event => handleChange('inn', event)}
                    value={obj.inn}
                    className={obj.inn.length === 12 && error ? "error" : ""}
                />
                {obj.inn.length === 12 && error && <p className="errorMessage"> Неверный ИНН </p>}
            </form>

            <div className="secondConfirm__aim">
                <h2> Цель обращения </h2>
                <div className="secondConfirm__slider">

                    <Swiper
                        slidesPerView={2}
                        spaceBetween={0}
                        pagination={{ clickable: true, }}
                        breakpoints={{ 700: { slidesPerView: 4, } }}
                        className="mySwiper"
                    >
                        {listData.map((e: ListDataType) => {
                            return <SwiperSlide key={e.code} >
                                <PurposeAppeal purpose={obj.language === "russian" ? e.nameRu : e.nameKz} />
                            </SwiperSlide>
                        })}
                    </Swiper>

                </div>
            </div>

            <ul className="secondConfirm__list">  Нажимая кнопку «Далее», вы соглашаетесь:
                <li>с условиями <a href="##"> Договора использования услуг «Homebank»; </a> </li>
                <li>с условиями <a href="##"> Договора использования Электронного кошелька «Homebank Wallet»; </a> </li>
                <li> <a href="##"> на выпуск ЭЦП Halyk Bank. </a> ЭЦП выпускается при условии прохождения полной регистрации </li>
            </ul>

            <CustomButton
                route={ROUTES_NAMES.FIRST_PAGE}
                text="Далее"
                onClickHandler={() => console.log(obj)}
            />
        </div >
    )
})

export default SecondConfirmPage

