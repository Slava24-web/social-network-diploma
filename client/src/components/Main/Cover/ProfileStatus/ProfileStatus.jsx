import React, {useEffect, useState} from "react";
import style from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    // useState возвращает массив
    // Первым аргументом идёт начальное значение
    // Вторым аргументом идёт функция, которая устанавливает значение в state
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // Запускаем какой-то эффект (функцию)
    // Выполнится после рендера
    // Запускать useEffect тогда, когда был изменён status (указываем вторым аргументом)
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        // Меняем значение editMode
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        // Меняем значение editMode
        setEditMode(false);
        props.updateStatus(status);
    }

    const deactivateEditModeWithEnter = (e) => {
        if (e.key === 'Enter') {
            setEditMode(false);
            props.updateStatus(status);
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.status}>
            {!editMode &&
            <div className={style.output}>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div className={style.output}>
                <input onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       autoFocus={true}
                       value={status}
                       onKeyPress={deactivateEditModeWithEnter}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatus;