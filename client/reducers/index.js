import {
    LOAD_START,
    LOAD_COMPLETE
} from '../actions';

const {assign} = Object;

export default (state = {}, action) => {
    console.log(action.type, JSON.stringify(action));
    switch (action.type) {
        case LOAD_START:
            return assign({}, state, {
                isLoading: true
            });
        case LOAD_COMPLETE:
            return assign({}, state, {
                isLoading: false
            });
        default:
            return state;
    }
};
