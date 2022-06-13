import React from 'react';
import Block from './Block/Block';

const Statistics = () => {
    return (
        <div className="statistics sectionBlock">
            <p className="sectionBlock__title">Статистика</p>
            {/* Statistics Block */}
            <Block class="fa fa-file-text-o"
                   text="Записи"
                   number="126"/>

            {/* Statistics Block */}
            <Block class="fa fa-comment-o"
                   text="Комментарии" number="981"/>

            {/* Statistics Block */}
            <Block class="fa fa-commenting-o"
                   text="Активность"
                   number="2,384"/>

            {/* Statistics Block */}
            <Block class="fa fa-user-o"
                   text="Участники"
                   number="311"/>

            {/* Statistics Block */}
            <Block class="fa fa-user-circle-o"
                   text="Онлайн"
                   number="124"/>

            {/* Statistics Block */}
            <Block class="fa fa-users"
                   text="Сообщества"
                   number="42"/>
            
            {/* Statistics Block */}
            <Block class="fa fa-list"
                   text="Форумы"
                   number="9"/>
        </div>
    );
}

export default Statistics;