const initial_state = {
    no_of_apples: 10
}

const reducer = (state = initial_state,action) => {
    if(action.type === "BUY_APPLE")
        return {
            no_of_apples: state.no_of_apples - 1
        }
    else
        return state

}

export default reducer