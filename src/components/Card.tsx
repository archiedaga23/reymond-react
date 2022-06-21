import axios from 'axios';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { INote, URL_BASE } from '../constant';
import { deleteNote } from '../store/notes';
import { FaArrowUp } from 'react-icons/fa';
import { setNote } from '../store/note';
import { useNavigate } from 'react-router-dom';

interface IProps {
    list: INote
}

const Card: React.FC<IProps> = ({ list }) => {
    const { value, id } = list;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const noteDeleteHandler = () => {

        axios
            .delete(`${URL_BASE}/note/${id}`)
            .then(() => dispatch(deleteNote(id)))
            .catch(err => console.log(err))

    }

    const noteUpdateHandler = () => {
        dispatch(setNote(list));
        navigate('/update');
    }

    return (
        <div className="card">
            <p>{ value }</p>
            <p id='id'>ID: { id }</p>
            <FaArrowUp className='update-btn' onClick={noteUpdateHandler}/>
            <FaTrash className='delete-btn' onClick={noteDeleteHandler}/>
        </div>
    )
}

export default Card;