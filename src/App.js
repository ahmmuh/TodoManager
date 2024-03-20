import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import Loading from './components/Loading'
import './App.css'
const BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=15"
const App = () => {
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const getTodos = async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            setTodos(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getTodos()
    }, [])
    return (
        <div className='App container p-5 justify-content-center'>
            <div className='d-flex align-items-center ' id="silver">
                <i class="fa-3x fa-solid fa-user-pen silver" style={{
                    color: 'silver',
                    fontStyle: 'oblique'
                }}></i> <h4 className='silver p-3' style={{
                    color: 'silver',
                    fontStyle: 'oblique'
                }}>Todo Manager</h4>
            </div>
            {
                loading ? <Loading /> : <TodoList todos={todos} />
            }

        </div >
    )
}

export default App
