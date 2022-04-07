import { FC } from 'react'
import './BackArrow.scss'

type PropsType = {
    onClick: () => void
}
const BackArrow: FC<PropsType> = (props) => {
    const { onClick } = props
    return (
        <div onClick={onClick} className="arrow arrowLeft"></div>
    )
}

export default BackArrow