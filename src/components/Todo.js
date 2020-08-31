import React from 'react'

class Todo extends React.Component {
    constructor() {
        super();
        this.state = { 
        }
    }

    render() { 
        return ( 
            <p>{`${this.props.task}`}</p>
         );
    }
}
 
export default Todo;