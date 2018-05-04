import React from 'react';
import TodoHd from "./TodoHd.js";
import TodoBd from "./TodoBd.js";
import TodoFt from "./TodoFt.js";
export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>TodoList示例</h1>
                <TodoHd></TodoHd>
                <TodoBd></TodoBd>
                <TodoFt></TodoFt>
            </div>
        );
    }
}
