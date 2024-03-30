import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Todos from '../Todos/Todos';
import './DisplayTodos.css'
import Fab from '@mui/material/Fab';
import { activeTodosState, completedTodosState, todosState } from '../../Atoms/atoms';

function DisplayTodos(){
    const activeTodos = useRecoilValue(activeTodosState);
    const completedTodos = useRecoilValue(completedTodosState);
    const setTodos = useSetRecoilState(todosState);

    const activeListClicked = () => {
        setTodos(activeTodos);
    }
    const completedListClicked = () => {
        setTodos(completedTodos);
    }

    return(
        <div className="display_wrapper">
            <div className="headers">
                <Fab variant="extended" onClick={activeListClicked}>
                    ToDo
                </Fab>
                <Fab variant="extended" onClick={completedListClicked}>
                   Completed 
                </Fab>
            </div>
            <Todos/>
        </div>
    )
}

export default DisplayTodos