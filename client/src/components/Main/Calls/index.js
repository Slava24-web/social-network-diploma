import React, {useEffect, useRef, useState} from 'react';
import socket from "../../../api/calls-socket";
import {v4} from 'uuid';
import { useHistory } from 'react-router';
import {withRouter} from "react-router-dom";

const Calls = (props) => {
    const {history} = props;
    const [rooms, setRooms] = useState([]);
    const rootNode = useRef();

    useEffect(() => {
        socket.on('SHARE_ROOMS', ({rooms = []} = {}) => {
            if (rootNode.current) {
                setRooms(rooms);
            }
        });
    }, []);

    return (
        <div ref={rootNode}>
            <h2>Доступные комнаты</h2>
            <button onClick={() => {
                history.push(`/room/${v4()}`)
            }}>
                Создать комнату
            </button>

            <ul>
                {
                    rooms.map(roomId => (
                        <li key={roomId}>
                            {roomId}
                            <button onClick={() => {
                                history.push(`/room/${roomId}`)
                            }}>
                                Подключиться
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default withRouter(Calls);