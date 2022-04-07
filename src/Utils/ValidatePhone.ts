
const ValidatePhone = (pnoheNumber: string) => {
    const regEx = /[^\d]/g;
    return pnoheNumber.replace(regEx, '').length === 11
}

export default ValidatePhone