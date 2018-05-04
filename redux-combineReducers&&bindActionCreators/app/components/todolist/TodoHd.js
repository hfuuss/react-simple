import React from 'react';
import { connect } from "react-redux";
import {ADDTODOS,CHANGETODO,DELTODO,CHANGESHOW} from "../../constants/TODOLIST.js";
class TodoHd extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <input type="text" ref="titleTxt" />
                <button onClick={()=>{
                    if(this.refs.titleTxt.value == "") return;
                    this.props.addTodos(this.refs.titleTxt.value);
                    this.refs.titleTxt.value = "";
                }}>添加</button>
            </div>
        );
    }
}
export default connect(
    null,
    (dispatch)=>{
        return {
            addTodos(title){
                dispatch({"type":ADDTODOS,title})
            }
        }
    }
)(TodoHd);