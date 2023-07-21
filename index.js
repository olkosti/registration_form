// Получаем элементы формы
const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput =  document.getElementById('age');
const genderInput = document.getElementsByName('gender');
const professionInput = document.getElementById('profession');
const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('repassword');
const assentInput = document.getElementById('assent');

// Получаем элементы сообщений об ошибках
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const ageError = document.getElementById('age-error');
const genderError = document.getElementById('gender-error');
const passwordError = document.getElementById('password-error');
const rePasswordError = document.getElementById('repassword-error');
const assentError = document.getElementById('assent-error');


function validateField() {
  let formsIsValid = true;

    // Проверяем валидность имени
    if (!nameInput.validity.valid) {
    nameInput.classList.add('error');
    nameError.textContent = nameInput.validationMessage;
    formsIsValid = false;
    }

    // Проверяем валидность email
    const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let validEmail = regexpEmail.test(emailInput.value);

    if (!validEmail) {       
        emailInput.classList.add('error');        
        emailError.textContent = emailInput.validationMessage;
        }

    // Проверяем валидность age
    if (!ageInput.validity.valid) {
        // Меняем стиль рамки инпута
        ageInput.classList.add('error');
        ageError.textContent = ageInput.validationMessage;
        formsIsValid = false;
        }

    // Проверяем валидность gender
    let isChecked = false;
    genderInput.forEach(function (radio) {
        if (radio.checked) {
            isChecked = true; }
    });

    // Отображаем сообщение об ошибке
    if (!isChecked) {
        genderError.textContent = "Выберете один из вариантов";
        formsIsValid = false;
    } 
    // else { 
    //     genderError.textContent = '';
    // } 

    // Проверяем валидность password
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    
    let validPassword = passwordRegex.test(passwordInput.value);

    if (validPassword) {
      passwordError.textContent = '';
    } else {
      passwordInput.classList.add('error');
      passwordError.textContent = 'Пароль должен содержать не менее 8 символов и включать как минумум одну цифру, одну прописную букву строчную букву, а также специальный символ.';
      formsIsValid = false;
    }
  
    //Проверяем repassword 
    if (passwordInput.value !== rePasswordInput.value) {    
      rePasswordInput.classList.add('error');
      rePasswordError.textContent = 'Пароли не совпадают';
      formsIsValid = false;
    }

    if (!assentInput.checked) {
      assentError.textContent = "Необходимо дать согласие на обработку персональных данных.";
      formsIsValid = false;
    }
    return formsIsValid;
};


// Обрабатываем событие отправки формы
form.addEventListener('submit', function(event) {
  // Отменяем действие по умолчанию
    event.preventDefault();

    const isFormValid = validateField();

    if (isFormValid) {
      // Выводим значения полей формы в консоль
      console.log(nameInput.value);
      console.log(emailInput.value);
      console.log(ageInput.value);
      console.log(genderInput.value);
      console.log(professionInput.value);
      console.log(passwordInput.value);
      console.log(rePasswordInput.value);
      console.log(assentInput.value);

      form.reset();
    }
}); 
