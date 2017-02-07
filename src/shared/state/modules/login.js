import { createAction } from 'redux-actions';
import axios from 'axios';

const LOGIN = 'LOGIN';

const success = createAction(LOGIN, (user) => ({ user }));

export const login = (credentials) => (dispatch) => {
    axios.post('/api/login', credentials)
        .then(response => {
            const user = response.data;
            dispatch(success(user));
        })
        .catch(error => {
            console.log('login failure', error);
        })
};

export default {
    [LOGIN]: (state, payload) => ({ ...state, user: payload.user, auth: true })
}