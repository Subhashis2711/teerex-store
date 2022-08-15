export const CartReducer = (state, action) => {
    switch (action.type) {
        case "INIT": {
            const { products, cart } = action.payload;

            return {
                ...state,
                products,
                cart,
            };
        }

        case "ADD_TO_CART": {
            let newCartState = [...state.cart, { ...action.payload, qty: 1 }];
            localStorage.setItem("storageCart", JSON.stringify(newCartState));

            return {
                ...state,
                cart: newCartState,
            };
        }

        case "REMOVE_FROM_CART": {
            const filteredCart = state.cart.filter(
                (item) => item.id !== action.payload.id
            );
            localStorage.setItem("storageCart", JSON.stringify(filteredCart));

            return { ...state, cart: filteredCart };
        }

        case "CHANGE_CART_QUANTITY":
            const updatedCart = state.cart.filter((product) =>
                product.id === action.payload.id
                    ? (product.qty = action.payload.qty)
                    : product.qty
            );
            localStorage.setItem("storageCart", JSON.stringify(updatedCart));

            return {
                ...state,
                cart: updatedCart,
            };

        default:
            return state;
    }
};

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_BY_COLOUR": {
            return {
                ...state,
                colour: action.payload,
            };
        }

        case "FILTER_BY_GENDER": {
            return {
                ...state,
                gender: action.payload,
            };
        }

        case "FILTER_BY_PRICE": {
            return {
                ...state,
                price: action.payload,
            };
        }

        case "FILTER_BY_TYPE": {
            return {
                ...state,
                type: action.payload,
            };
        }

        case "FILTER_BY_SEARCH": {
            return {
                ...state,
                searchQuery: action.payload,
            };
        }

        case "CLEAR_FILTERS": {
            return {
                colour: [],
                gender: [],
                price: [],
                type: [],
                searchQuery: "",
            };
        }

        default:
            return state;
    }
};
