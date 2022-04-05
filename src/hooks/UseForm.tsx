import { ChangeEvent, useCallback, useState } from 'react';

export const UseFormField = (initialValue: string = '') => {
    const [obj, setObj] = useState({
        language: "russian",
        phone: '',
        inn: '',
    });
    const handleChange = useCallback((prop: string, e: ChangeEvent<HTMLInputElement>) => setObj({ ...obj, ...{ [prop]: e.target.value } }), [obj]);
    return { obj, handleChange, setObj };
};