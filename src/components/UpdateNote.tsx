import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Card, CardBody, CardText, Button } from "reactstrap"
import { IState, URL_BASE } from "../constant";
import { updateNote } from "../store/notes";

const UpdateNote = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { value, id } = useSelector((state: IState) => state.note);
    const [newValue, setNewValue] = useState<string>('');

    useEffect(() => {
        setNewValue(value as string);
    }, [value]);

    const updateHandler = () => {
        const option = { id, value: newValue  }

        axios
            .patch(`${URL_BASE}/note`, option)
            .then(response => {
                
                dispatch(updateNote(response.data));
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <Card className="my-note">
                <CardBody>
                    <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} className='update-input' placeholder="Upate note..."/>
                    <Button className="back-btn" onClick={updateHandler}>Update</Button>
                </CardBody>
            </Card>
        </Container>
    )
}

export default UpdateNote;