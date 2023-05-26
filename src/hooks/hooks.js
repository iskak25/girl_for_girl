import { useDispatch } from 'react-redux'
import { decrement, increment, steps } from '../redux/features/components'

function useSteps(step) {
  const dispatch = useDispatch();
  dispatch(steps(step))

}
export default useSteps
