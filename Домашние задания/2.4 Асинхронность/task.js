class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // ID интервала
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы'); // Проверка на наличие обязательных аргументов
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время'); // Проверка на наличие звонка на это же время
        }

        this.alarmCollection.push({ time, callback, canCall: true }); // Добавление звонка
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time); // Удаление звонков по времени
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`; // Текущее время в формате HH:MM
    }

    start() {
        if (this.intervalId) return; // Проверка на существование интервала

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false; // Блокировка повторного вызова
                    alarm.callback(); // Вызов коллбека
                }
            });
        }, 1000); // Запуск интервала на каждую секунду
    }

    stop() {
        clearInterval(this.intervalId); // Остановка интервала
        this.intervalId = null; // Сброс ID интервала
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true); // Сброс всех звонков
    }

    clearAlarms() {
        this.stop(); // Остановка интервала
        this.alarmCollection = []; // Очистка коллекции звонков
    }
}

// Пример использования:
const alarm = new AlarmClock();
alarm.addClock("07:00", () => console.log("Пора вставать!"));
alarm.addClock("07:01", () => console.log("Точно пора вставать!"));
alarm.start();
