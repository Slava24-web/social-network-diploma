import React from 'react';
import style from './Members.module.css';
import User from './User/User';

const Members = () => {
    return (
        <div className={`${style.members} sectionBlock`}>
            <p className="sectionBlock__title">Участники</p>
            {/* MembersLink */}
            <User path="images/5a100d3ad2b15-bpthumb.jpg" name="Александр Попов" info="26 друзей"/>

            {/* MembersLink */}
            <User path="images/5a0f4a768de5f-bpthumb.jpg" name="Ирина Фёдорова" info="25 друзей"/>

            {/* MembersLink */}
            <User path="images/5a0f3a30b9c0c-bpthumb.jpg" name="Игорь Николаев" info="25 друзей"/>

            {/* MembersLink */}
            <User path="images/5a0f4a0b706f7-bpthumb.jpg" name="Анастасия Михайлова" info="24 друзей"/>

            {/* MembersLink */}
            <User path="images/5a0f4ca1a45d7-bpthumb.jpg" name="Кирилл Столяров" info="22 друзей"/>
        </div>
    );
}

export default Members;