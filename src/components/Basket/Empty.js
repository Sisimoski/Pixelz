import React from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";
import sadge from "../../media/sadge.png";

function Empty() {
    return (
        <div className="basketBannerContainer">
            <div className="emptyButton">
                <Button className="shopping-button" component={Link} to="/">
                    Kupuj
                </Button>
            </div>
            <div className="emptyTekst">
                <Typography className="title" variant="h2">
                    Koszyk jest pusty
            </Typography>
                <img src={sadge}></img>
            </div>
        </div >
    )
}

export default Empty
