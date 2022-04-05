import React, { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import "./CustomButton.scss"


interface CustomButtonProps {
    route: string;
    text: string
    onClickHandler?: () => void
}



const CustomButton: FC<CustomButtonProps> = (props) => {
    const { route, text, onClickHandler } = props;

    return (
        <div className="wrapper">
            <Link onClick={onClickHandler} to={route} >
                <p> {text} </p>
            </Link>
        </div>
    );
};

export default CustomButton;