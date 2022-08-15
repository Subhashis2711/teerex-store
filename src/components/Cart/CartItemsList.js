import React from "react";
import { ListGroup } from "react-bootstrap";
import { CartState } from "../../context/Context";
import CartItem from "./CartItem";

const CartItemsList = (props) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <ListGroup>
            {cart.map((product) => (
                <ListGroup.Item key={product.id}>
                    <CartItem product={product} dispatch={dispatch} />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default CartItemsList;
