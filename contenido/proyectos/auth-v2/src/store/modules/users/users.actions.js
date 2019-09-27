import { usersGetAll } from '../../../services/users.service';
import { START, SUCCESS, ERROR } from './users.const';

const usersGetListStartAction = () => ({ type: START, payload: null });
const usersGetListSuccessAction = (data) => ({ type: SUCCESS, payload: data });
const usersGetListErrorAction = (message) => ({ type: ERROR, payload: message });

export const usersGetListAsyncAction = (data) => {
    return (dispatch) => {
        dispatch(usersGetListStartAction());
        usersGetAll().then((result) => {
            if(result.data.message === 'success') {
                dispatch(usersGetListSuccessAction(result.data.data));
            } else {
                dispatch(usersGetListErrorAction(result.data.message));
            }
        })
        .catch(err => {
            dispatch(usersGetListErrorAction(err.message));
        })
    }
}