import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartItems from "./CartItemsList";
import CartTotal from "./CartTotal";

const Cart = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={6} md={8}>
                    <CartItems />
                </Col>
                <Col xs={6} md={4}>
                    <CartTotal />
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
