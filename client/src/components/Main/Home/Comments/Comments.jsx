import React from 'react';
import style from './Comments.module.css';

const Comments = () => {
    return (
        <div className="comments sectionBlock">
            <p className="sectionBlock__title">Последние комментарии</p>
            {/* CommentsLink */}
            <div className={style.link}>
                Демонстрация <a href="#">революции серверной части!</a>
            </div>

            {/* CommentsLink */}
            <div className={style.link}>
                <a href="#">Александр Петрович </a><a href="#">стимулирует экономический рост компании!</a>
            </div>

            {/* CommentsLink */}
            <div className={style.link}>
                Новый дизайн <a href="#">домашней страницы от Марии Викторовны</a>
            </div>

            {/* CommentsLink */}
            <div className={style.link}>
                Ура! <a href="#">1 - 10 мая объявлены выходными!!!</a>
            </div>
        </div>
    );
}

export default Comments;