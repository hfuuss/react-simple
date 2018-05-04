import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../../actions/counterActions.js";
class Counter extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>计数器示例</h1>
                <h2>{this.props.num}</h2>
                <button onClick={()=>{
                    this.props.test.add(2)
                }}>+</button>
                <button onClick={()=>{
                    this.props.test.minus()
                }}>-</button>
                <button onClick={()=>{
                    this.props.test.cheng()
                }}>*</button>
                <button onClick={()=>{
                    this.props.test.chu()
                }}>/</button>
                <button onClick={()=>{
                    this.props.test.pingfang()
                }}>^</button>
            </div>
        );
    }
}
export default connect(
    (state)=>{
        return {
            num : state.counter.num
        }
    },
    (dispatch)=>{
        return {
            test : bindActionCreators(counterActions,dispatch)
        }
    }
)(Counter);