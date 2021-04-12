import { Container, Grid, Button1, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { commerce } from "../../lib/commerce";
import { React, useState, useEffect } from 'react';
import { Button, Card, CardGroup, Image } from 'react-bootstrap';
import './style.css';
import Spinner from '../Spinner/Spinner';

const createMarkup = (text) => {
    return { __html: text };
};

const ProductView = ({ addProduct, categories }) => {
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
    //console.log("id produktu: ", product)
    //console.log("category", categories)
    //console.log("id produktu kat:", categories[0].productsData[1].id)
    const [showSpinner, setShowSpinner] = useState(true);
    const loading = () => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 2000);
        if (showSpinner) {
            return <Spinner />;
        }
    };
    function category() {
        if (categories.length == 0)
            categoryName = "Kategoria";
        else {
            var categoryName;
            var k = 0, m = 0;
            for (var i = 0; i < 4; i++) {
                if (product.id != categories[i].productsData[k].id) {
                    if (k <= categories[i].productsData[k].length)
                        k++;
                } else {
                    m = i;
                }

            }
            categoryName = categories[m].slug;
        }
        return categoryName.toUpperCase();
    }
    if (categories.length == 0) return loading();
    return (
        <div className="productview">
            <div className="container-fluid">
                <div className="row mx-5">
                    <div className="col">
                        <h2>{product.name}</h2>
                        <h4 className="font-weight-light text-muted">{category()}</h4>
                        <Image src={product.src} className="productScreens" fluid />
                        <div className="d-flex justify-content-between align-items-center mt-5">
                            <p className="productPrice font-weight-light">{product.price}</p>
                            <div className="ml-auto mr-3 d-flex align-items-center">
                                <Button variant="outline-dark" onClick={() => { handleQuantity("decries"); }}><i class="bi bi-dash"></i></Button>
                                <p className="mx-3 my-0">Ilość: {quantity}</p>
                                <Button variant="outline-dark" onClick={() => { handleQuantity("increase"); }}><i class="bi bi-plus"></i></Button>
                            </div>
                            <Button variant="pixSecondary" onClick={() => { addProduct(product.id, quantity); }}>
                                Dodaj do koszyka
                        </Button>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <Typography className="text" variant="subtitle1" dangerouslySetInnerHTML={createMarkup(product.description)} />
                    </div>
                </div>
                <div className="row mx-5 my-4">
                </div>
            </div>
        </div >
        // <Container className="productview">
        //     <Grid container spacing={4}>
        //         <Grid item xs={12} md={6} className="image-wrapper">
        //             <img
        //                 onLoad={() => {
        //                     setLoading(false);
        //                 }}
        //                 src={product.src}
        //                 alt={product.name}
        //             />
        //         </Grid>
        //         <Grid item xs={12} md={6} className="text">
        //             <Typography variant="h2">{product.name}</Typography>
        //             <Typography variant="subtitle1" dangerouslySetInnerHTML={createMarkup(product.description)}
        //             />
        //             <Typography variant="h3">Cena: {product.price}</Typography>
        //             <Grid container spacing={4}>
        //                 <Grid item xs={12}>
        //                     <Button size="small" variant="contained" className="increase-product-quantity"
        // onClick={() => {
        //     handleQuantity("increase");
        // }}
        //                     >+</Button>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Typography className="quantity" variant="h3">
        //                         Ilość: {quantity}
        //                     </Typography>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Button size="small" color="secondary" variant="contained" className="increase-product-quantity"
        // onClick={() => {
        //     handleQuantity("decries");
        // }}
        //                     >-</Button>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <Button size="large" className="custom-button"
        // onClick={() => {
        //     addProduct(product.id, quantity);
        // }}
        //                     >
        //                         <ShoppingCart />Dodaj do koszyka
        //                     </Button>
        //                 </Grid>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        //     {loading && <Spinner />}
        // </Container>
    )

}

export default ProductView