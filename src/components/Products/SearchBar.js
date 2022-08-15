import { Form, FormControl } from "react-bootstrap";
import { CartState } from "../../context/Context";

const SearchBar = (props) => {
    const { productDispatch } = CartState();

    const onSearchHanlder = (event) => {
        productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: event.target.value,
        });
    };

    return (
        <Form>
            <FormControl
                className="search-input m-auto"
                type="text"
                placeholder="Search for products..."
                onChange={onSearchHanlder}
            />
        </Form>
    );
};

export default SearchBar;
