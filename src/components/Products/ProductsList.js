import { Col, Row } from "react-bootstrap";
import { CartState } from "../../context/Context";
import ProductItem from "./ProductItem";

const ProductsList = (props) => {
    const {
        state: { products },
        productState: { colour, gender, price, type, searchQuery },
    } = CartState();

    const filterProducts = () => {
        let filteredProducts = products;

        if (colour.length) {
            filteredProducts = filteredProducts.filter((product) => {
                return colour.includes(product.color);
            });
        }

        if (gender.length) {
            filteredProducts = filteredProducts.filter((product) => {
                return gender.includes(product.gender);
            });
        }

        if (type.length) {
            filteredProducts = filteredProducts.filter((product) => {
                return type.includes(product.type);
            });
        }

        if (price.length) {
            var min, max;
            price.forEach((range) => {
                let rangeArray = range.split("-");
                min = rangeArray[0];
                max = rangeArray[1];
            });

            filteredProducts = filteredProducts.filter((product) => {
                let productPrice = parseInt(product.price);
                let status = false;

                if (max.trim().length !== 0) {
                    status = productPrice >= min && productPrice <= max;
                } else {
                    status = productPrice >= min;
                }

                return status;
            });
        }

        if (searchQuery.length) {
            filteredProducts = filteredProducts.filter((product) => {
                return (
                    product.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    product.color
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    product.type
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                );
            });
        }
        return filteredProducts;
    };

    return (
        <div>
            <Row>
                {filterProducts().length &&
                    filterProducts().map((product) => (
                        <Col lg={4} md={6} xs={6} key={product.id}>
                            <ProductItem product={product} />
                        </Col>
                    ))}
            </Row>
        </div>
    );
};

export default ProductsList;
