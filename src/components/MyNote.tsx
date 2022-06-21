import { useSelector } from "react-redux";
import { Container, Card, CardBody, CardText, Button } from "reactstrap"
import { IState } from "../constant";
import { Link } from "react-router-dom";
const MyNote = () => {
    const { value } = useSelector((state: IState) => state.note);

    return (
        <Container>
            <Card className="my-note">
                <CardBody>
                    <CardText>
                        {
                            value
                        }
                    </CardText>
                    <Link to='/'><Button className="back-btn">Back</Button></Link>
                </CardBody>
            </Card>
        </Container>
    )
}

export default MyNote;