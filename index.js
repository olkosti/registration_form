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
  // Проверяем валидность имени
    if (!nameInput.validity.valid) {
    // Меняем стиль рамки инпута
    // nameInput.style.border = "1px solid red";
    nameInput.classList.add('error');
    // Отображаем сообщение об ошибке
    nameError.textContent = nameInput.validationMessage;
    }

    // Проверяем валидность email
    const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let validEmail = regexpEmail.test(emailInput.value);

    if (!validEmail) {
        // Меняем стиль рамки инпута
        emailInput.classList.add('error');
        // Отображаем сообщение об ошибке
        emailError.textContent = emailInput.validationMessage;
        }

    // Проверяем валидность age
    if (!ageInput.validity.valid) {
        // Меняем стиль рамки инпута
        ageInput.classList.add('error');
        // Отображаем сообщение об ошибке
        ageError.textContent = ageInput.validationMessage;
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
    } else { 
        genderError.textContent = '';
    } 

    // Проверяем валидность password
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // Validate password
    let validPassword = passwordRegex.test(passwordInput.value);

    if (validPassword) {
      passwordError.textContent = '';
    } else {
      passwordInput.classList.add('error');
      passwordError.textContent = 'Пароль должен содержать не менее 8 символов и включать как минумум одну цифру, одну прописную букву строчную букву, а также специальный символ.';
    }
  
    //Проверяем repassword 
    if (passwordInput.value !== rePasswordInput.value) {
    // Меняем стиль рамки инпута
      rePasswordInput.classList.add('error');
    // Отображаем сообщение об ошибке
      rePasswordError.textContent = 'Пароли не совпадают';
    }

    if (!assentInput.checked) {
      assentError.textContent = "Необходимо дать согласие на обработку персональных данных.";
    }
};


// Обрабатываем событие отправки формы
form.addEventListener('submit', function(event) {
  // Отменяем действие по умолчанию
    event.preventDefault();

    const isFormValid = validateField();

    if (isFormValid) {
      // Выводим значения полей формы в консоль
      console.log(nameInput.value);
    }
}); 
