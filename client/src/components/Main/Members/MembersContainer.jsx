import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleIsFollowing,
    requestMembers,
    acceptSubscribe,
    acceptUnsubscribe,
    subscribe,
    unsubscribe
} from '../../../redux/MembersReducer';
import Members from './Members';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getPageSize,
    getMembers,
    getTotalCount,
    getCurrentPage,
    getIsFetching,
    getIsFollowing
} from "../../../redux/Selectors/MembersSelectors";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const MembersContainer = (props) => {
    // Что сделать после того, как компонент будет вмонтирован
    React.useEffect(() => {
        props.requestMembers(props.currentPage, props.pageSize);
    }, []);

    const onPageChange = (pageNumber) => {
        props.requestMembers(pageNumber, props.pageSize);
    };

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Members onPageChange={onPageChange}
                 members={props.members}
                 acceptSubscribe={props.acceptSubscribe}
                 acceptUnsubscribe={props.acceptUnsubscribe}
            // setMembers={this.props.setMembers}
                 totalCount={props.totalCount}
                 pageSize={props.pageSize}
                 currentPage={props.currentPage}
            // toggleIsFollowing={this.props.toggleIsFollowing}
                 isFetching={props.isFetching}
                 isFollowing={props.isFollowing}
                 subscribe={props.subscribe}
                 unsubscribe={props.unsubscribe}
        />
    </>
}

const mapStateToProps = (state) => {
    return {
        members: getMembers(state),
        user: state.user,
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         subscribe: (memberId) => {
//             dispatch(subscribeActionCreator(memberId));
//         },
//         unsubscribe: (memberId) => {
//             dispatch(unsubscribeActionCreator(memberId));
//         },
//         setMembers: (members) => {
//             dispatch(setMembersActionCreator(members));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching));
//         }
//     }
// };

export default compose(
    connect(mapStateToProps, {// Объект ActionCreator - ов
        // acceptSubscribe,
        // acceptUnsubscribe,
        // setCurrentPage,
        // toggleIsFollowing,

        // thunkCreators
        requestMembers,
        subscribe,
        unsubscribe
    }),
    withAuthRedirect
)(MembersContainer);