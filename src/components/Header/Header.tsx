import  { FC } from 'react'

import './Header.scss'

interface HeaderProps {
    text: string
}

const Header: FC<HeaderProps> = (props) => {
    const { text } = props;
    return (
        <h1 className="pageHeader">{text}</h1>
    )
}

export default Header