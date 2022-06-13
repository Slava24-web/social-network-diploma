import React from 'react';
import style from './Groups.module.css';
import Group from '../MyGroups/Group/Group';

const Groups = () => {
    return (
        <div className={`${style.groups} sectionBlock`}>
            <p className="sectionBlock__title">Сообщества</p>
            <div className="membersActive_content">
                <a href="#" className="membersActive__link">Новые</a>
                <a href="#" className="membersActive__link">Популярные</a>
                <a href="#" className="membersActive__link">По названию</a>
                <a href="#" className="membersActive__link">Мои сообщества</a>
            </div>

            {/* GroupLink */}
            <Group path="images/mystery-group.png"
                   name="Директорат"
                   info="17 часов назад"/>

            {/* GroupLink */}
            <Group path="images/mystery-group.png"
                   name="IT-отдел"
                   info="18 часов назад"/>

            {/* GroupLink */}
            <Group path="images/5a101eab2bc2d-bpfull.jpg"
                   name="Фронтенд"
                   info="3 месяца назад"/>

            {/* GroupLink */}
            <Group path="images/5a101a45eca46-bpfull.jpg"
                   name="Отдел бухгалтерии"
                   info="4 часа назад"/>

            {/* GroupLink */}
            <Group path="images/5a101aea813c2-bpfull.jpg"
                   name="Праздники"
                   info="1 день назад"/>
        </div>
    );
}

export default Groups;