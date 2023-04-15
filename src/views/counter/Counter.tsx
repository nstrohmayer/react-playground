import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { type Dispatch, type RootState } from "../../store"

const Counter: React.FC = () => {
  const currentCountState = useSelector((state: RootState) => state.count?.currentCount)
  const dispatch = useDispatch<Dispatch>()

  async function handleIncrementButtonClicked(): Promise<void> {
    await dispatch.count.incrementAsync(1)
  }

  return (
    <div>
      <p>I will become a Counter</p>
      <p>The current count is: {currentCountState}</p>
      <button onClick={handleIncrementButtonClicked}>+</button>
      <a href={"/"}>Back</a>
    </div>
  )
}

export default Counter
