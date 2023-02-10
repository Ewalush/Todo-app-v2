import Todo from './Todo'
import './TodoList.css'
import React, { useMemo, useState } from 'react';


export default function TodoList() {
    const [searchName, setSearchName] = useState('');

    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem('todoList')) || []
    );

    const fullTodoList = useMemo(() => {
        if (searchName.length === 0) {
            return todoList;
        } else {
            return todoList.filter((todo) => {
                return todo.name.toLowerCase().includes(searchName.toLowerCase());
            });
        }
    }, [searchName, todoList]);

    const deleteTodo = (id) => {
        setTodoList((prevTodoList) => {
            const updatedTodoList = prevTodoList.filter((todo) => todo.id !== id);
            localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
            return updatedTodoList;
        });
    };

    const handleChange = (event) => {
        setSearchName(event.target.value);
    };



    return (
        <div>
            <input
                className='search'
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchName}
            />
            <div>
                {fullTodoList.map((todo) => (
                    <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} />
                ))}
            </div>
        </div>
    );
}