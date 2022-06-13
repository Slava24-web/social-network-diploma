import React from 'react';
import style from './MyGroups.module.css';
import Group from './Group/Group';


const MyGroups = () => {
    return (
        <div className={`${style.myGroups} sectionBlock`}>
            <p className="sectionBlock__title">Мои сообщества</p>
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
        </div>
    );
}

export default MyGroups;