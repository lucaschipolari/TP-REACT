export const validateTask = ($field)=>{
    if ($field.value === null){
        $field.classList.add('is-invalid');
        return false
    };
    if ($field.value === undefined) {
        $field.classList.add('is-invalid');
        return false
    };
    if ($field.value.trim() === '') {
        $field.classList.add('is-invalid');
        return false
    };
    if ($field.value < 3 || $field.value >50)  {
        $field.classList.add('is-invalid');
        return false
    };
    $field.classList.remove('is-invalid');
    return true;
};