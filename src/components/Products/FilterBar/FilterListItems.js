import { Form } from "react-bootstrap";
import { CartState } from "../../../context/Context";

const FilterListItems = (props) => {
    const { items, group } = props;
    const {
        productState: { colour, gender, price, type },
        productDispatch,
    } = CartState();

    const setFilterState = (state) => {
        productDispatch({ type: "FILTER_BY_COLOUR", payload: state.colour });
        productDispatch({ type: "FILTER_BY_TYPE", payload: state.type });
        productDispatch({ type: "FILTER_BY_GENDER", payload: state.gender });
        productDispatch({ type: "FILTER_BY_PRICE", payload: state.price });
    };

    const handleFilterOnChange = (event) => {
        let container = document.querySelector("#filters");
        let checkBoxesSelected = container.querySelectorAll(
            'input[type="checkbox"]:checked'
        );
        let filterState = {
            colour: [],
            price: [],
            gender: [],
            type: [],
        };

        for (let checkbox of checkBoxesSelected) {
            filterState[checkbox.dataset.filter].push(checkbox.id);
        }

        setFilterState(filterState);
    };

    return (
        <div>
            <Form.Group className="mb-3">
                {items.length &&
                    items.map((item) => {
                        let checked = false;
                        if (
                            colour.includes(item.id) ||
                            price.includes(item.id) ||
                            type.includes(item.id) ||
                            gender.includes(item.id)
                        ) {
                            checked = true;
                        }
                        return (
                            <Form.Check
                                type="checkbox"
                                key={item.id}
                                data-filter={group}
                                id={item.id}
                                label={item.name}
                                onChange={handleFilterOnChange}
                                checked={checked}
                            />
                        );
                    })}
            </Form.Group>
        </div>
    );
};

export default FilterListItems;
