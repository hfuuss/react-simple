import {ADDTODOS,CHANGETODO,DELTODO,CHANGESHOW} from "../constants/TODOLIST.js";
const initObj = {
    "todos":[
        {"id":1,"title":"洗脸","done":false},
        {"id":2,"title":"刷牙","done":false},
        {"id":3,"title":"早餐","done":true},
        {"id":4,"title":"复习","done":false},
        {"id":5,"title":"睡觉","done":false},
    ],
    "show":"All" //All,YIdone,WEIdone
}
export default (state = initObj,action)=>{

    if(action.type == ADDTODOS){
        return {
            ...state,
            "todos":[
                ...state.todos,
                {
                    "id":state.todos.reduce((a,b)=>{
                        return b.id > a ? b.id : a;
                    },0) + 1,
                    "title":action.title,
                    "done":false
                }
            ]
        }
    }else if(action.type == CHANGETODO){
        return {
            ...state,
            "todos":state.todos.map(item=>{
                if( item.id != action.id) return item;
                return{
                    ...item,
                    [action.k]:action.v
                }
            })
        }
    }else if(action.type == DELTODO){
        return {
            ...state,
            "todos":state.todos.filter(item=>item.id != action.id)
        }
    }else if(action.type == CHANGESHOW){
        return {
            ...state,
            "show":action.show
        }
    }
    return state;
}