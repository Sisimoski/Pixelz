import { React, useState } from 'react'
import { Grid } from "@material-ui/core";
import Empty from './Empty';
import Spinner from '../Spinner/Spinner';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import './style.css';
import Item from './item.js'

const Basket = ({
    basketData,
    updateProduct,
    handleEmptyBasket,
    RemoveItemFromBasket,
    products,
}) => {
    const [showSpinner, setShowSpinner] = useState(true);
    const loading = () => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 5000);
        if (showSpinner) {
            return <Spinner />;
        }
        return <Empty />;
    };
    //console.log("produkts:", products)
    if (!basketData.line_items || !basketData.line_items.length || !products.length) return loading();
    return (
        <div class="container-fluid">
            <div class="row mx-xl-3 justify-content-between">
                <div class="col">
                    <h2>Koszyk</h2>
                    <div className="d-flex justify-content-between align-items-end">
                        <p className="font-weight-light cartDescription">{basketData.total_items} przedmioty dodane do koszyka.</p>
                        <Button variant="outline-danger" size="sm" onClick={handleEmptyBasket}>
                            Usuń koszyk
                        </Button>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <p className="text-muted text-uppercase">Szczegóły produktu</p>
                        </div>
                        <div className="col-2">
                            <p className="text-muted text-uppercase text-center">Ilość</p>
                        </div>
                        <div className="col-2">
                            <p className="text-muted text-uppercase text-center">Cena</p>
                        </div>
                        <div className="col-2">
                            <p className="text-muted text-uppercase text-center">Łącznie</p>
                        </div>
                    </div>
                    {basketData.line_items.map((item) => {
                        return (
                            <Grid key={item.id} item>
                                <Item
                                    basket
                                    product={item}
                                    updateProduct={updateProduct}
                                    RemoveItemFromBasket={RemoveItemFromBasket}
                                    products={products}
                                />
                            </Grid>
                        );
                    })}

                </div>
                <div className="col-12 col-xl-auto summaryBg px-4 px-xl-0 summaryPanel">
                    <div className="py-4 m-lg-4">
                        <h2>Podsumowanie</h2>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase m-0">{basketData.total_items} przedmioty</p>
                            <p className="font-weight-bold text-uppercase m-0">{basketData.subtotal.formatted_with_code}</p>
                        </div>
                        <Form className="my-5">
                            
                            <Form.Group className="text-uppercase" controlId="">
                                <Form.Label>Kod promocyjny</Form.Label>
                                <Form.Control placeholder="Wprowadź kod promocyjny..." />
                            </Form.Group>
                            <Button variant="pixPrimary" type="submit">
                                Zastosuj
                        </Button>
                        </Form>
                        <hr className="mt-5" />
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase">Łącznie</p>
                            <p className="font-weight-bold">{basketData.subtotal.formatted_with_code}</p>
                        </div>
                        <div className="text-center">
                            <Button variant="pixSecondary" type="submit" href="/checkout">
                                Przejdź do płatności
                    </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <Container id="basket">
        //     <Grid container justify="center" spacing={4}>
        //         {basketData.line_items.map((item) => {
        //             return (
        //                 <Grid key={item.id} item xs={12} sm={6} md={4}>
        //                     <CustomCard
        //                         basket
        //                         product={item}
        //                         updateProduct={updateProduct}
        //                         RemoveItemFromBasket={RemoveItemFromBasket}
        //                     />
        //                 </Grid>
        //             );
        //         })}
        //     </Grid>
        //     <div className="actions">
        //         <Button
        //             size="small"
        //             color="secondary"
        //             variant="contained"
        //             onClick={handleEmptyBasket}
        //         >
        //             Empty Basket
        //   </Button>

        //         <Button
        //             size="small"
        //             variant="contained"
        //             component={Link}
        //             to="/checkout"
        //         >
        //             Checkout
        //   </Button>
        //     </div>
        // </Container>
    );
};

export default Basket;