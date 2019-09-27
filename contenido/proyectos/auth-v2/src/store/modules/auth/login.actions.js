import { login } from '../../../services/auth.service';
import { START, SUCCESS, ERROR, CLEAR } from './login.const';
import { parseJwt } from '../../../utils/jwt';

const loginStartAction = () => ({ type: START, payload: null });
const loginSuccessAction = (data) => ({ type: SUCCESS, payload: data });
const loginErrorAction = (message) => ({ type: ERROR, payload: message });
export const loginClearAction = () => ({ type: CLEAR, payload: null });

export const loginAsyncAction = (data) => {
    return (dispatch) => {
        dispatch(loginStartAction());
        login(data).then((result) => {
            if(result.data.message === 'success') {
                const tokenDecode = parseJwt(result.data.data);

                const iat = new Date(0);
                iat.setUTCSeconds(tokenDecode.iat);
                tokenDecode.iat = iat;

                const exp = new Date(0);
                exp.setUTCSeconds(tokenDecode.exp);
                tokenDecode.exp = exp;

                dispatch(loginSuccessAction({
                    token: result.data.data,
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