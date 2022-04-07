
const ValidateIIN = (iin: string) => {
    let key1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let key2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
    let a = [];
    let controll = 0;
    for (let i = 0; i < 12; i++) {
        a[i] = parseInt(iin.substring(i, i + 1));
        if (i < 11) controll += a[i] * key1[i];
    }
    controll = controll % 11;
    if (controll === 10) {
        controll = 0;
        for (let i = 0; i < 11; i++)
            controll += a[i] * key2[i];
        controll = controll % 11;
    }
    if (controll !== a[11]) return false;
    return true;
}

export default ValidateIIN