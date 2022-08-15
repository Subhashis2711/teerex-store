import { Button, Card } from "react-bootstrap";
import FilterList from "./FilterList";

const FilterBar = (props) => {
    return (
        <Card className="bg-secondary text-light" style={{ fontSize: "120%" }}>
            <Card.Body>
                <Card.Title className="mb-3">
                    <h4>Apply Filters</h4>
                </Card.Title>
                <FilterList filters={props.filters} id="filters" />
                <Button href="#">Clear Filters</Button>
            </Card.Body>
        </Card>
    );
};

export default FilterBar;
