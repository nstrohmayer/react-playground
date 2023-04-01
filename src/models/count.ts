import {createModel} from '@rematch/core';
import {RootModel} from './index';

type CountState = {
    currentCount: number
    numberOfResets: number
}

export const count = createModel<RootModel>()({
    state: {
        currentCount: 0,
        numberOfResets: 0,
    } as CountState,
    reducers: {
        increment(state, payload: number) {
            return {
                ...state,
                currentCount: state.currentCount + payload,
            };
        },
    },
    effects: (dispatch) => ({
        async incrementAsync(payload: number) {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            dispatch.count.increment(payload);
        },
    }),
});
