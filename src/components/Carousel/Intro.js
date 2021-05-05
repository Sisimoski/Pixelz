import React from 'react'
import baner from "../../media/baner3.png"
import { Container, Button, Grid } from "@material-ui/core";
import "./style.css"
function Intro() {
    return (
        <div className="banner">
            <Container id="baner">
                <Grid container spacing={4}>
                    <Grid className="brand" item sm={12}>
                        <img src={baner} alt="Brand-tv" />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <p className="tekst">Skorzystaj z największego katalogu z grami, <br /> wybierz interesującą Cię pozycje,<br />  a następnie dodaj do koszyka.</p>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button className="shopping-button" href="#products">
                            Zobacz katalog
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Intro
