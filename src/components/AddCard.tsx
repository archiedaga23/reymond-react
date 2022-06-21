import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { URL_BASE } from "../constant";
import { addNote } from "../store/notes";

const AddCard = () => {
    const [newNote, setNewNote] = useState('');
    const dispatch = useDispatch();

    const addNotesHandler = () => {
        const option = { value: newNote }
        
        axios
            .post(`${URL_BASE}/note`, option)
            .then(response => {
                const { data } = response;
                console.log(response);
                dispatch(addNote(data));
                setNewNote('');
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="card add-card">
            <input 
                id="new-note"
                type="text" 
                className="add-input" 
                placeholder="Type to add note..." 
                value={newNote} 
                onChange={(e) => setNewNote(e.target.value)} 
            />
            <Button className="w-25 add-button" onClick={addNotesHandler}>Save</Button>
        </div>
    )
}

export default AddCard;