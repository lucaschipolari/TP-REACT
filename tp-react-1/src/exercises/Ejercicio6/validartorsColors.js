//quiero validar colores que ingrese el usuario y poner el input invalido o valido con boostrap
export const validateColor = ($field) => {
    const value = $field.value;

    if (!value || value.trim() === '' || value.length < 3 || value.length > 50) {
        $field.classList.add('is-invalid');
        return false;
    }

    $field.classList.remove('is-invalid');
    return true;
};