import {FETCH_WEATHER} from '../actions/index'
export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:
        //... means this is an array take this array add new 
        //playload into it and add whole data into outside array
            return [action.payload.data, ...state] // state.push(action.payload.data)
        return;
        default:
        return state;
    }
    return state;
}