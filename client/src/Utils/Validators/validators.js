export const required = value => {
    if (value) return undefined;
    else return 'Это обязательное поле';
}

export const maxLength = maxLength => value => {
    if (value && value.length > maxLength) return `Максимальная длина ${maxLength} символов!`;
    return undefined;
}