import {useCallback, useEffect, useRef, useState} from "react";

const useStateWithCallback = (initState) => {
    const [state, setState] = useState(initState);
    const callbackRef = useRef(null);

    const updateState = useCallback((newState, callback) => {
        callbackRef.current = callback;
        setState(prev => typeof newState === 'function' ? newState(prev) : newState);
    }, []);

    useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current(state);
            callbackRef.current = null;
        }
    }, [state]);

    return [state, updateState];
}

export default useStateWithCallback;