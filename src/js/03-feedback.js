import throttle from 'lodash.throttle';

const form = document.querySelector('feedback-form');
const emaileInput = form.querySelector('input[type="emaile"]');
const messageInput = form.querySelector('textarea');

form.addEventListener('input', _.throttle((evt) => {
    const formData = {
        email: emaileInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form', JSON.stringify(formData));
}, 500));

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedFormData) {
    emaileInput.value = savedFormData.email;
    messageInput.value = savedFormData.message;
};

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = {
        email: emaileInput.value,
        message: messageInput.value,
    };
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    emaileInput.value = '';
    messageInput.value = '';
});

// const form = document.querySelector('feedback-form');
// const storageKey = 'feedback-form-state';

// function saveStateToLocalStorage() {
//     const state = {};
//     for (const element of form.elements) {
//         if (element.tageName === 'INPUT' || element.tageName === 'TEXTAREA') {
//             state[element.name] = element.value;
//         };
//     };
//     localStorage.setItem(storageKey, JSON.stringify(state));

// };

// function clearStateFromLocalStorage() {
//     localStorage.removeItem(storageKey);
// };

// function handlSubmit(event) {
//     event.preventDefault();
//     const state = {};
//     for (const element of form.elements) {
//         if (element.tageName === 'INPUT' || element.tageName === 'TEXTAREA') {
//             state[element.name] = element.value;
//         };
//     };
//     clearStateFromLocalStorage();
//     form.reset();
// };

// form.addEventListener('input', throttle(saveStateToLocalStorage, 500));
// form.addEventListener('submit', handlSubmit);
