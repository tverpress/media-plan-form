/**
 * mock-server.js
 * Простой скрипт для эмуляции работы Google Apps Script при локальном тестировании
 * 
 * Инструкция по использованию:
 * 1. Установите Node.js
 * 2. Установите зависимости: npm install express cors body-parser
 * 3. Запустите сервер: node mock-server.js
 * 4. Измените scriptURL в index.html на: 'http://localhost:3000/submit'
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Разрешаем CORS для всех источников
app.use(cors());

// Разбор данных форм
app.use(bodyParser.urlencoded({ extended: true }));

// Обработчик POST-запросов для эмуляции Google Apps Script
app.post('/submit', (req, res) => {
  // Логируем полученные данные формы
  console.log('Получены данные формы:');
  console.log(req.body);
  
  // Имитация задержки сервера (1 секунда)
  setTimeout(() => {
    // Имитация успешного ответа от сервера
    res.status(200).send('Успешно получено');
  }, 1000);
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Mock-сервер запущен на http://localhost:${PORT}`);
  console.log('Для тестирования формы измените scriptURL в index.html на: http://localhost:3000/submit');
}); 