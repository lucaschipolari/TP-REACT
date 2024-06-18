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

  export const validateDescripcion = ($field) => {
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
