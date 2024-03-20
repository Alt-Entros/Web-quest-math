function decryptValue(encryptedValue, key) {
    // Дешифровка значения
    return encryptedValue - key;
}

function checkAndDisplayResult(inputId, resultId, pageNumber, taskNumber) {
    // Составление ключа для доступа к ожидаемым значениям в localStorage
    var expectedValuesKey = 'ExpectedValuePage' + pageNumber;

    // Извлечение массива ожидаемых значений и ключа дешифровки из localStorage
    var expectedValues = JSON.parse(localStorage.getItem(expectedValuesKey));
    var enigmaKey = parseInt(localStorage.getItem('EnigmaKey'), 10);

    // Проверка наличия массива expectedValues и корректности taskNumber
    if (!Array.isArray(expectedValues) || taskNumber < 0 || taskNumber >= expectedValues.length) {
        console.error('Неверный номер задания или expectedValues не найдены в localStorage для страницы ' + pageNumber + '.');
        return false;
    }

    // Получение и дешифровка ожидаемого значения для данного номера задания
    var expectedValue = decryptValue(expectedValues[taskNumber], enigmaKey);

    // Сравнение введенного значения с ожидаемым
    var inputValue = parseFloat(document.getElementById(inputId).value);
    var isCorrect = inputValue === expectedValue;

    // Вывод результата
    var result = document.getElementById(resultId);
    result.textContent = isCorrect ? '1' : '0';

    return isCorrect;
}



function checkAndSaveResults(pageNumber, questions) {
    const results = questions.map(question => {
        const { inputId, resultId, expectedValue } = question;
        return checkAndDisplayResult(inputId, resultId, expectedValue);
    });

    // Сохраняем результаты для данной страницы
    localStorage.setItem('resultsPage' + pageNumber, JSON.stringify(results));
}