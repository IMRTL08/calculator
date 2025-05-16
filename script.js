const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;

    // Add to history
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyList.prepend(historyItem);
  } catch (err) {
    display.value = 'Error';
  }
}
