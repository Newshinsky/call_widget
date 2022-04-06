import React, { FC, memo } from 'react'
import "./PurposeAppeal.scss"

type PropsType = {
    purpose: string
}

const PurposeAppeal: FC<PropsType> = memo((props) => {
    let { purpose } = props

    return (
        <div className="purpose__wrapper">
            <div className="purpose__title">
                <h1> {purpose} </h1>
                <p> Контакт-центр </p>
            </div>
            <a href="##"> Выбрать </a>
        </div>
    )
})

export default PurposeAppeal