import React, { ChangeEvent } from 'react';
import InputMask from "react-input-mask";
import CustomButton from '../../../components/CustomButton/CustomButton';
import Header from '../../../components/Header/Header';
import { UseFormField } from '../../../hooks/UseForm';
import { ROUTES_NAMES } from '../../../routes/RoutesNames';
import PurposeAppeal from './PurposeAppeal/PurposeAppeal';
import "./SecondConfirmPage.scss";



const SecondConfirmPage = () => {
    console.log("render")
    const handleRegister = (data: any, event: any) => {
        // event.preventDefault();
        // reset()
        console.log(data)
    }

    const { obj, handleChange, setObj } = UseFormField();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(obj)
    };
    return (
        <div className="container">
            <div className="secondConfirm__header">
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
                    value={obj.phone} />

                <InputMask
                    placeholder={obj.language === "russian" ? "ИНН" : "СТТН"}
                    mask="9999 9999 9999 9999"
                    onChange={event => handleChange('inn', event)}
                    value={obj.inn} />
            </form>

            <div className="secondConfirm__aim">
                <h2> Цель обращения </h2>
                <div className="secondConfirm__slider">
                    <PurposeAppeal />
                    <PurposeAppeal />
                    <PurposeAppeal />
                    <PurposeAppeal />
                    <PurposeAppeal />
                    <PurposeAppeal />
                </div>
            </div>
            <ul className="secondConfirm__list">   Нажимая кнопку «Далее», вы соглашаетесь:
                <li>с условиями <a href="##"> Договора использования услуг «Homebank»; </a> </li>
                <li>с условиями <a href="##"> Договора использования Электронного кошелька «Homebank Wallet»; </a> </li>
                <li> <a href="##"> на выпуск ЭЦП Halyk Bank. </a> ЭЦП выпускается при условии прохождения полной регистрации </li>
            </ul>
            <CustomButton
                route={ROUTES_NAMES.FIRST_PAGE}
                text="Далее"
                onClickHandler={() => console.log(obj)}
            />

        </div>
    )
}

export default SecondConfirmPage