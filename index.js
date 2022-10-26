const { createStore } = require("redux")


const Increment = "Increment"
const Decrement = "Deccrement"
const Reset = "Reset"

const initialState = {
    count:0

}



const incrementState =()=>{
    return {
        type:Increment

    }

}
const decrementState =()=>{
    return {
        type:Decrement

    }

}
const resetState =()=>{
    return {
        type:Reset

    }

}
const counterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case Increment:
            return{
                ...state,
                count:state.count + 1
            }
            case Decrement:
            return{
                ...state,
                count:state.count - 1
            }
            case Reset:
            return{
                ...state,
                count:0
            }
    
        default:
            return{
                ...state,
                count:0
            }
    }

}
const store = createStore(counterReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementState())
store.dispatch(decrementState())
store.dispatch(resetState())