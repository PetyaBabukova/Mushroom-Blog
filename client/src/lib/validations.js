// Validate name
export const validateName = (name) => {
    return name.length >= 4;
};

// Validate email
export const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return email.length >= 10 && emailRegex.test(email);
};

// Validate password
export const validatePassword = (password) => {
    return password.length >= 6;
};

// Validate repeat password
export const validateRepeatPassword = (password, repeatPassword) => {
    return password === repeatPassword;
};

