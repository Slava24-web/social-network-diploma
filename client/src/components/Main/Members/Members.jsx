import React from "react";
import style from "./Members.module.css";
import Member from "./Member/Member";
import Paginator from "../Common/Paginator/Paginator";

const Members = (props) => {
    // Преобразование массива пользователей
    let membersList = () => {
        return props.members.map(member => <Member name={member.name}
                                                        id={member.id}
                                                        uniqueUrlName={member.uniqueUrlName}
                                                        photos={member.photos}
                                                        status={member.status}
                                                        followed={member.followed}
                                                        acceptSubscribe={props.acceptSubscribe}
                                                        acceptUnsubscribe={props.acceptUnsubscribe}
                                                        isFollowing={props.isFollowing}
                                                        subscribe={props.subscribe}
                                                        unsubscribe={props.unsubscribe}
        />)
    }

    return (
        <div className={style.members}>
            <Paginator currentPage={props.currentPage}
                       onPageChange={props.onPageChange}
                       totalCount={props.totalCount}
                       pageSize={props.pageSize}
            />
            <div className={style.membersList}>
                {membersList()}
            </div>
        </div>
    );
}

export default Members;