import React from "react";
import ReactDOM from "react-dom";
import {createStore , applyMiddleware} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
// 引入reducer
import reducer from "./reducers";
// 引入组件
import App from "./App.js"
// 创建一个store
const store = createStore(reducer,applyMiddleware(logger));
// 现在所有的组件所有store这个作用域了，当做固定的格式。
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App></App>
        </Provider>
    </div>
    ,
    document.getElementById("app")
);

