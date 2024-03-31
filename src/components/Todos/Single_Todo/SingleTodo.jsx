import './SingleTodo.css'
import { ButtonGroup, Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSetRecoilState } from 'recoil'
import { activeTodosState, completedTodosState, todosState } from '../../../Atoms/atoms'
function SingleTodo({id, title, description, state}){
    const setActiveTodos = useSetRecoilState(activeTodosState);
    const setCompletedTodos = useSetRecoilState(completedTodosState);
    const setTodos = useSetRecoilState(todosState);

    const handleCheckClicked = () => {
        let completedOne = {};
        setActiveTodos((activeTodos) => {
            const todoIndex = activeTodos.findIndex(todo => todo.id === id);
            let temp = [...activeTodos];
            completedOne = temp.splice(todoIndex, 1)[0];
            return temp;
        });

        setCompletedTodos((completedTodos) => {
            return [...completedTodos, {...completedOne, state : "completed"}];
        });
    } 

    const handleDeleteClicked = () => {
        if(state === 'completed'){
            let newCompletedTodos = [];
            setCompletedTodos((completedTodos) => {
                newCompletedTodos = [...completedTodos].filter((todo) => {
                    return todo.id !== id;
                });
                return newCompletedTodos;
            });
            setTodos(newCompletedTodos);
        }
        else if(state === 'active'){
            setActiveTodos((activeTodos) => {
                return activeTodos.filter((todo) => {
                    return todo.id !== id;
                });
            });
        }
    }

    return(
        <div className="todo_wrapper">
            <div className="content_wrapper">
                <div className="todo_title">
                    {title}
                </div>
                <div className="desc">
                    {description}
                </div>
            </div>
            <div className="actions_wrapper">
                <ButtonGroup variant="outlined" aria-label="Basic button group"
                    
                >
                    {state === 'active' && (<Button
                        sx={{
                            borderColor:'#453953'
                        }}
                    >
                        <FontAwesomeIcon className="check" icon={faCheck} onClick={handleCheckClicked} />
                    </Button>)}
                    <Button
                        sx={{
                            borderColor:'#5c5470',
                        }}
                    >
                        <FontAwesomeIcon className="delete" icon={faTrash} onClick={handleDeleteClicked} 
                            
                        />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default SingleTodo