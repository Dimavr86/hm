const initState = {
    token: true
}


const reducer = (state = initState, action) => {

    switch(action.type) {
        case 'TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default reducer;