import throttle from 'lodash.throttle';

const form = document.querySelector('feedback-form');
const storageKey = 'feedback-form-state';
const throttledSaveStateToLocalStorage = throttle(saveStateToLocalStorage, 500);
form.addEventListener('input', throttledSaveStateToLocalStorage);
form.addEventListener('submit', handlSubmit);

function saveStateToLocalStorage() {
    const state = {};
    for (const element of form.elements) {
        if (element.tageName === 'INPUT' || element.tageName === 'TEXTAREA') {
            state[element.name] = element.value;
        };
    };
    localStorage.setItem(storageKey, JSON.stringify(state));

};

function clearStateFromLocalStorage() {
    localStorage.removeItem(storageKey);
};

function handlSubmit(event) {
    event.preventDefault();
    const state = {};
    for (const element of form.elements) {
        if (element.tageName === 'INPUT' || element.tageName === 'TEXTAREA') {
            state[element.name] = element.value;
        };
    };
    clearStateFromLocalStorage();
    form.reset();
};

