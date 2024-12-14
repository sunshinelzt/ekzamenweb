// Основна логіка для пошуку максимального числа
document.getElementById('findMaxButton').addEventListener('click', () => {
    const inputField = document.getElementById('input');
    const resultSpan = document.querySelector('#result span');

    // Отримання чисел з текстового поля
    const numbers = inputField.value
        .split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num)); // Фільтруємо тільки числа

    // Перевірка на наявність чисел
    if (numbers.length === 0) {
        resultSpan.textContent = 'Введіть хоча б одне валідне число!';
        resultSpan.style.color = 'red';
        return;
    }

    // Знаходження максимального числа
    const maxNumber = Math.max(...numbers);
    resultSpan.textContent = `Максимальне число: ${maxNumber}`;
    resultSpan.style.color = 'green';
});
