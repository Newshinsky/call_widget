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
            <button onClick={onClick}>
                <p> {text} </p>
            </button>
        </div>
    );
};

export default CustomButton;