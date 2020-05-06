import React, {Component} from 'react';
import uuid from "uuid/dist/v4";
import './NewTodoForm.css'

class NewTaskForm extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            task : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTask = {...this.state, id : uuid(), completed: false}
        this.props.addTask(newTask);
        this.setState({
            task : ""
        })
    }

    render() {
        return (<form className="NewTodoForm" onSubmit={this.handleSubmit}>
            <label htmlFor="newtask">New task: </label>
            <input type="text" placeholder="New task" id="task" value={this.state.task} name="task"
            onChange={this.handleChange}/>
            <button>Add</button>
        </form>)
    }
}

export default NewTaskForm;