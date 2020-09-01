import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    constructor() {
        super();
        this.state = { 
        }
    }

    render() { 
        return ( 
            <p
                className={this.props.todo.completed ? "complete" : null}
                onClick={ () => this.props.toggleComplete(this.props.todo.id) }
            >
                {`${this.props.todo.task} and key is ${this.props.todo.id}`}
            </p>
         );
    }
}
 
export default Todo;