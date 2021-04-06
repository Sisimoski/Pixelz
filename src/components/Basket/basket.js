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

    const summaryBg = {
        backgroundColor: '#EBEBEB'
    };

    if (!basketData.line_items || !basketData.line_items.length) return loading();
    return (
        <div class="container-fluid">
            <div class="row mx-3 justify-content-between">
                <div class="col-sm-8">
                    <h2>Koszyk</h2>
                    <div className="d-flex justify-content-between">
                        <h6>3 przedmioty dodane do koszyka.</h6>
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
                    <div className="row">
                        <div className="col">
                            <Image src="holder.js/171x180" rounded />
                        </div>
                        <div className="col-6">
                            <h6>Forza Horizon 4</h6>
                            <p>Xbox One</p>
                            <Button variant="outline-danger" size="sm">
                                Usuń
                            </Button>
                        </div>
                        <div className="col-1">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col">
                            89.00 PLN
                        </div>
                        <div className="col">
                            89.00 PLN
                        </div>
                    </div>

                </div>
                <div className="col-sm-3" style={summaryBg}>
                    <div className="m-4">
                        <h2>Podsumowanie</h2>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase">3 przedmioty</p>
                            <p>277.00 PLN</p>
                        </div>
                        <Form>
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
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase">Łącznie</p>
                            <p>286.00 PLN</p>
                        </div>
                        <div className="text-center">
                            <Button variant="pixSecondary" type="submit">
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