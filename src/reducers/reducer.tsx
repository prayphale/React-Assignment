import Redux from 'redux';

let initialState = {
    username: '',
    userProfile: {},
    repos: []
}
const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.username
            }
        default: 
            return state;
    }
}

export default reducer;