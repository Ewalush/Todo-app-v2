import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Todo({ todo, deleteTodo }) {
    const navigate = useNavigate();
    const handleEdit = (event) => {
        navigate(`/todoForm/${todo.id}`)
    }

    return (
        <div className='todo'>
            <label>
                <b>Name:</b> {todo.name}
                <br></br>
                <b>Description:</b>
                <br>
                </br>
                {todo.description}
            </label>
            <br></br>
            <button className='greenButton' onClick={handleEdit}> Edit</button>
            <button className='redButton' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div >
    )
}
