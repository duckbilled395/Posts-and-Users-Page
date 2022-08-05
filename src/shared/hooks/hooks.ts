import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppStateType } from '../store'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../store/actions'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ActionCreators, dispatch)
}
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

// bindActionCreators(ActionCreators, dispatch) => {
//     for (key in ActionCreators) {
//         if (typeof ActionCreators[key]() === 'function') {
//             console.log('it is thunk')
//             return ActionCreators[key](dispatch)
//         } else if (typeof ActionCreators[key]() === 'object') {
//             console.log('it is action creator')
//             return dispatch(ActionCreators[key]())
//         }
//     }
// }
