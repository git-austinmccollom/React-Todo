// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render () {
        return (
            <div>
                {
                    this.props.list.map( (todo) => {
                        return <Todo key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} />
                    })
                }
            </div>
        )
    }
}

export default TodoList;

// export default function TodoList(props) {
//     const { todos } = props;
//     return (
//         <div>
//             <p>hello?</p>
//             <p>{`${todos}`}</p>
//             {/* {
//                 this.props.list.map( (t) => {
//                     return <Todo t={t} />
//                 })
//             } */}
//         </div>
//     )
// }