import React from 'react'

const Task = ({ task, id, isCompleted, handleCompletedTask, remove }) => {
    return (
        <div className={`card ${isCompleted ? "bg-danger text-light" : ""}`}>
            <div className="card-body">
                <h1 className="float-right">
                    <i
                        style={{ cursor: `${!isCompleted ? "pointer" : ""}` }}
                        onClick={!isCompleted ? (() => handleCompletedTask(id)) : null}
                        className=" fa fa-check-circle mx-3"></i>
                    <i
                        className="fa fa-trash"
                        onClick={() => remove(id)}
                        style={{ cursor: "pointer" }}
                    >
                    </i>
                </h1>
                <p className="mt-3">{task}</p>
            </div>
        </div >
    )
}

export default Task
