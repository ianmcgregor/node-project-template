export const LOAD_START = 'LOAD_START';
export const LOAD_COMPLETE = 'LOAD_COMPLETE';

export function loadStart() {
    return {
        type: LOAD_START
    };
}

export function loadComplete() {
    return {
        type: LOAD_COMPLETE
    };
}
