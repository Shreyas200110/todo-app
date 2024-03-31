import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Todos from '../Todos/Todos';
import './DisplayTodos.css'
import { Box, Tabs, Tab } from '@mui/material';
import { activeTodosState, completedTodosState, currTabState, todosState } from '../../Atoms/atoms';

function DisplayTodos(){
    const activeTodos = useRecoilValue(activeTodosState);
    const completedTodos = useRecoilValue(completedTodosState);
    const setTodos = useSetRecoilState(todosState);
    const [currTab, setCurrTab ] = useRecoilState(currTabState);

    const activeListClicked = () => {
        setTodos(activeTodos);
        setCurrTab(0);
    }
    const completedListClicked = () => {
        setTodos(completedTodos);
        setCurrTab(1);
    }

    return(
        <div className="display_wrapper">
            <div className="headers">
                <Box sx={{ width: '100' }}>
                    <Tabs value={currTab} centered>
                        <Tab label="ToDo" onClick={activeListClicked}/>
                        <Tab label="Completed" onClick={completedListClicked}/>
                    </Tabs>
                </Box>
            </div>
            <Todos/>
        </div>
    )
}

export default DisplayTodos