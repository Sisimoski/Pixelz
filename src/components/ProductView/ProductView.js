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

const ProductView = ({ addProduct }) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

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
    return (
        <div className="container-fluid">
            <div className="row mx-5">
                <div className="col">
                    <h2>{product.name}</h2>
                    <h4 className="font-weight-light text-muted">Xbox One</h4>

                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <p className="productPrice font-weight-light">{product.price}</p>
                        <div className="ml-auto mr-3 d-flex align-items-center">
                            <Button variant="outline-dark" onClick={() => { handleQuantity("decries"); }}><i class="bi bi-dash"></i></Button>
                            <p className="mx-3 my-0">Ilość: {quantity}</p>
                            <Button variant="outline-dark" onClick={() => { handleQuantity("increase"); }}><i class="bi bi-plus"></i></Button>
                        </div>
                        <Button variant="pixSecondary" onClick={() => { addProduct(product.id, quantity);}}>
                            Dodaj do koszyka
                        </Button>
                    </div>
                    <hr/>
                </div>
                <div className="col-4">
                    <p className="text-justify productDescription">{product.description}</p>
                    <p className="font-italic text-justify productSummary">Some placeholder text to demonstrate justified text alignment. Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
                </div>
            </div>
            <div className="row mx-5 my-4">
                <div className="col-9">
                    <Image src={product.src} className="productScreens" fluid />
                </div>
                <div className="col-3">
                    <Image src={product.src} className="productScreens" fluid />
                    <a href="#" className="linkOnImage text-uppercase">Zobacz więcej <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>

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
