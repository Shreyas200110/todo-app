import { TextField, Button, Alert} from "@mui/material"
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddNew.css'
import { useSetRecoilState } from "recoil";
import { activeTodosState } from "../../Atoms/atoms"
import { v4 as uuidv4 } from 'uuid'; 

function AddNew() {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const setActiveTodos = useSetRecoilState(activeTodosState);
    
    const addButtonClicked = () => {
        if(titleRef.current.value !== "" && titleRef.current.value !== ""){
            setActiveTodos((activeTodos) => {
                const newTodos = [...activeTodos, {
                    id: uuidv4(), 
                    title: titleRef.current.value,
                    description: descRef.current.value,
                    state: "active"
                }];
                return newTodos;
            });
    
            titleRef.current.value = "";
            descRef.current.value = "";
        }
        else {
        }
    }

    return (
        <div>
            <div className="add_wrapper">
                <TextField
                    required={true}
                    label="Title"
                    multiline
                    maxRows={4}
                    inputRef={titleRef}
                />
                <TextField
                    required={true}
                    label="Description"
                    multiline
                    maxRows={4}
                    inputRef={descRef}
                />
                <Button variant="contained" onClick={addButtonClicked}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <Alert severity="success">This is a success Alert.</Alert>
        </div>
    )
}

export default AddNew