import './SingleTodo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
function SingleTodo({title, description}){
    return(
        <div className="todo_wrapper">
            <div className="content_wrapper">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {description}
                </div>
            </div>
            <div className="actions_wrapper">
                <FontAwesomeIcon className="check" icon={faCheck} />
                <FontAwesomeIcon className="delete" icon={faTrash} />
            </div>
        </div>
    )
}

export default SingleTodo