import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import _ from "lodash";

const Calculator = () => {
    const greeting = _.join(["Lodash","Rocks","!"], " ");

    return (
        <Card style={{ width: '18rem', margin:'150px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{greeting}</Card.Title>
                <Card.Text>
                    A quick example of using lodash in a component!
                </Card.Text>
                <Button variant="primary">Button</Button>
            </Card.Body>
        </Card>
    )
}

export default Calculator