//validar el formulario de checkout en el modal de checkout
export const validate = (value) => {
    let errores = {};
    // Validación firstName y lastName, phone, email, address
    if (!value.firstName) {
        errores.firstName = "Required";
    } else if (value.firstName.length < 3) {
        errores.firstName = "Must be at least 3 characters";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.firstName)) {
        errores.firstName = "Invalid name";
    }
    //? Validación lastName
    if (!value.lastName) {
        errores.lastName = "Required";
    } else if (value.lastName.length < 3) {
        errores.lastName = "Must be at least 3 characters";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.lastName)) {
        errores.lastName = "Invalid last name";
    }
    //?validación email
    if (!value.email) {
        errores.email = "Required";
    } else if (
        !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value.email)
    ) {
        errores.email = "Invalid email";
    }
    //?validación phone
    if (!value.phone) {
        errores.phone = "Required";
    }
    if (
        //?expression regular para validar el número de teléfono de argentina 10 dígitos sin guiones y sin espacios en blanco y sin caracteres especiales
        !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
            value.phone
        )
    ) {
        errores.phone = "Invalid phone";
    }
    //?validación address
    if (!value.address) {
        errores.address = "Required";
    }
    return errores;
};
