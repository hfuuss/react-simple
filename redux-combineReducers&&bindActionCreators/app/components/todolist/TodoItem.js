import React from 'react';
export default class TodoItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            "onEdit":false
        }
    }

    render() {
        return (
            <div className="todoitem">
                <label>
                    <input
                        type="checkbox"
                        checked={this.props.item.done}
                        onChange = {(e)=>{
                            this.props.changeTodo(this.props.item.id,"done",e.target.checked)
                        }}
                    />
                    {
                        this.state.onEdit
                        ?
                        <input
                            type="text"
                            defaultValue={this.props.item.title}
                            onBlur = {(e)=>{
                                this.props.changeTodo(this.props.item.id,"title",e.target.value)
                                this.setState({
                                    "onEdit":false
                                })
                            }}
                        />
                        :
                        <span onDoubleClick={()=>{
                            this.setState({
                                "onEdit":true
                            })
                        }}>{this.props.item.title}</span>
                    }
                </label>
                <button onClick={()=>{this.props.delTodo(this.props.item.id)}}>删除</button>
            </div>
        );
    }
}
