import FilterListItems from "./FilterListItems";
import { Card } from "react-bootstrap";

const FilterList = (props) => {
    const { filters } = props;

    return (
        <div id="filters">
            {filters.length &&
                filters.map((filter) => (
                    <div key={filter.id}>
                        <Card.Subtitle>
                            <h5>
                                <strong>{filter.name}</strong>
                            </h5>
                        </Card.Subtitle>
                        <FilterListItems
                            items={filter.items}
                            group={filter.id}
                        />
                    </div>
                ))}
        </div>
    );
};

export default FilterList;
