import { useContext } from "react";
import { DirectContext } from '.';

const useStore = () => {
    const [state, dispatch] = useContext(DirectContext);
    return [state, dispatch]
}

export { useStore };
