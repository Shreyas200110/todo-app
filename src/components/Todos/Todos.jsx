import { useState, useEffect } from 'react'
import SingleTodo from './Single_Todo/SingleTodo'
import './Todos.css'
import { useRecoilValue, useRecoilState } from 'recoil';
import {activeTodosState, completedTodosState, todosState} from '../../Atoms/atoms'

function Todos(){
    const activeTodos = useRecoilValue(activeTodosState);
    const [todos, setTodos] = useRecoilState(todosState);
    
    useEffect(() => {
        setTodos(activeTodos);
    }, [activeTodos]);

    return(
        <div className="List"> 
            {
                todos?.map((todo) => {
                    return <SingleTodo 
                                title={todo?.title} 
                                description={todo?.description} 
                                id = {todo.id}
                                state = {todo.state}
                            ></SingleTodo>
                })
            }
        </div>
    )
}

export default Todos