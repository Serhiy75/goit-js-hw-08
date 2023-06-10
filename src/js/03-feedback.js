import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

function saveStateToLocalStorage() {
  const state = {};
  for (const element of form.elements) {
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      state[element.name] = element.value;
    }
  }
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function restoreStateFromLocalStorage() {
  const state = JSON.parse(localStorage.getItem(storageKey));
  if (state) {
    for (const element of form.elements) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = state[element.name] || "";
      }
    }
  }
}

function clearStateFromLocalStorage() {
  localStorage.removeItem(storageKey);
}

function handleSubmit(event) {
  event.preventDefault();

  const state = {};
  for (const element of form.elements) {
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      state[element.name] = element.value;
    }
  }

  console.log(state);

  clearStateFromLocalStorage();
  form.reset();
}

const throttledSaveStateToLocalStorage = throttle(saveStateToLocalStorage, 500);
form.addEventListener("input", throttledSaveStateToLocalStorage);
form.addEventListener("submit", handleSubmit);

restoreStateFromLocalStorage();