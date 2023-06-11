import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

function saveStateToLocalStorage() {
    try {
        const state = {};
        for (const element of form.elements) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                state[element.name] = element.value;
            }
        }
        localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
        console.error('Error with saveState function', error);
    }
}

function restoreStateFromLocalStorage() {
  try {
    const state = JSON.parse(localStorage.getItem(storageKey));
        if (state) {
            for (const element of form.elements) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.value = state[element.name] || "";
                }
            }
        }
    } catch (error) {
        console.error('Error with restoreState', error);
    };
}

function clearStateFromLocalStorage() {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error('Error with clearState', error);
  }
}

function handleSubmit(event) {
  event.preventDefault();

    try {
        const state = {};
        for (const element of form.elements) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                state[element.name] = element.value;
            }
        }

        console.log(state);

        clearStateFromLocalStorage();
        form.reset();
    } catch (error) {
        console.error('Error with handleSubmit', error);
    }
}

const throttledSaveStateToLocalStorage = throttle(saveStateToLocalStorage, 500);
form.addEventListener("input", throttledSaveStateToLocalStorage);
form.addEventListener("submit", handleSubmit);

restoreStateFromLocalStorage();