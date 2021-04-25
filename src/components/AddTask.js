import React, { useState } from 'react'
import Task from './Task'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

const AddTask = ({ iValues = [] }) => {
    // const initialValues = [
    //     // { id: 1, task: "Task 1", isCompleted: true },
    //     // { id: 2, task: "Task 2", isCompleted: false },
    //     // { id: 3, task: "Task 3", isCompleted: false },
    //     // { id: 4, task: "Task 4", isCompleted: false },
    //     // { id: 5, task: "Task 5", isCompleted: false },
    //     // { id: 6, task: "Task 6", isCompleted: false }
    // ]
    const [tasks, setTasks] = useState(iValues)
    const [task, setTask] = useState("")
    const [err, setErr] = useState(false)

    const addingTask = () => {
        if (!task) {
            setErr(true)
            return
        }
        const data = {
            id: Math.random() * 100020102,
            task
        }
        const newData = [...tasks]
        newData.push(data)
        setTasks(newData)
    }
    const handleOnChange = (e) => {
        setErr(false)
        setTask(e.target.value)
    }
    const handleCompletedTask = (id) => {
        let data = [...tasks]
        data.map(task => task.id === id ? (task.isCompleted = true)
            : task)
        setTasks(data)
    }
    const handleRemoveTask = (id) => {
        const data = [...tasks]
        setTasks(data.filter(task => task.id !== id))
    }
    return (
        <>
            <div className="form-group">
                <label htmlFor="addtask">Add Task</label>
                <input type="text" className={`form-control ${err ? "is-invalid" : ""}`} placeholder="Add Task" value={task} onChange={handleOnChange} />
                <div className="invalid-feedback">
                    This field is required
                </div>
            </div>

            <button onClick={addingTask} className="btn btn-dark">
                Add Task
        </button>
            <div className="card-columns my-3">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        isCompleted={task.isCompleted}
                        handleCompletedTask={handleCompletedTask}
                        remove={handleRemoveTask}
                    />
                ))
                }
            </div>
        </>
    )
}

export default AddTask
