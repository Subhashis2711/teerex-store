import React from "react";
import { Button, Col, Form, Image, Row, Toast } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const CartItem = (props) => {
    const { product, dispatch } = props;

    const quantityChangeHandler = (event) => {
        if (event.target.value === 0) {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
            });
        } else {
            if (event.target.value > product.quantity) {
                <Toast className="d-inline-block m-1" bg="warning">
                    <Toast.Body>More products can not be added!</Toast.Body>
                </Toast>;
            } else {
                dispatch({
                    type: "CHANGE_CART_QUANTITY",
                    payload: {
                        id: product.id,
                        qty: event.target.value,
                    },
                });
            }
        }
    };

    return (
        <Row style={{ fontSize: "125%" }}>
            <Col md={1} xs={12}>
                <Image
                    src={product.imageURL}
                    alt={product.name}
                    fluid
                    rounded
                />
            </Col>

            <Col md={4} xs={12}>
                <span>{product.name}</span>
            </Col>
            <Col md={3} xs={12}>
                <span>Rs. {product.price}</span>
            </Col>
            <Col md={2} xs={12}>
                <span>
                    <strong>Qty:</strong>
                </span>
                <Form.Control
                    type="number"
                    value={product.qty}
                    onChange={quantityChangeHandler}
                />
            </Col>
            <Col md={2} xs={12} className="text-center">
                <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                        })
                    }
                >
                    <AiFillDelete fontSize="20px" />
                    Delete
                </Button>
            </Col>
        </Row>
    );
};

export default CartItem;
