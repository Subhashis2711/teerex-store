import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import configObject from "../config";
import { CartReducer, ProductReducer } from "./Reducer";

const Cart = createContext();

const Context = (props) => {
    const [cart, setCart] = useState([]);

    const [state, dispatch] = useReducer(CartReducer, {
        products: [],
        cart: [],
    });

    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem("storageCart"));
        if (storageCart) {
            setCart(storageCart);
        }
    }, []);

    const [productState, productDispatch] = useReducer(ProductReducer, {
        colour: [],
        gender: [],
        price: [],
        type: [],
        searchQuery: "",
    });

    const getProducts = async () => {
        try {
            const response = await fetch(configObject.BASE_URL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const onLoadHandler = async () => {
            const productsData = await getProducts();
            dispatch({
                type: "INIT",
                payload: {
                    products: productsData,
                    cart: cart,
                },
            });
        };
        onLoadHandler();
    }, [cart]);

    return (
        <Cart.Provider
            value={{ state, dispatch, productState, productDispatch }}
        >
            {props.children}
        </Cart.Provider>
    );
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
