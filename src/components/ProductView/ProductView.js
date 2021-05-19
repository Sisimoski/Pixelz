import { Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { commerce } from "../../lib/commerce";
import { React, useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import './style.css';
import Spinner from '../Spinner/Spinner';

const createMarkup = (text) => {
    return { __html: text };
};

const ProductView = ({ addProduct, categories, products }) => {
    const [product, setProduct] = useState({});

    const [quantity, setQuantity] = useState(1);
    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const { name, price, media, quantity, description } = response;
        setProduct({
            id, name, quantity, description, src: media.source, price: price.formatted_with_symbol,
        });
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);

    const handleQuantity = (param) => {
        if (param === "decries" && quantity > 1) {
            setQuantity(quantity - 1);
        }
        if (param === "increase" && quantity < 10) {
            setQuantity(quantity + 1);
        }
    }
    console.log("id produktu: ", products)
    // console.log("id produktow all: ", products[0].categories[0].name)
    //console.log("category", categories)
    // console.log("id produktu kat:", categories[0].productsData[1].id)
    const [showSpinner, setShowSpinner] = useState(true);
    const loading = () => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 5000);
        if (showSpinner) {
            return <Spinner />;
        }
    };
    function category2() {
        if (products.length == 0)
            categoryName = "Kategoria";
        else {
            var categoryName;
            for (var i = 0; i < 25; i++) {
                if (product.id == products[i].id)
                    categoryName = products[i].categories[0].name
            }
        }
        return categoryName;
    }
    if (categories.length == 0) return loading();
    return (
        <div className="productview">
            <div className="container-fluid">
                <div className="row mx-md-5">
                    <div className="col-12 col-md-4">
                        <Image src={product.src} className="productScreens" fluid />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col">
                                <h1 className="display-3">{product.name}</h1>
                                <h4>{category2()}</h4>
                                {/* Desktop */}
                                <div className="d-none d-md-flex justify-content-between align-items-center">
                                    <p className="productPrice font-weight-light">{product.price}</p>
                                    <div className="ml-auto mr-3 d-flex align-items-center">
                                        <Button variant="outline-dark" onClick={() => { handleQuantity("decries"); }}><i class="bi bi-dash"></i></Button>
                                        <p className="mx-3 my-0">Ilość: {quantity}</p>
                                        <Button variant="outline-dark" onClick={() => { handleQuantity("increase"); }}><i class="bi bi-plus"></i></Button>
                                    </div>
                                    <Button variant="pixSecondary" onClick={() => { addProduct(product.id, quantity); }}>
                                        <ShoppingCart /> Dodaj do koszyka
                                    </Button>
                                </div>
                                {/* Mobile */}
                                <div className="d-md-none">
                                    <div className="row">
                                        <div className="col">
                                            <p className="productPrice font-weight-light text-center">{product.price}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto d-flex">
                                            <Button variant="outline-dark" onClick={() => { handleQuantity("decries"); }}><i class="bi bi-dash"></i></Button>
                                            <p className="mx-3 my-0">Ilość: {quantity}</p>
                                            <Button variant="outline-dark" onClick={() => { handleQuantity("increase"); }}><i class="bi bi-plus"></i></Button>

                                        </div>
                                        <div className="col">
                                            <Button variant="pixSecondary" block onClick={() => { addProduct(product.id, quantity); }}>
                                                <ShoppingCart /> Dodaj
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="productDescription">
                                    <p><Typography dangerouslySetInnerHTML={createMarkup(product.description)} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ProductView