import React from 'react';
import TodoItem from "./TodoItem.js";
import { connect } from "react-redux";
import {ADDTODOS,CHANGETODO,DELTODO,CHANGESHOW} from "../../constants/TODOLIST.js";
class TodoBd extends React.Component {

    constructor() {
        super();
    }
    render() {
        // 根据全面局的show属性来决定当前的todos的数组
        if( this.props.show == "All"){
            var todos = this.props.todos;
        }else if( this.props.show == "YIdone" ){
            var todos = this.props.todos.filter(item => item.done);
        }else if ( this.props.show == "WEIdone" ){
            var todos = this.props.todos.filter(item => !item.done);
        }
        return (
            <div>
                {
                    todos.map(item=>{
                        return <TodoItem
                                    key={item.id}
                                    item={item}
                                    changeTodo={this.props.changeTodo.bind(this)}
                                    delTodo = {this.props.delTodo.bind(this)}
                                >

                        </TodoItem>
                    })
                }
            </div>
        );
    }
}
export default connect(
    (state)=>{
        return {
            todos:state.todolist.todos,
            show:state.todolist.show
        }
    },
    (dispatch)=>{
        return {
            changeTodo(id,k,v){
                dispatch({"type":CHANGETODO,id,k,v})
            },
            delTodo(id){
                dispatch({"type":DELTODO,id})
            }
        }
    }
)(TodoBd);