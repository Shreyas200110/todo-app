import { TextField, Button } from "@mui/material"
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddNew.css'
import { useSetRecoilState } from "recoil";
import { activeTodosState } from "../../Atoms/atoms"

function AddNew() {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const setActiveTodos = useSetRecoilState(activeTodosState);
    
    const addButtonClicked = () => {
        setActiveTodos((activeTodos) => {
            const newTodos = [...activeTodos, {
                id: "1",
                title: titleRef.current.value,
                description: descRef.current.value
            }];
            return newTodos;
        });
    }

    return (
        <div className="add_wrapper">
            <TextField
                label="Title"
                multiline
                maxRows={4}
                inputRef={titleRef}
            />
            <TextField
                label="Description"
                multiline
                maxRows={4}
                inputRef={descRef}
            />
            <Button variant="contained" onClick={addButtonClicked}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </div>
    )
}

export default AddNew