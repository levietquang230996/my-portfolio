import { MOVE_TO_COMPONENT } from './constants';

const initialState = {
    top: 0
}

const reducer = ((state, action) => {
    switch (action.type) {
        case MOVE_TO_COMPONENT:
            return state;
        default:
            return state;
    }
});

export { initialState };
export default reducer;
