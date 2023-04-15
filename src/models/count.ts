import { createModel } from "@rematch/core"
import { type RootModel } from "./index"

interface CountState {
  currentCount: number
  numberOfResets: number
}

export const count = createModel<RootModel>()({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  state: {
    currentCount: 0,
    numberOfResets: 0,
  } as CountState,
  reducers: {
    increment(state, payload: number) {
      return {
        ...state,
        currentCount: state.currentCount + payload,
      }
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number) {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      dispatch.count.increment(payload)
    },
  }),
})
