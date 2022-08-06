import React from 'react';
import { Row, Col, Button as RBButton } from 'react-bootstrap';
import { Button } from './../src/components/Button/index';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg">Button!</RBButton>
            </Col>
            <Col>
                <Button variant="primary" size="lg">Button!</Button>
            </Col>
        </Row>
    )
}

export default Task02;

