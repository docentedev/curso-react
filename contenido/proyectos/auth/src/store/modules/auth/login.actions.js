import { login } from '../../../services/auth.service';
import { START, SUCCESS, ERROR } from './login.const';
import { parseJwt } from '../../../utils/jwt';

const loginStartAction = () => ({ type: START, payload: null });
const loginSuccessAction = (data) => ({ type: SUCCESS, payload: data });
const loginErrorAction = (message) => ({ type: ERROR, payload: message });

export const loginAsyncAction = (data) => {
    return (dispatch) => {
        dispatch(loginStartAction());
        login(data).then((result) => {
            if(result.data.message === 'success') {
                const tokenDecode = parseJwt(result.data.token);
                dispatch(loginSuccessAction({
                    token: result.data.token,
                    tokenDecode,
                }));
            } else {
                dispatch(loginErrorAction(result.data.message));
            }
        })
        .catch(err => {
            dispatch(loginErrorAction(err.message));
        })
    }
}