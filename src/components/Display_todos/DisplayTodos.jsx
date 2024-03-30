import Todos from '../Todos/Todos';
import './DisplayTodos.css'
import Fab from '@mui/material/Fab';

function DisplayTodos(){
    return(
        <div className="display_wrapper">
            <div className="headers">
                <Fab variant="extended">
                    ToDo
                </Fab>
                <Fab variant="extended">
                   Completed 
                </Fab>
            </div>
            <Todos/>
        </div>
    )
}

export default DisplayTodos