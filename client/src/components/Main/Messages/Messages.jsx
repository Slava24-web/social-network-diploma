import React, {useCallback, useEffect, useReducer, useRef, useState} from "react";
import style from './Messages.module.css';
import {Redirect} from "react-router-dom";
import io from 'socket.io-client';
import axios from 'axios';
import {v4} from "uuid";
import Dialog from "./Dialog/Dialog";

const socket = io('http://localhost:8888');

const getRoomData = (roomId) => {
    switch (roomId) {
        case 'Тестовый чат "Общий канал"':
            return [
                {id: 1, text: 'Коллеги, добрый день! Тестовое сообщение.', name: 'Aleksandr'},
                {id: 2, text: 'Всем привет! Проверка второго аккаунта', name: 'Slava', type: 'self'},
                {id: 3, text: 'Отлично. Работает', name: 'Aleksandr'},
                {id: 4, text: 'Проверка...', name: 'Aleksandr'},
                {id: 5, text: 'Работает', name: 'Slava', type: 'self'},
                {id: 6, text: 'Кто здесь?', name: 'Slava', type: 'self'},
                {id: 7, text: 'Ауууууу', name: 'Slava', type: 'self'},
                {id: 8, text: 'чат работает', name: 'Slava', type: 'self'},
                {id: 9, text: 'Ок', name: 'Sergey'},
                {id: 10, text: 'Тут тоже работает', name: 'Sergey'},
                {id: 11, text: 'Прокрутка тоже работает', name: 'Sergey'},
                {id: 12, text: 'Отл', name: 'Slava', type: 'self'},
                {id: 13, text: 'привет', name: 'user4'},
                {id: 14, text: 'Проверка отправки', name: 'Slava', type: 'self'},
            ]
        case 'Тестовый чат 2 "Поздравления"':
            return [
                {id: 1, text: 'Проверка второго канала', name: 'Slava', type: 'self'},
                {id: 2, text: 'Ок', name: 'Sergey'},
                {id: 3, text: 'Работает!', name: 'Slava', type: 'self'},
                {id: 3, text: 'Работает', name: 'Aleksandr'},
            ]
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'JOIN':
            return {
                ...state,
                roomId: action.payload.roomId,
                userName: action.payload.userName,
                joined: true,
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.messages
            }
        case 'NEW_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'SET_CURRENT_DIALOG':
            return {
                ...state,
                roomId: action.roomId,
                messages: getRoomData(action.roomId)
            }
        default:
            return state;
    }
}

const Messages = (props) => {
    const [messageValue, setMessageValue] = useState('');
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [roomName, setRoomName] = useState('');

    const [state, dispatch] = useReducer(reducer, {
        roomId: '',
        userName: 'Slava',
        joined: false,
        users: [],
        messages: [],
    });

    useEffect(() => {
        socket.on('room/set_users', (users) => {
            dispatch({type: 'SET_USERS', payload: users});
        });
        socket.on('room/new_message', (message) => {
            dispatch({type: 'NEW_MESSAGE', payload: message});
        })
    }, []);

    /** Вход в комнату */
    const onLogin = async (e) => {
        e.preventDefault();

        console.log('Создание комнаты')

        /** Создание комнаты */
        const data = {roomId: roomName, userName: 'Slava'};
        await axios.post('http://localhost:8888/rooms', data);

        /** Подключение к комнате */
        dispatch({type: 'JOIN', payload: data});
        socket.emit('room/join', data);
        const response = await axios.get(`http://localhost:8888/rooms/${data.roomId}`);
        // if (response) {
        dispatch({type: 'SET_USERS', payload: response.data});
        setRoomName(null);
        setOpenCreateDialog(false);
        // }
    }

    /** Отправка сообщения */
    const onSendMessage = (e) => {
        e.preventDefault();
        socket.emit('room/new_message', {userName: 'Slava', roomId: state.roomId, text: messageValue});
        dispatch({type: 'NEW_MESSAGE', payload: {userName: 'Slava', text: messageValue}});
        setMessageValue('');
    }

    const changeHandler = (e) => {
        setMessageValue(e.target.value);
    }

    const onClickDialog = (roomId) => () => {
        dispatch({type: 'SET_CURRENT_DIALOG', roomId});
    }

    if (!props.isAuthenticated) return <Redirect to='/login'/>

    return (
        <div id={style.messages}>
            <div className={style.wrapper}>
                <div className={style.dialogs}>
                    <div className={style.title}>
                        <span>Диалоги</span>
                        <div className={style.add} onClick={() => setOpenCreateDialog(true)}>
                            <span className={style.plus}>+</span>
                        </div>
                    </div>
                    {
                        <>
                            <Dialog
                                key={v4()}
                                id={v4()}
                                path='https://w7.pngwing.com/pngs/914/608/png-transparent-message-icon-emoticon-area-text-smiley-messages-2-text-smiley-emoticon.png'
                                name={'Тестовый чат "Общий канал"'}
                                time={Date.now()}
                                onClick={onClickDialog('Тестовый чат "Общий канал"')}
                                active={state.roomId === 'Тестовый чат "Общий канал"'}
                            />
                            <Dialog
                                key={v4()} id={v4()}
                                path='https://w-dog.ru/wallpapers/1/35/292822665093695/salyut-fejerverk-zalp-prazdnik.jpg'
                                name={'Тестовый чат 2 "Поздравления"'}
                                time={Date.now()}
                                onClick={onClickDialog('Тестовый чат 2 "Поздравления"')}
                                active={state.roomId === 'Тестовый чат 2 "Поздравления"'}
                            />
                        </>
                    }
                </div>
                <div className={style.messages}>
                    <div className={style.messagesList}>
                        {
                            state.messages.map(message => (
                                <div className={`${message.type === 'self' ? style.self_message : style.message}`}>
                                    <p className={style.text}>{message.text}</p>
                                    <span className={style.name}>{message.name}</span>
                                </div>
                            ))
                        }
                        {/*<div className={style.message}>*/}
                        {/*    <p className={style.text}>Коллеги, добрый день! Тестовое сообщение.</p>*/}
                        {/*    <span className={style.name}>Aleksandr</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.self_message}>*/}
                        {/*    <p className={style.text}>Всем привет! Проверка второго аккаунта</p>*/}
                        {/*    <span className={style.name}>Slava</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.message}>*/}
                        {/*    <p className={style.text}>Отлично. Работает</p>*/}
                        {/*    <span className={style.name}>Aleksandr</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.message}>*/}
                        {/*    <p className={style.text}>Проверка...</p>*/}
                        {/*    <span className={style.name}>Aleksandr</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.self_message}>*/}
                        {/*    <p className={style.text}>Работает</p>*/}
                        {/*    <span className={style.name}>Slava</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.self_message}>*/}
                        {/*    <p className={style.text}>Кто здесь?</p>*/}
                        {/*    <span className={style.name}>Slava</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.self_message}>*/}
                        {/*    <p className={style.text}>Ауууууу</p>*/}
                        {/*    <span className={style.name}>Slava</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.self_message}>*/}
                        {/*    <p className={style.text}>чат работает</p>*/}
                        {/*    <span className={style.name}>Slava</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.message}>*/}
                        {/*    <p className={style.text}>Ок</p>*/}
                        {/*    <span className={style.name}>Sergey</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.message}>*/}
                        {/*    <p className={style.text}>Тут тоже работает</p>*/}
                        {/*    <span className={style.name}>Sergey</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.message}>*/}
                        {/*    <p className={style.text}>Прокрутка тоже работает</p>*/}
                        {/*    <span className={style.name}>Sergey</span>*/}
                        {/*</div>*/}
                        {/*<div className={style.self_message}>*/}
                        {/*    <p className={style.text}>Отл</p>*/}
                        {/*    <span className={style.name}>Slava</span>*/}
                        {/*</div>*/}
                    </div>
                    <form className={style.input} onSubmit={onSendMessage}>
                        <input
                            className={style.textarea}
                            name="messageBody"
                            placeholder="Ваше сообщение"
                            value={messageValue}
                            onChange={changeHandler}
                        />
                        <button className={style.send}>Отправить</button>
                    </form>
                </div>
            </div>

            {
                openCreateDialog && (
                    <div className={style.create_dialog} onClick={(e) => {
                        setOpenCreateDialog(false);
                    }}>
                        <article className={style.create_content} onClick={e => e.stopPropagation()}>
                            <p>Создать чат</p>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Название чата"
                                    value={roomName}
                                    onChange={(e) => setRoomName(e.target.value)}
                                />
                                <button onClick={onLogin}>Создать</button>
                            </form>
                        </article>
                    </div>
                )
            }
        </div>
    )
}

export default Messages;