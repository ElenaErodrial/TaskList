import React, {Component} from 'react';
import './task.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing : false,
            task : this.props.taskName
        }

        this.changeEdit = this.changeEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
    }

    changeEdit () {
        this.setState({
            isEditing : !this.state.isEditing
        })
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({
            isEditing : false
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id)

    }

    render() {
        let result;
        if(this.state.isEditing) {
            result = (<div className="Todo">
                <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                    <input type="text" 
                    value={this.state.task} 
                    name="task" 
                    onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
            </div>)
        } else {
            result = (<div className="Todo">
            <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.taskName}</li>
             <div className="Todo-buttons">
             <button onClick={this.props.remove}>
                 <i class="fas fa-trash"/>
             </button>
             <button onClick={this.changeEdit}>
                 <i class="fas fa-pen"/>
             </button>
             </div>
         </div>)
        }
        return result;
    }

}


export default Task; 