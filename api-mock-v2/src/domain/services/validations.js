const emailValidation = (email) => {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(format);
};

module.exports.emailValidation = emailValidation;