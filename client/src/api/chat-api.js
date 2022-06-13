// Массив подписчиков
let subscribers = [];

let ws;

// Установка канала
const createChannel = () => {
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    // Подписка на закрытие канала
    ws.onclose = () => {
        console.log('CLOSE WS');
        setTimeout(createChannel, 3000);
    };
}

//
const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data);
    // subscribers.forEach(s => );
}

export const chatApi = {
    // Подписка на события
    subscribe(callback) {
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(s => s !== callback);
        }
    },

    unsubscribe(callback) {
        subscribers = subscribers.filter(s => s !== callback);
    }
}