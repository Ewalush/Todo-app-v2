import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function TodoForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    const [todo, setTodo] = useState({
        id: id || uuidv4(),
        name: '',
        description: '',
        dateCreated: new Date().toLocaleString(),
    });

    const todoList = JSON.parse(localStorage.getItem('todoList'));

    useEffect(() => {
        if (id && !loaded) {
            todoList.forEach(element => {
                if (element.id === id) {
                    setTodo(element);
                    setLoaded(true);
                }
            });
        }
    }, [id, todoList, loaded]);

    const handleUpdateTodo = (event) => {
        event.preventDefault();

        const updatedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
        const existingTodoIndex = updatedTodoList.findIndex((t) => t.id === todo.id);

        if (existingTodoIndex !== -1) {
            updatedTodoList[existingTodoIndex] = todo;
        } else {
            updatedTodoList.push(todo);
        }

        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
        navigate('/');
    };

    const handleTodoChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };
    const handleCancel = () => {
        navigate('/');
    };

    return (
        <form className='form' onSubmit={handleUpdateTodo}>
            <input
                className='createText'
                placeholder='Name'
                type="text"
                name="name"
                value={todo.name}
                onChange={handleTodoChange}
            />
            <input
                className='createText'
                placeholder='Description'
                type="text"
                name="description"
                value={todo.description}
                onChange={handleTodoChange}
            />
            <div className='buttons'>
                <button className='editButton' type="submit">Save Todo</button>
                <button className='deleteButton' type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
}