import React from "react"
import AddTask from "../components/AddTask"

export default {
    title: 'Task Component',
    component: AddTask,
}

const initialValues = [
    { id: 1, task: "Task 1", isCompleted: true },
    { id: 2, task: "Task 2", isCompleted: false },
    { id: 3, task: "Task 3", isCompleted: false },
    { id: 4, task: "Task 4", isCompleted: false },
    { id: 5, task: "Task 5", isCompleted: false },
    { id: 6, task: "Task 6", isCompleted: false }
]

export function ShowStudentsData() {
    return (
        <AddTask iValues={initialValues} />
    )
}