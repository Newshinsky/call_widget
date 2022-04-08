import { ChangeEvent, useCallback, useState } from 'react';

export type objType = {
    phone: string,
    isPhoneCorrect: boolean,
    iin: string,
    isIinCorrect: boolean
    formValid: boolean
}

export const UseFormField = () => {

    const [obj, setObj] = useState<objType>({
        phone: "",
        isPhoneCorrect: true,
        iin: "",
        isIinCorrect: true,
        formValid: false,
    });

    const handleChange = useCallback((prop: string, e: ChangeEvent<HTMLInputElement>) =>

        setObj({ ...obj, formValid: false, ...{ [prop]: e.target.value } })
        , [obj]);

    return { obj, handleChange, setObj };
};