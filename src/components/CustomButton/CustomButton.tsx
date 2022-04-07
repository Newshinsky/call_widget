import { FC } from 'react';
import './CustomButton.scss';

interface CustomButtonProps {
    text: string
    onClick: () => void
}

const CustomButton: FC<CustomButtonProps> = (props) => {
    const { text, onClick } = props;

    return (
        <div className="customButtonWrapper">
            <a href="##" onClick={onClick}>
                <p> {text} </p>
            </a>
        </div>
    );
};

export default CustomButton;