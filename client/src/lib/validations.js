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

// LoginEmail form validations
export const validateLoginEmail = (email) => {
    if (!email || email.length === 0) {
        return 'Email is required';
    }
};

// LoginPassword form validations
export const validateLoginPassword = (password) => {
    if (!password || password.length === 0) {
        return 'Password is required';
    }
};

const forbiddenWords = ["www", "http", "https", "post", "get", "put", ".js", "<", ">"];

export const validateProfileField = (field, isImageUrl = false) => {
    if (field.length < 4) {
        return 'Field must be at least 4 characters long';
    }

    if (!isImageUrl) {
        const containsForbidden = forbiddenWords.some(word => field.includes(word));
        if (containsForbidden) {
            return 'Field contains forbidden characters or words';
        }
    } else {
        // Special handling for imageUrl field
        const imageUrlForbiddenWords = forbiddenWords.filter(word => word !== "http" && word !== "https");
        const containsForbidden = imageUrlForbiddenWords.some(word => field.includes(word));
        if (containsForbidden) {
            return 'Field contains forbidden characters or words';
        }
    }

    return '';
};
