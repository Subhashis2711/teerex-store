import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../context/Context";

const CartTotal = () => {
    const {
        state: { cart },
    } = CartState();

    const [cartTotal, setCartTotal] = useState();

    useEffect(() => {
        setCartTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <Card className="bg-secondary text-light" style={{ fontSize: "120%" }}>
            <Card.Body>
                <div>
                    <div>
                        <h3>Subtotal ({cart.length}) items</h3>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 20 }}>
                        <h4>Total: Rs {cartTotal}</h4>
                    </div>
                    <div className="text-center">
                        <Button type="button" disabled={cart.length === 0}>
                            Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CartTotal;
