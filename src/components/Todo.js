import React from 'react'
import './TodoList.css'
import { useNavigate } from 'react-router-dom'

export default function Todo({ todo, deleteTodo }) {
    const navigate = useNavigate();
    const handleEdit = (event) => {
        navigate(`/todoForm/${todo.id}`)
    }

    return (
        <div className='todo'>
            <label className='todoLabel'>
                <b>Name:</b> {todo.name}
                <br></br>
                <b>Description:</b>
                <br>
                </br>
                {todo.description}
            </label>
            <br></br>
            <button className='editButton' onClick={handleEdit}> Edit</button>
            <button className='deleteButton' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div >
    )
}
