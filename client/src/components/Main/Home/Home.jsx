import React from 'react';
import style from './Home.module.css';
import MyGroups from './MyGroups/MyGroups';
import Groups from './Groups/Groups';
import Members from './Members/Members';
import Events from './Events/Events';
import Posts from './Posts/Posts';
import Comments from './Comments/Comments';
import Statistics from './Statistics/Statistics';

const Home = () => {
    return (
        <div className={style.home}>
            <p className="sectionTitle">
                Информационная панель
            </p>
            <div className={style.homeBlock}>
                {/* Welcome */}
                <div className={style.welcome}>
                    <b><p className="sectionBlock__title">Добро пожаловать</p></b>
                    <div className={style.welcome__text}>Коллеги, привествуем Вас в нашей корпоративной социальной
                        сети! Здесь Вы можете обсуждать проблемы, возникающие в процессе работы, создавать и вступать в
                        сообщества, добавлять друг друга в друзья, общаться с коллегами, а также планировать важные события, моментально
                        уведомляя об этом всех сотрудников.
                    </div>
                </div>

                {/* Events SectionBlock */}
                <Events />

                {/* Recent Posts */}
                <Posts />

                {/* My Groups SectionBlock */}
                <MyGroups />

                {/* Groups SectionBlick */}
                <Groups />

                {/* Recent Comments SectionBlock */}
                <Comments />

                {/* Members SectionBlock */}
                <Members />

                {/* Statistics */}
                <Statistics />

            </div>
        </div>
    );
}

export default Home;