import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { DirectContext } from "./";

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (<DirectContext.Provider value={[state, dispatch]}>
        {children}
    </DirectContext.Provider>)
}

export default Provider;