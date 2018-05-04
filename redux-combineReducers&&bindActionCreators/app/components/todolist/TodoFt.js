import React from 'react';
import { connect } from "react-redux";
import classname from "classnames";
import {ADDTODOS,CHANGETODO,DELTODO,CHANGESHOW} from "../../constants/TODOLIST.js";
class TodoFt extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>
                    当前：共{this.props.todos.length}条事件,
                    做完了{this.props.todos.filter(item => item.done).length}条事件,
                    没做完了{this.props.todos.filter(item => !item.done).length}条事件
                </p>
                <p>
                    <button
                        onClick={()=>{
                            this.props.changeShow("All")
                        }}
                        className={classname({
                            "cur":this.props.show == "All"
                        })}
                    >查看全部</button>
                    <button
                        onClick={()=>{
                            this.props.changeShow("YIdone")
                        }}
                        className={classname({
                            "cur":this.props.show == "YIdone"
                        })}
                    >查看已做</button>
                    <button
                        onClick={()=>{
                            this.props.changeShow("WEIdone")
                        }}
                        className={classname({
                            "cur":this.props.show == "WEIdone"
                        })}
                    >查看未做</button>
                </p>
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
            changeShow(show){
                dispatch({"type":CHANGESHOW,show})
            }
        }
    }
)(TodoFt);