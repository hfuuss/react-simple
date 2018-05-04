import {ADD,MINUS,CHENG,CHU,PINGFANG} from "../constants/COUNTER.js";
export default (state = {"num":0},action)=>{
    if( action.type == ADD){
        return {
            ...state,
            "num":state.num + action.v
        }
    }else if( action.type == MINUS){
        return {
            ...state,
            "num":state.num - 1
        }
    }else if( action.type == CHENG){
        return {
            ...state,
            "num":state.num * 2
        }
    }else if( action.type == CHU){
        return {
            ...state,
            "num":state.num / 2
        }
    }else if( action.type == PINGFANG){
        return {
            ...state,
            "num":state.num * state.num
        }
    }

    return state;
}