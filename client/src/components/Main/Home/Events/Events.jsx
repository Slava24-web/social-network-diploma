import React from 'react';
import Event from './Event/Event';

const Events = () => {
    return (
        <div className="events sectionBlock">
            <p className="sectionBlock__title">События</p>
            {/* EventsLink */}
            <Event title="Поездка в Лондон" date="22/02/2020 - 27/02/2020"/>
            
            {/* EventsLink */}
            <Event title="Упоминание нашей компании в газете..." date="27/02/2020" info="Москва"/>
            
            {/* EventsLink */}
            <Event title="Назначен новый директор по иновациям" date="18/03/2020" info="Директорат по развитию"/>
        </div>
    );
}

export default Events;