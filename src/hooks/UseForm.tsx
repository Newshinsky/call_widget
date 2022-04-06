import { ChangeEvent, useCallback, useState } from 'react';

export type objType = {
    language: string,
    phone: string,
    inn: string,
}

export const UseFormField = (initialValue: string = '') => {

    const [obj, setObj] = useState<objType>({
        language: "russian",
        phone: '',
        inn: '',
    });
    const handleChange = useCallback((prop: string, e: ChangeEvent<HTMLInputElement>) =>
        setObj({ ...obj, ...{ [prop]: e.target.value }, })
        , [obj]);

    return { obj, handleChange, setObj };
};