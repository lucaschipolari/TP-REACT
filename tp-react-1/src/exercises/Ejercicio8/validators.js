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
  export const validateDni = ($field) => {
    const regex = /^\d{8,10}$/;
    if (!regex.test($field.value)) {
      $field.classList.add('is-invalid');
      return false;
    }
  
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
  };
  
export const validateEmail = ($field) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test($field.value)) {
      $field.classList.add('is-invalid');
      return false;
    }
  
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
  };
  
export const validateApellido = ($field) => {
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
  