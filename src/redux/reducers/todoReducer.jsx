import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"

const initialState = []

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE_TODO:
            const newstate=state.filter((todo)=>todo.id!==action.payload)
            return newstate
        case UPDATE_TODO:
            const updatedstate=state.map(todo=>{
                if(todo.id===action.payload.todoId){
                    todo.title=action.payload.title
                    todo.description=action.payload.description
                }
                else{
                    return todo
                }
            })
            return updatedstate
        default:
            return state
    }
}