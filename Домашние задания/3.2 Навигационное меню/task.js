// Находим все элементы с классом menu__link
const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        const parentItem = link.closest('.menu__item');
        const subMenu = parentItem.querySelector('.menu_sub');

        // Если подменю существует
        if (subMenu) {
            event.preventDefault(); // Запрещаем переход по ссылке

            // Проверяем, есть ли у подменю класс menu_active
            const isActive = subMenu.classList.contains('menu_active');

            // Закрываем все активные подменю на странице
            document.querySelectorAll('.menu_sub.menu_active').forEach(menu => {
                menu.classList.remove('menu_active');
            });

            // Если текущее подменю не было активным, открываем его
            if (!isActive) {
                subMenu.classList.add('menu_active');
            }
        }
    });
});
