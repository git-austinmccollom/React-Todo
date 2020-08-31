import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = { 
            inputTask: ""
        }
    }

    handleChange = (evt) => {
        this.setState({ inputTask: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addTask(this.state.inputTask);
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="inputTask"
                    placeholder="enter new task here"
                    value={this.state.inputTask}
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    name="submitButton"
                    value="add task"
                />
            </form>
         );
    }
}
 
export default TodoForm;