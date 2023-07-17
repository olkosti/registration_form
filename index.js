
// const professionInput = form.elements.profession;
// const passwordInput = form.elements.password;
// const rePasswordInput = form.elements.repassword;
// const assentInput = form.elements.assent;

// const nameError = document.getElementById('name-error');



// Получаем элементы формы
const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput =  document.getElementById('age');
const genderInput = document.getElementsByName('gender');

// Получаем элементы сообщений об ошибках
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const ageError = document.getElementById('age-error');
const genderError = document.getElementById('gender-error');

// Обрабатываем событие отправки формы
form.addEventListener('submit', function(event) {
  // Отменяем действие по умолчанию
    event.preventDefault();

  // Проверяем валидность имени
    if (!nameInput.validity.valid) {
    // Меняем стиль рамки инпута
    nameInput.style.border = "1px solid red";
    // Отображаем сообщение об ошибке
    nameError.textContent = nameInput.validationMessage;
    }

     // Проверяем валидность email
    if (!emailInput.validity.valid) {
        // Меняем стиль рамки инпута
        emailInput.style.border = "1px solid red";
        // Отображаем сообщение об ошибке
        emailError.textContent = emailInput.validationMessage;
        }

          // Проверяем валидность age
    if (!ageInput.validity.valid) {
        // Меняем стиль рамки инпута
        ageInput.style.border = "1px solid red";
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

    
});