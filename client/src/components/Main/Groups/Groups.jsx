import React from "react";
import style from './Groups.module.css';
import LinkContainerMenu from "../LinkContainerMenu/LinkContainerMenu";
import SideBlock from "../SideBlock/SideBlock";
import Group from "./Group/Group";
import * as axios from "axios";

const Groups = (props) => {
    let groupsElement = props.groups.map(group => <Group id={group.id} members={group.members} pathCover={group.pathCover} pathLogo={group.pathLogo} name={group.name} text={group.text} status={group.status + " сообщество"} joined={group.joined} join={props.join} leave={props.leave}  />);
    if (props.groups.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setGroups(
                [
                    {
                        id: 1,
                        members: 2,
                        pathCover: "images/5a101e837705b-bp-cover-image.jpg",
                        pathLogo: "images/5a101e7b809a3-bpthumb.jpg",
                        name: "Директорат",
                        time: "",
                        text: "Обсуждение важных вопросов и публикация новостей",
                        status: "Открытое",
                        joined: true
                    },
                    {
                        id: 2,
                        members: 1,
                        pathCover: "images/5a101e3ee513a-bp-cover-image.jpg",
                        pathLogo: "images/5a101deef28bc-bpthumb.jpg",
                        name: "IT-отдел",
                        time: "",
                        text: "Лучшая команда разработчиков!",
                        status: "Открытое",
                        joined: true
                    },
                    {
                        id: 3,
                        members: 2,
                        pathCover: "images/WhiteBG.png",
                        pathLogo: "images/5c86f99ad5bf0-bpfull.jpg",
                        name: "Фронтенд",
                        time: "",
                        text: "Frontend!!!",
                        status: "Закрытое",
                        joined: false
                    },
                    {
                        id: 4,
                        members: 2,
                        pathCover: "images/5a101b23b8081-bp-cover-image.jpg",
                        pathLogo: "images/5a101b3a12e97-bpfull.jpg",
                        name: "Отдел бухгалтерии",
                        time: "",
                        text: "Если ты считаешь, что у тебя всё плохо - возьми калькулятор и пересчитай ещё раз!",
                        status: "Закрытое",
                        joined: true
                    },
                    {
                        id: 5,
                        members: 2,
                        pathCover: "images/5a101ba65fd0d-bp-cover-image.jpg",
                        pathLogo: "images/5a101bcb3fed9-bpfull.jpg",
                        name: "Праздники",
                        time: "",
                        text: "Поздравляем коллег с праздиками!",
                        status: "Открытое",
                        joined: true
                    },
                    {
                        id: 6,
                        members: 2,
                        pathCover: "images/5a101a50d2bcb-bp-cover-image.jpg",
                        pathLogo: "images/5a101a45eca46-bpfull.jpg",
                        name: "Cricket Professionals",
                        time: "",
                        text: "Globally incubate worldwide infrastructures before real-time metrics. Objectively integrate top-line deliverables.",
                        status: "Public",
                        joined: true
                    },
                    {
                        id: 7,
                        members: 1,
                        pathCover: "images/5a101d3b9ba1f-bp-cover-image.jpg",
                        pathLogo: "images/5a101d351d90a-bpfull.jpg",
                        name: "Sport Group",
                        time: "",
                        text: "Dramatically enhance wireless leadership rather than turnkey systems. Appropriately seize one-to-one web services through.",
                        status: "Public",
                        joined: true
                    },
                    {
                        id: 8,
                        members: 0,
                        pathCover: "images/5a101e97b0432-bp-cover-image.jpg",
                        pathLogo: "images/5a101eab2bc2d-bpfull.jpg",
                        name: "Calligraphy",
                        time: "",
                        text: "Energistically procrastinate stand-alone value via front-end initiatives. Dramatically engage high standards in value before plug-and-play methodologies. Progressively utilize.",
                        status: "Public",
                        joined: false
                    },
                ]
            )
        });
    }

    return (
        <div className={style.groups}>
            {/*<Cover state={props.user}/>*/}
            <div className={style.content}>
                <div className={style.contentWrapper}>
                    <LinkContainerMenu />

                    <div className={style.groupsContent}>
                        {/* Numeration */}
                        <div className={style.numeration}>
                            <div className={style.numberGroups}>
                                1 - 8 из 8 сообществ
                            </div>
                        </div>

                        {/* Groups */}
                        <div className={style.groupWrapper}>
                            {groupsElement}
                        </div>

                        {/* Numeration */}
                        <div className={style.numeration}>
                            <div className={style.numberGroups}>
                                Viewing 1 - 8 of 8 groups
                            </div>
                        </div>
                    </div>
                </div>
                <SideBlock />
            </div>
        </div>
    );
}

export default Groups;