

export const validateName = (name) => {
    return name.length >= 4;
};

export const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return email.length >= 10 && emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};

export const validateRepeatPassword = (password, repeatPassword) => {
    return password === repeatPassword;
};
