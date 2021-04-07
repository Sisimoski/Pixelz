import { React, useState } from 'react'
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import './style.css';

const Item = ({
    basket,
    product,
    addProduct,
    updateProduct,
    RemoveItemFromBasket,
}) => {
    return (
        <div className="row my-4">
            <div className="col-6">
                <div className="row">
                    <div className="col-auto">
                        <Image src={product.media.source} className="cartItemImage" rounded />
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                        <p className="cartItemTitle">{product.name}</p>
                        <p className="cartItemPlatform font-weight-light">Platform Title</p>
                        <Button variant="outline-danger" size="sm" className="text-uppercase mt-auto" onClick={() => {RemoveItemFromBasket(product.id);}}>
                            Usuń
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <Form.Group controlId="exampleForm.ControlSelect1" className="w-50">
                    <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </div>
            <div className="col-2 text-center text-pixprimary">
                {product.price.formatted_with_symbol}
            </div>
            <div className="col-2 text-center text-pixprimary">
                {product.price.formatted_with_symbol}
            </div>
        </div>
    );
}


export default Item;