import { useState, useEffect } from 'react'
import SingleTodo from './Single_Todo/SingleTodo'
import './Todos.css'
import { useRecoilValue } from 'recoil';
import {activeTodosState, completedTodosState} from '../../Atoms/atoms'

function Todos(){
    const activeTodos = useRecoilValue(activeTodosState);
    const completedTodos = useRecoilValue(completedTodosState);
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        if(activeTodos) setTodos(activeTodos);
        else setTodos([]);
    }, [activeTodos]);
    return(
        <div className="List"> 
            {
                todos?.map((todo) => {
                    return <SingleTodo title={todo?.title} description={todo?.description}></SingleTodo>
                })
            }
        </div>
    )
}

export default Todos