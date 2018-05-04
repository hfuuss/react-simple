import React from 'react';
import TodoList from "./components/todolist";
import Counter from "./components/counter";
export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <TodoList></TodoList>
                <hr />
                <Counter></Counter>
            </div>
        );
    }
}

