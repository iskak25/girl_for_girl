import { useDispatch } from 'react-redux'
import { decrement, increment, steps } from '../redux/features/components'

function useSteps(step) {
  const dispatch = useDispatch()
  //   if (fund == 'plus') {
  dispatch(steps(step))
  //   } else if (fund == 'mimus') {
  //  dispatch(decrement())
  //   }
}
export default useSteps
