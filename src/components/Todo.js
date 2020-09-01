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
                <li
                className={this.props.todo.completed ? "complete" : null}
                onClick={ () => this.props.toggleComplete(this.props.todo.id) }
            >
                {`${this.props.todo.task}`}
            </li>
         );
    }
}
 
export default Todo;