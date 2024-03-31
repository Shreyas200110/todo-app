import { TextField, Button, Alert} from "@mui/material"
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddNew.css'
import { useSetRecoilState } from "recoil";
import { activeTodosState, currTabState } from "../../Atoms/atoms"
import { v4 as uuidv4 } from 'uuid'; 
const successMsg = "Todo added successfully";
const errorMsg = "Some of your fields are empty";

function AddNew() {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const setActiveTodos = useSetRecoilState(activeTodosState);
    const setCurrTab = useSetRecoilState(currTabState);
    const [showAlert, setShowAlert] = useState(false);
    let [severityState, setSeverityState] = useState(successMsg);
    let [alertMsg, setAlertMsg] = useState(successMsg);
    const inputboxsx = {
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#5c5470',  // Change to your desired label color
        },
        '& .MuiOutlinedInput-root': {  // Targeting the root element of the input
            '&.Mui-focused fieldset': {  // Applying styles when input is focused
                borderColor: '#5c5470',  // Change to your desired border color
            },
        },
    }

    const addButtonClicked = () => {
        if(titleRef.current.value !== "" && titleRef.current.value !== ""){
            setActiveTodos((activeTodos) => {
                const newTodos = [{
                    id: uuidv4(), 
                    title: titleRef.current.value,
                    description: descRef.current.value,
                    state: "active"
                }, ...activeTodos];
                return newTodos;
            });
    
            titleRef.current.value = "";
            descRef.current.value = "";
            setSeverityState("success");
            setAlertMsg(successMsg);
            setCurrTab(0); 
        }
        else {
            setSeverityState("error");
            setAlertMsg(errorMsg)
        }

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }

    return (
        <div className="add_alert_wrapper">
            <div className="add_wrapper">
                <TextField
                    required={true}
                    label="Title"
                    multiline
                    maxRows={4}
                    inputRef={titleRef}
                    sx={inputboxsx}
                />
                <TextField
                    required={true}
                    label="Description"
                    multiline
                    maxRows={4}
                    inputRef={descRef}
                    sx={inputboxsx}
                />
                <Button variant="contained" onClick={addButtonClicked}
                    sx={{
                        backgroundColor: '#5c5470', // Change to the desired hover color
                        '&:hover': {
                            backgroundColor: '#453953',
                        },
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} className="add_icon"/>
                </Button>
            </div>
            {showAlert && (<Alert severity={severityState} className="alert">{alertMsg}</Alert>)}
        </div>
    )
}

export default AddNew