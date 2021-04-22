import { Typography } from '@material-ui/core';
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
                        <Button variant="outline-danger" size="sm" className="text-uppercase mt-auto" onClick={() => { RemoveItemFromBasket(product.id); }}>
                            Usuń
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-2 d-flex justify-content-center">
                {basket && (
                    <>
                        <Button
                            size="small"
                            color="secondary"
                            variant="outlined"
                            onClick={() => {
                                RemoveItemFromBasket(product.id);
                            }}
                        >
                        </Button>
                        <>
                            <Button
                                size="small"
                                variant="outlined"
                                className="increase-product-quantity"
                                onClick={() => {
                                    updateProduct(product.id, product.quantity + 1);
                                }}
                            >
                                +
                </Button>
                            <p className="quantity">&nbsp;{product.quantity}&nbsp;</p>
                            <Button
                                size="small"
                                color="secondary"
                                variant="outlined"
                                className="increase-product-quantity"
                                onClick={() => {
                                    updateProduct(product.id, product.quantity - 1);
                                }}
                            >
                                -
                </Button>
                        </>
                    </>
                )}
            </div>
            <div className="col-2 text-center text-pixprimary">
                {product.price.formatted} ZŁ
            </div>
            <div className="col-2 text-center text-pixprimary">
                {product.price.raw * product.quantity} ZŁ
            </div>
        </div>
    );
}


export default Item;