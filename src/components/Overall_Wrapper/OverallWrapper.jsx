import DisplayTodos from '../Display_todos/DisplayTodos';
import AddNew from '../add_new/AddNew';
import './OverallWrapper.css'
function OverallWrapper(){
    return(
        <div>
            <div className='title'>
                My Todos
            </div>
            <div className='outer_wrapper'>
                <AddNew></AddNew>
                <DisplayTodos/>
            </div>
        </div>
    )
}

export default OverallWrapper