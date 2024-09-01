# Приложение для определения headless версии браузера на основе Chromium engine.

## Cерверная часть
### Серверная часть написана на NodeJS + ExpressJS и включает в себя следующие методы для обнаружения headless версии браузера 
 * Определение через UserAgent
 * Обнаружение через webDriver
 * Обнаружение через Chrome DevTools Protocol
 * Проверка на количество установленных плагинов
 * Проверка на разрешение отправки уведомлений браузеру
 * Проверка RTT

>[!NOTE]
> Для запуска сервера необходимо установить интерпретатор [Nodejs](https://nodejs.org/en/download/package-manager)

> [!WARNING]
> При первом запуске необходимо установить зависимости

Команда для установки зависимостей:

    npm i

Запуск сервера командой:

    node server

> [!NOTE]
> После запуска сервер доступен по адресу http://localhost:3000


## Клиентская часть
### Для тестирования был написан простой скрипт на puppeter работающий в headless режиме

>[!NOTE]
> Для запуска тестирования необходимо установить интерпретатор [Nodejs](https://nodejs.org/en/download/package-manager)


Запуск через команду:

    node headless
