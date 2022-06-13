import React from 'react';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className="posts sectionBlock">
            <p className="sectionBlock__title">Записи</p>
            {/* Recent Post */}
            <Post path="images/elephant-1822636_1280-3-75x75.jpg"
                  title="Обсуждение стратегии развития компании"
                  date="28 ноября, 2019"/>

            {/* Recent Post */}
            <Post path="images/photodune-2359890-elegant-hairstyle-s-3-75x75.jpg"
                  title="Описание используемых подходов к разработке ПО"
                  date="13 декабря 2019"/>

            {/* Recent Post */}
            <Post path="images/mystery-1599527_1920-3-75x75.jpg"
                  title="Внутренняя оптимизация"
                  date="15 января 2020"/>

            {/* Recent Post */}
            <Post path="images/green-hair-women-75x75.jpg"
                  title="Революция серверной части сайта"
                  date="21 января 2020"/>

            {/* Recent Post */}
            <Post path="images/5a101a45eca46-bpfull.jpg"
                  title="Предовставление доступов к корпоративному обучающему ресурсу"
                  date="1 ферваря 2020"/>
        </div>
    );
}

export default Posts;