function encryptAndSaveExpectedValues(pageIndex, expectedValues) {
    // Генерация случайного ключа для шифра и сохранение его как 'EnigmaKey'
    if (!localStorage.getItem('EnigmaKey')) {
        var enigmaKey = Math.floor(Math.random() * 91) + 10; // Генерирует ключ в диапазоне от 10 до 100
        localStorage.setItem('EnigmaKey', enigmaKey);
    }

    const keyB = parseInt(localStorage.getItem('EnigmaKey'), 10);

    const encryptedValues = expectedValues.map(value => {
        // Простое добавление ключа к значению
        const encrypted = value + keyB;
        return encrypted;
    });
    localStorage.setItem('ExpectedValuePage' + pageIndex, JSON.stringify(encryptedValues));
}

// Остальной код остается без изменений

document.addEventListener('DOMContentLoaded', function() {
    var encryptButton = document.getElementById('To');
    if (encryptButton) {
        encryptButton.addEventListener('click', function() {
            encryptAndSaveExpectedValues(1, [6, 10, 49, 62.5, 242]); // Для страницы 1
            encryptAndSaveExpectedValues(2, [400, 6, 5, 70, 500]); // Для страницы 2
            encryptAndSaveExpectedValues(3, [2, 24, 136, 12, 96]);
            encryptAndSaveExpectedValues(4, [57, 128, 50, 56, 5]);
            encryptAndSaveExpectedValues(5, [1.4, 6.8, 6.95, 7, 1.6, 4.3, 4.85, 7, 0.15, 0.13, 0.15, 0.16, 602, 1319, 1319, 1237, 455, 627, 580, 516]);
            encryptAndSaveExpectedValues(6, [0.81, 0.06, 0.85, 0.18, 0.65]);
            encryptAndSaveExpectedValues(7, [6, 20, 36, 6, 3]);
            encryptAndSaveExpectedValues(8, [32, 60, 14, 30, 20]);
            encryptAndSaveExpectedValues(9, [5, 5, 5, 18, 18]);
            encryptAndSaveExpectedValues(10, [3, 315, 8.55, 66, 52]);
            encryptAndSaveExpectedValues(11, [1, 22, 17, 15, 29]);
        });
    } else {
        console.error('Кнопка для шифрования не найдена');
    }
});
