import { FC, memo } from 'react'
import './PurposeAppeal.scss'

type PropsType = {
    purpose: string
    selectItem: () => void
    activeItemStyle: string
    selectedText: string
}

const PurposeAppeal: FC<PropsType> = memo((props) => {
    let { purpose, selectItem, activeItemStyle, selectedText } = props

    return (
        <div className={`purposeWrapper ${activeItemStyle} `} onClick={selectItem}>
            <div className="purposeTitle">
                <h1> {purpose} </h1>
                <p> Контакт-центр </p>
            </div>
            <p> {selectedText} </p>
        </div>
    )
})

export default PurposeAppeal