// Находим все элементы с классом 'rotator'
const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    // Получаем все текстовые элементы внутри ротатора
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = 0;

    setInterval(() => {
        // Убираем класс 'rotator__case_active' у текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');

        // Переходим к следующему элементу (циклично)
        currentIndex = (currentIndex + 1) % cases.length;

        // Добавляем класс 'rotator__case_active' следующему элементу
        cases[currentIndex].classList.add('rotator__case_active');
    }, 1000); // Интервал переключения — 1 секунда
});
