
const ValidatePhone = (pnohe: string) => {
    const regEx = /[^\d]/g;

    return pnohe.replace(regEx, '').length

}

export default ValidatePhone