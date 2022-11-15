const numerator = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
  };

let counterValue = 0;
updateValue(counterValue);

numerator.decrement.addEventListener('click', () => {
    counterValue -= 1;
    updateValue(counterValue);
});

numerator.increment.addEventListener('click', () => {
    counterValue += 1;
    updateValue(counterValue);
});

function updateValue(value) {
    numerator.value.textContent = value;
}