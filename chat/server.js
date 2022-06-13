const express = require('express');
const app = express();
// Указываем, что сервер будет работать через приложение на express - app
const server = require('http').Server(app);
// В сервер помещаем работу с socket.io (подключаем к серверу сокеты)
const ws = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Указываем, что запросы могут отправлять и принимать данные json
app.use(express.json());

/** Данные */
const rooms = new Map();

// Коллекция "chat", в котором есть название и массив сообщений

// request - всё, что присылает пользователь
// response - что возвращаем пользователю
app.get('/rooms/:id', (req, res) => {
    const { id: roomId } = req.params;
    const obj = rooms.has(roomId)
        ? {
            users: [...rooms.get(roomId).get('users').values()],
            messages: [...rooms.get(roomId).get('messages').values()],
        }
        : { users: [], messages: [] };
    // send() - отправить текст
    // json() - отправить json
    res.json(obj);
});

/** Создание комнаты */
app.post('/rooms', (req, res) => {
    const { roomId, userName } = req.body;
    console.log(roomId)
    if (!rooms.has(roomId)) {
        rooms.set(roomId, new Map([
                ['users', new Map()],
                ['messages', []],
            ]),
        );
    }
    res.send();
});

/** Обработка подключения к ws-сокету.
 * На каждое соединение создаётся свой socket
 */
ws.on('connection', socket => {
    console.log('User connected', socket.id);

    /** Подключение к комнате */
    // data - данные, которые передаёт клиент
    socket.on('room/join', ({roomId, userName}) => {
        // Подключение к комнате roomId
        socket.join(roomId);
        rooms.get(roomId)?.get('users').set(socket.id, userName);
        // Получаем имена всех пользователей в комнате
        const users = [...rooms.get(roomId).get('users').values()];
        // broadcast - всем в комнате roomId, кроме меня
        socket.to(roomId).broadcast.emit('room/set_users', users);
    });

    /** Отправка сообщений */
    socket.on('room/new_message', ({ roomId, userName, text }) => {
        const data = { userName, text };
        rooms.get(roomId).get('messages').push(data);
        socket.to(roomId).broadcast.emit('room/new_message', data);
    });

    /** Выход из комнаты */
    socket.on('disconnect', () => {
        rooms.forEach((value, roomId) => {
            if (value.get('users').delete(socket.id)) {
                const users = [...value.get('users').values()];
                socket.to(roomId).broadcast.emit('room/set_users', users);
            }
        });
    });
});

// Слушаем порт 8888
server.listen(8888, (error) => {
    if (error) {
        throw Error(error);
    }
    console.log("Chat server has been started on port 8888...");
});