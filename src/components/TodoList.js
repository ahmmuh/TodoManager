import React, { useState } from 'react'
/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';


const TodoList = ({ todos }) => {
    const [todosList, setTodoList] = useState(todos)
    const [todoItem, setTodoItem] = useState({
        userId: uuidv4(),
        id: uuidv4(),
        title: '',
        completed: false,
    })
    const [completed, setCompleted] = useState(false)
    const changeHandler = (e) => {
        setTodoItem({
            ...todoItem,
            [e.target.name]: e.target.value
        })
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (todoItem.title !== "") {
            setTodoList(
                [...todosList, todoItem]

            )
        }
        else {
            alert("Title is missing")
        }
    }


    const completeHandler = (id) => {
        setTodoList(todosList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            else {
                return todo
            }

        }
        ))
    }

    const removeTodo = (id) => {
        const tDone = todosList.filter((todo) => todo.id !== id);
        setTodoList(tDone)
    }
    return (
        <div className='container bg-light py-4'>
            <div className='row '>
                <div className='col-4 p-4 ' style={{ backgroundColor: '#eeeeee' }}>
                    <input placeholder='add todo' name='title' value={todoItem.title} onChange={changeHandler} className='form-control' />
                    <button onClick={addTodo} style={{ width: '100%' }} className='btn alert alert-success  mr-auto mt-2  '><i className="fa-2x fa-solid fa-plus"
                    ></i></button>
                </div>
                <div className='col'>
                    <ul className="list-group">
                        <li className="list-group-item lead" style={{ backgroundColor: '#a4a41152' }}>Det finns <span className='badge text-bg-success'>{todosList.length} </span> todos</li>
                        {
                            todosList.map((todo) => (

                                <div key={todo.id}>

                                    <li className="list-group-item d-flex justify-content-between" >
                                        <h6 className="card-title text-dark lead text-capitalize ">{todo.title}</h6>
                                        <div className='d-flex  justify-content-end  align-items-end '>
                                            <i onClick={() => removeTodo(todo.id)} className="fa-regular fa-trash-can text-danger px-4 mb-1"></i>
                                            <p className="card-text lead">{todo.completed ? <i className="fa-solid fa-check text-success "></i> : <a href='#' className='text-primary'
                                                onClick={() => completeHandler(todo.id)}>Complete</a>}</p>
                                        </div>
                                    </li>
                                </div>
                            ))
                        }

                    </ul>


                    {
                        todosList.length <= 0 ? (<div
                            class="alert alert-success"
                            role="alert"
                        >
                            <strong>Du har {todosList.length} todos</strong>
                        </div>) : null

                    }
                </div>



            </div>
        </div>
    )
}

export default TodoList
