import React from 'react';
import {useSelector} from "react-redux";

const Like = () => {
    const {isAuthenticated} = useSelector(state => {
        return {
            isAuthenticated: state.auth.isAuthenticated,
        }
    })
    const onLikeClick = (e) => {
        e.preventDefault();

        // if (isAuthenticated) {
        //     const existedLike =
        // }
    }

    return (
        <div>

        </div>
    );
};

export default Like;