(() => {
  let activeHole = 1; // Лунка с текущим кротом
  let score = 0;      // Количество попаданий
  let misses = 0;     // Количество промахов

  // Получаем элемент лунки по индексу
  const getHole = index => document.getElementById(`hole${index}`);
  
  // Деактивация текущей лунки (убираем крота)
  const deactivateHole = index => getHole(index).className = 'hole';
  
  // Активация новой лунки (появление крота)
  const activateHole = index => getHole(index).className = 'hole hole_has-mole';

  // Главная функция для появления крота в случайной лунке
  const next = () => {
    setTimeout(() => {
      deactivateHole(activeHole);          // Убираем крота из текущей лунки
      activeHole = Math.floor(1 + Math.random() * 9); // Выбираем случайную лунку от 1 до 9
      activateHole(activeHole);             // Показываем крота в новой лунке
      next();                               // Повторяем процесс
    }, 800);
  };

  // Обработчик кликов по лункам
  const holeClickHandler = event => {
    // Если клик по лунке с кротом
    if (event.target.classList.contains('hole_has-mole')) {
      score++; // Увеличиваем счетчик попаданий
      if (score >= 10) {
        alert("Победа! Вы убили 10 кротов!");
        resetGame();
      }
    } else {
      misses++; // Увеличиваем счетчик промахов
      if (misses >= 5) {
        alert("Поражение! Вы промахнулись 5 раз.");
        resetGame();
      }
    }
  };

  // Функция для сброса игры
  const resetGame = () => {
    score = 0;
    misses = 0;
  };

  // Назначаем обработчик событий для каждой лунки
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = holeClickHandler;
  }

  // Запускаем функцию появления кротов
  next();
})();
