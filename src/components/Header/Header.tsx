import React, { FC } from 'react'

import "./Header.scss"

interface HeaderProps {
    text: string
}

const Header: FC<HeaderProps> = (props) => {
    const { text } = props;
    return (
        <h1 className="header__h1">{text}</h1>
    )
}

export default Header