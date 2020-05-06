import React, {Component} from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';
import './taskList.css';


class TaskList extends Component {
constructor(props) {
    super(props);
    this.state = {
        todos : []
    }

    this.addTask = this.addTask.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this)
}

addTask(newTask) {
this.setState({
    todos : [...this.state.todos, newTask]
})
}

remove(id) {
    this.setState({
        todos : this.state.todos.filter(task => task.id !== id)
    })
}

update(id, updatedTask) {
const updatedTodos = this.state.todos.map(todo => {
    if (todo.id === id) {
        return {...todo, task : updatedTask}
    }
    return todo
})
this.setState({
    todos : updatedTodos
    })
}

toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
        if (todo.id === id) {
            return {...todo, completed : !todo.completed}
        }
        return todo
    })
    this.setState({
    todos : updatedTodos
    })



}


render() {
    const tasks = this.state.todos.map(singleTask => {
        return <Task 
        taskName={singleTask.task} 
        id={singleTask.id} 
        key={singleTask.id} 
        remove={() => this.remove(singleTask.id)}
        update={this.update}
        completed={singleTask.completed}
        toggleTodo={this.toggleCompletion}/>
    })
    return (
        <div className="taskList">
            <h1>DAILY TASK LIST<span>"Don't stop until you are proud"</span></h1>
            <ul>{tasks}</ul>
            <NewTaskForm addTask={this.addTask}/>
            
        </div>
    )
}
}

export default TaskList;