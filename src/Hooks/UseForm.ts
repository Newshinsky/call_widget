import { ChangeEvent, useCallback, useState } from 'react';

export type formFieldDataType = {
    phone: string,
    iin: string,
    isPhoneCorrect: boolean,
    isIinCorrect: boolean
    formValid: boolean
}

export const UseFormField = () => {

    const [formFieldData, setFormFieldData] = useState<formFieldDataType>({
        phone: "",
        iin: "",
        isPhoneCorrect: true,
        isIinCorrect: true,
        formValid: false,
    });

    const handleChange = useCallback((prop: string, e: ChangeEvent<HTMLInputElement>) =>

        setFormFieldData({ ...formFieldData, formValid: false, ...{ [prop]: e.target.value } })
        , [formFieldData]);

    return { formFieldData: formFieldData, handleChange, setFormFieldData: setFormFieldData };
};