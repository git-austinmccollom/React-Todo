import React, { Component } from 'react';
import './TodoForm.css'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = { 
        }
    }

    render() { 
        return ( 
            <form onSubmit={this.props.handleSubmit}>
                <input
                    type="text"
                    name="inputTask"
                    placeholder="enter new task here"
                    value={this.props.inputTask}
                    onChange={this.props.handleChange}
                />
                <input
                    type="submit"
                    name="submitButton"
                    value="Add Task"
                    className={"button"}
                />
                <input
                    type="button"
                    name="clear"
                    value="Clear Complete"
                    className={"button"}
                    onClick={this.props.clear}
                />
            </form>
         );
    }
}
 
export default TodoForm;