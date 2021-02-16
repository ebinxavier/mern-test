export const checkIsEmpty = (input = "") => {
    return input
};
export const isEmail = (input = "") => {
    const shouldContain = ["@", ".com"];
    const slicedInput = input.slice();

    for (let i = 0; i < shouldContain.length; i++) {
        if (!slicedInput.includes(shouldContain[i])) return false;
    }
    const addressSignIndex = slicedInput.indexOf("@");
    if (slicedInput[0] === "@" || slicedInput[addressSignIndex + 1] === ".")
        return false;
    return true;
};

export const validateLengthPassword = (input = "", min = 8,) => {
    if (input === null) return;
    if (input.length >= min && input.length) return true;
    return false;
};
export const validatePasswords = (input = "", input2 = "") => {
    if (input === input2) return true;
    if (input !== input2) return;
    return false
}
