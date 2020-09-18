import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const dummyData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      list: dummyData,
      inputTask: ""
    }
  }

  handleChange = (evt) => {
    this.setState({ inputTask: evt.target.value })
  }

  handleSubmit = (evt) => {
      evt.preventDefault();
      this.addTask(this.state.inputTask);
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [
        ...this.state.list,
        newTask
      ],
      inputTask: ''
    });
  }

  toggleComplete = (clickedId) => {
    console.log('toggled')
    this.setState({
      list: this.state.list.map( (task) => {
        // return {blah: clickedId }
        if (task.id === clickedId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }

  clear = () => {
    console.log('cleaned')
    this.setState({
      list: this.state.list.filter( (task) => {
        return task.completed !== true;
      })
    })
  }

  render() {
    return (
      <div className={"page-wrapper"}>
        <h2>Tasks</h2>
        <TodoForm  handleChange={this.handleChange} handleSubmit={this.handleSubmit} addTask={this.addTask} clear={this.clear}/>
        <TodoList list={this.state.list} toggleComplete={this.toggleComplete} /> 

      </div>
    );
  }
}

export default App;
