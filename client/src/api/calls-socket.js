import {io} from 'socket.io-client';

const socket = io('http://localhost:3001', {
    'force new connection': true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ['websocket']
});

export default socket;