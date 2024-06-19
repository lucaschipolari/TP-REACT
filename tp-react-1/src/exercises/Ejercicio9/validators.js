export const validateMascota = ($field) => {
    if (!($field.value.trim().length > 0)) {
        $field.classList.add('is-invalid');
        return false;
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    if (!regex.test($field.value)) {
        $field.classList.add('is-invalid');
        return false;
    }

    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
};

export const validateNombre = ($field) => {
    if (!($field.value.trim().length > 0)) {
        $field.classList.add('is-invalid');
        return false;
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    if (!regex.test($field.value)) {
        $field.classList.add('is-invalid');
        return false;
    }

    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
};

export const validateFecha = ($field) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Formato de fecha yyyy-mm-dd
    if (!regex.test($field.value)) {
        $field.classList.add('is-invalid');
        return false;
    }

    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
};

export const validateHora = ($field) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Formato de hora hh:mm
    if (!regex.test($field.value)) {
        $field.classList.add('is-invalid');
        return false;
    }

    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
};

export const validateSintomas = ($field) => {
    if (!($field.value.trim().length > 0)) {
        $field.classList.add('is-invalid');
        return false;
    }

    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
};