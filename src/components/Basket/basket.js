import { React, useState } from 'react'
import { Grid, Button, Container } from "@material-ui/core";
import CustomCard from '../../CustomCard';
import { Link } from "react-router-dom";
import Empty from './Empty';
import Spinner from '../Spinner/Spinner';
const Basket = ({
    basketData,
    updateProduct,
    handleEmptyBasket,
    RemoveItemFromBasket,
}) => {
    const [showSpinner, setShowSpinner] = useState(true);
    const loading = () => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 2000);
        if (showSpinner) {
            return <Spinner />;
        }
        return <Empty />;
    };

    if (!basketData.line_items || !basketData.line_items.length) return loading();
    return (
        <Container id="basket">
            <Grid container justify="center" spacing={4}>
                {basketData.line_items.map((item) => {
                    return (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <CustomCard
                                basket
                                product={item}
                                updateProduct={updateProduct}
                                RemoveItemFromBasket={RemoveItemFromBasket}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <div className="actions">
                <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={handleEmptyBasket}
                >
                    Empty Basket
          </Button>

                <Button
                    size="small"
                    variant="contained"
                    component={Link}
                    to="/checkout"
                >
                    Checkout
          </Button>
            </div>
        </Container>
    );
};

export default Basket;