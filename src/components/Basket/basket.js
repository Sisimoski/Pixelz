import { React, useState } from 'react'
import { Grid, ButtonMat, ContainerMat } from "@material-ui/core";
import CustomCard from '../../CustomCard';
import { Link } from "react-router-dom";
import Empty from './Empty';
import Spinner from '../Spinner/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Form } from 'react-bootstrap';
import './style.css';
import Item from './item.js'

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
        <div class="container-fluid">
            <div class="row mx-3 justify-content-between">
                <div class="col">
                    <h2>Koszyk</h2>
                    <div className="d-flex justify-content-between align-items-end">
                        <p className="font-weight-light cartDescription">3 przedmioty dodane do koszyka.</p>
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
                    <Item/>
                    <Item/>

                </div>
                <div className="col-auto summaryBg">
                    <div className="m-4">
                        <h2>Podsumowanie</h2>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase m-0">3 przedmioty</p>
                            <p className="font-weight-bold text-uppercase m-0">277.00 PLN</p>
                        </div>
                        <Form className="my-5">
                            <Form.Group className="text-uppercase" controlId="">
                                <Form.Label>Wysyłka</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Przesyłka standardowa - 9.00 PLN</option>
                                </Form.Control>
                            </Form.Group>
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
                            <p className="font-weight-bold">286.00 PLN</p>
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