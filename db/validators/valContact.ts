export const nameFormat = (name: string): boolean => {
    const re = /^[A-Za-z ]{2,50}$/;
    return re.test(name);
}

export const phoneFormat = (phone: string): boolean => {
    const re = /^\+[0-9]{6,15}$/;
    return re.test(phone);
}

export const countryFormat = (country: string): boolean => {
    const re = /^[A-Za-z ]{2,50}$/;
    return re.test(country);
}