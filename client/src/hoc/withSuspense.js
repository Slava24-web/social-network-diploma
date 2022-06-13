import React from 'react';
import Preloader from "../components/Main/Common/Preloader/Preloader";

export const withSuspense = (Component) => {
    return (props => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    });
}
