import React, { Component } from 'react';

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
                    value="add task"
                />
                <input
                    type="button"
                    name="clear"
                    value="Clear Complete"
                    onClick={this.props.clear}
                />
            </form>
         );
    }
}
 
export default TodoForm;